const path = require('path')
const esbuild = require('rollup-plugin-esbuild').default
const json = require('@rollup/plugin-json')
const commonjs = require('@rollup/plugin-commonjs')

const name = 'zapcli'

module.exports = [
  {
    input: 'src/index.ts',
    external: [
      'figlet',
      'commander',
      'configstore',
      'ora',
      'zlib',
      'prompts',
      'shelljs',
      'ramda',
      'axios',
      'cli-color',
      'node:fs',
      'node:path',
      'node:os',
      'node:zlib',
      'zplang',
      '@zapcli/core',
      '@zapcli/backtest',
      '@zapant/calendar',
      'dayjs',
      'voca',
      'pug',
      'fs-extra'
    ],
    plugins: [
      esbuild(),
      json(),
      commonjs()
    ],
    output: [
      {
        file: path.resolve(__dirname, `dist/${name}.es.mjs`),
        format: 'es'
      }
    ]
  }
]