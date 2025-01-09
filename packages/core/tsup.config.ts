import { defineConfig } from "tsup";
import { commonjs } from "@hyrious/esbuild-plugin-commonjs";

export default defineConfig({
    entry: ["src/index.ts"],
    outDir: "dist",
    sourcemap: true,
    clean: true,
    format: ["esm"], // Ensure you're targeting CommonJS
    platform: "node",
    target: "node18",
    bundle: true,
    splitting: true, // Add this for better code splitting
    dts: true,
    esbuildPlugins: [
        commonjs({
            requireReturnsDefault: true, // 将 `require` 转换为默认导入
            ignore: [], // 不忽略任何模块
        }),
    ],
    external: [
        "dotenv", // Externalize dotenv to prevent bundling
        "fs", // Externalize fs to use Node.js built-in module
        "path", // Externalize other built-ins if necessary
        "http",
        "https",
        "https-proxy-agent",
        // Add other modules you want to externalize
    ],
});
