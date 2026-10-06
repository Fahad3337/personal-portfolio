import fs from "node:fs";
import path from "node:path";

const IMAGE_FILE = /\.(png|jpe?g|webp|avif|gif)$/i;

/** Screenshots in public/projects/<slug>/, ordered by filename (1.png, 2.png, …). */
export function getProjectImages(slug: string): string[] {
  const dir = path.join(process.cwd(), "public", "projects", slug);
  if (!fs.existsSync(dir)) return [];

  return fs
    .readdirSync(dir)
    .filter((file) => IMAGE_FILE.test(file))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
    .map((file) => `/projects/${slug}/${encodeURIComponent(file)}`);
}
