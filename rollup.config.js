import json from '@rollup/plugin-json'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import typescript from 'rollup-plugin-typescript2'
import sass from 'rollup-plugin-sass'
import excludeDependenciedFromBundle from 'rollup-plugin-exclude-dependencies-from-bundle'

const overriders = {
  compilerOptions: { declaration: true },
  exclude: [ 
    'src/**/*.test.tsx', 
    'src/**/*.stories.tsx',
    'src/**/*.stories.mdx',
    'src/setupTests.ts'
  ]
}
const config = {
  input: 'src/index.tsx',
  output: {
    file: 'dist/index.js',
    format: 'es',
  },
  plugins: [
    json(),
    commonjs(),
    resolve(),
    typescript({ tsconfigOverride: overriders }),
    sass({ output: 'dist/index.css' }),
    excludeDependenciedFromBundle(),
  ]
}

export default config