// anity's image CDN does the resizing/format conversion
// Local paths (e.g. the "/jr-logo-transp.png" fallback) are returned as-is.
export default function sanityLoader({
  src,
  width,
  quality,
}: {
  src: string;
  width: number;
  quality?: number;
}) {
  if (!src.startsWith("http")) return src;

  const url = new URL(src);
  url.searchParams.set("w", String(width));
  url.searchParams.set("q", String(quality ?? 75));
  url.searchParams.set("auto", "format");
  return url.toString();
}
