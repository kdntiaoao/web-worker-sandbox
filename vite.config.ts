import { resolve } from "node:path";
import type { UserConfig } from "vite";

export default {
  input: {
    main: resolve(import.meta.dirname, "index.html"),
    sharedWorker: resolve(import.meta.dirname, "shared-worker/index.html"),
  },
} satisfies UserConfig;
