const esbuild = require('esbuild');
const fs = require('fs');
const dist = process.argv.length >= 3 && process.argv[2] === 'dist';
const watch = process.argv.length >= 3 && process.argv[2] === 'watch';

const defaultConfig = {
    logLevel: 'info',
    bundle: true,
};

let configs = [];
const APILevels = ['layer1', 'layer2', 'layer3'];
APILevels.forEach(layer => {
    const entryPointDir = layer === 'layer1' ? './entrypoints/default/' : `./entrypoints/${layer}/`;
    const outdir = layer === 'layer1' ? ['./dist/'] : [`./dist/${layer}/`];
    configs = configs.concat([
        {
            ...defaultConfig,
            entryPoints: [entryPointDir + 'index.js'],
            outfile: outdir + 'chs.mjs',
            format: 'esm',
            watch,
        },
        {
            ...defaultConfig,
            entryPoints: [entryPointDir + 'windowBinder.js'],
            outfile: outdir + 'chs.iife.js',
            format: 'iife',
            globalName: 'CHSJS',
            watch,
        },
    ]);
    if (dist) {
        configs = configs.concat([
            {
                ...defaultConfig,
                entryPoints,
                outfile: outdir + 'chs.mjs',
                format: 'esm',
                minify: true,
            },
            {
                ...defaultConfig,
                entryPoints,
                outfile: outdir + 'chs.iife.js',
                format: 'iife',
                globalName: 'CHSJS',
                minify: true,
            },
        ]);
    }
});

configs.forEach(esbuild.build);
