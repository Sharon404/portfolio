export type ImageAsset = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

export type VideoAsset = {
  src: string;
  title: string;
  poster?: string;
};

export function isRemoteAsset(src: string): boolean {
  return src.startsWith("https://") || src.startsWith("http://");
}

export function normalizeVideoEmbed(src: string): string {
  if (src.includes("youtube.com/watch")) {
    const id = new URL(src).searchParams.get("v");
    return id ? `https://www.youtube.com/embed/${id}` : src;
  }

  if (src.includes("youtu.be/")) {
    const id = src.split("youtu.be/")[1]?.split("?")[0];
    return id ? `https://www.youtube.com/embed/${id}` : src;
  }

  if (src.includes("vimeo.com/") && !src.includes("player.vimeo.com")) {
    const id = src.split("vimeo.com/")[1]?.split("?")[0];
    return id ? `https://player.vimeo.com/video/${id}` : src;
  }

  return src;
}
