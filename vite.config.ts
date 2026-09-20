import { resolve } from "node:path";
import type { UserConfig } from "vite";

export default {
  input: {
    main: resolve(import.meta.dirname, "index.html"),
    sharedWorker: resolve(import.meta.dirname, "shared-worker/index.html"),
    fibonacci: resolve(import.meta.dirname, "fibonacci/index.html"),
  },
} satisfies UserConfig;
