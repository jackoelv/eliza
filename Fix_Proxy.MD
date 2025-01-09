# fix proxy support.

## windows11 env

    new URL(input, proxyUrl) is ok.

## macOS env

    pnpm add https-proxy-agent
    pnpm add -D tsup @hyrious/esbuild-plugin-commonjs

    fix packages/core/tsup.config.ts:

    import { commonjs } from "@hyrious/esbuild-plugin-commonjs";

    esbuildPlugins: [
        commonjs({
        requireReturnsDefault: true, // 将 `require` 转换为默认导入
        ignore: [], // 不忽略任何模块
        }),
    ],
    external: ["https-proxy-agent"], // 保留为外部依赖
