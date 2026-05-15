"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { VideoAsset } from "@/lib/media";

type VideoShowcaseGridProps = {
  videos: VideoAsset[];
};

function isDirectVideo(src: string): boolean {
  return /\.(mp4|webm|ogg)(\?.*)?$/i.test(src);
}

export function VideoShowcaseGrid({ videos }: VideoShowcaseGridProps) {
  const previewVideos = useMemo(() => videos.filter((video) => isDirectVideo(video.src)), [videos]);
  const videoRefs = useRef<Array<HTMLVideoElement | null>>([]);
  const inViewRef = useRef<boolean[]>([]);
  const [activeVideo, setActiveVideo] = useState<VideoAsset | null>(null);

  useEffect(() => {
    inViewRef.current = previewVideos.map(() => false);
    videoRefs.current = previewVideos.map(() => null);
  }, [previewVideos]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (!inViewRef.current.length) {
          return;
        }

        const next = [...inViewRef.current];

        for (const entry of entries) {
          const index = Number((entry.target as HTMLElement).dataset.index ?? -1);
          if (index >= 0) {
            next[index] = entry.isIntersecting;
          }
        }

        inViewRef.current = next;

        if (activeVideo) {
          return;
        }

        for (let i = 0; i < videoRefs.current.length; i += 1) {
          const video = videoRefs.current[i];
          if (!video) {
            continue;
          }

          if (next[i]) {
            void video.play().catch(() => undefined);
          } else {
            video.pause();
          }
        }
      },
      {
        threshold: 0.15,
      },
    );

    for (const video of videoRefs.current) {
      if (video) {
        observer.observe(video);
      }
    }

    return () => observer.disconnect();
  }, [activeVideo, previewVideos]);

  useEffect(() => {
    if (activeVideo) {
      for (const video of videoRefs.current) {
        video?.pause();
      }
      return;
    }

    for (let i = 0; i < videoRefs.current.length; i += 1) {
      const video = videoRefs.current[i];
      if (!video) {
        continue;
      }

      if (inViewRef.current[i]) {
        void video.play().catch(() => undefined);
      } else {
        video.pause();
      }
    }
  }, [activeVideo]);

  useEffect(() => {
    if (!activeVideo) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveVideo(null);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeVideo]);

  if (!previewVideos.length) {
    return null;
  }

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {previewVideos.map((video, index) => (
          <button
            type="button"
            key={video.src}
            className="overflow-hidden rounded-2xl border border-black/10 bg-white text-left"
            onClick={() => setActiveVideo(video)}
            aria-label={`Open ${video.title}`}
          >
            <div className="relative aspect-[9/16] w-full bg-black">
              <video
                ref={(node) => {
                  videoRefs.current[index] = node;
                }}
                data-index={index}
                src={video.src}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="p-3">
              <p className="line-clamp-2 text-sm font-medium text-foreground">{video.title}</p>
            </div>
          </button>
        ))}
      </div>

      {activeVideo ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setActiveVideo(null)}
          role="dialog"
          aria-modal="true"
          aria-label={activeVideo.title}
        >
          <div className="w-full max-w-5xl" onClick={(event) => event.stopPropagation()}>
            <video
              key={activeVideo.src}
              src={activeVideo.src}
              controls
              autoPlay
              playsInline
              className="max-h-[90vh] w-full rounded-xl bg-black"
            />
          </div>
        </div>
      ) : null}
    </>
  );
}
