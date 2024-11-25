import { copy } from "fs-extra";
import { join } from "path";
import { fileURLToPath } from "url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const rootDir = join(__dirname, "../..");

async function copyStaticFiles() {
  const staticDir = join(rootDir, "public");
  const standalonePath = join(rootDir, ".next/standalone");
  const staticPath = join(standalonePath, "public");
  const nextStaticPath = join(rootDir, ".next/static");
  const standaloneNextStaticPath = join(standalonePath, ".next/static");

  try {
    // Copy public directory
    await copy(staticDir, staticPath);
    console.log("✓ Copied public directory");

    // Copy .next/static directory
    await copy(nextStaticPath, standaloneNextStaticPath);
    console.log("✓ Copied .next/static directory");
  } catch (err) {
    console.error("Error copying static files:", err);
    process.exit(1);
  }
}

copyStaticFiles(); 