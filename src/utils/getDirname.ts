import path from "path";
import { fileURLToPath } from "url";

export function getFilename(metaUrl: any) {
  const __filename = fileURLToPath(metaUrl);

  return __filename;
}

export function getDirname(metaUrl: any) {
  const __dirname = path.dirname(getFilename(metaUrl));

  return __dirname;
}
