require("esbuild").buildSync({
    entryPoints: ["scripts/main.ts"],
    bundle: true,
    format: "esm",
    outfile: "src_out/scripts/main.js",
    external: [
        "@minecraft/common",
        "@minecraft/debug-utilities",
        "@minecraft/server-admin",
        "@minecraft/server-gametest",
        "@minecraft/server-net",
        "@minecraft/server-ui",
        "@minecraft/server",
        "@minecraft/server-editor"
    ],
    sourcemap: "inline"
});