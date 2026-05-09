import { normalizeVideoEmbed } from "@/lib/media";

type VideoEmbedProps = {
  src: string;
  title: string;
};

export function VideoEmbed({ src, title }: VideoEmbedProps) {
  const embed = normalizeVideoEmbed(src);

  return (
    <div className="relative overflow-hidden rounded-2xl border border-black/10 bg-black/5 pt-[56.25%]">
      <iframe
        src={embed}
        title={title}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className="absolute inset-0 h-full w-full"
      />
    </div>
  );
}
