import Image from "next/image";
import { ImageAsset } from "@/lib/media";

type OptimizedImageProps = {
  asset: ImageAsset;
  className?: string;
  priority?: boolean;
};

export function OptimizedImage({
  asset,
  className,
  priority = false,
}: OptimizedImageProps) {
  const isLiveCaptureScreenshot = asset.src.includes("image.thum.io");

  return (
    <Image
      src={asset.src}
      alt={asset.alt}
      width={asset.width ?? 1600}
      height={asset.height ?? 1200}
      className={className}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 40vw"
      priority={priority}
      unoptimized={isLiveCaptureScreenshot}
    />
  );
}
