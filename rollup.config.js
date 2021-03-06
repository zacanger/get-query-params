import babel from 'rollup-plugin-babel'
import json from 'rollup-plugin-json'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import builtins from 'rollup-plugin-node-builtins'
import { uglify } from 'rollup-plugin-uglify'
import { minify } from 'uglify-es'

const extensions = ['.js', '.ts']

export default {
  input: 'src/index.ts',
  output: {
    file: 'lib/index.js',
    format: 'umd',
    name: 'get-query-params',
    sourcemap: true,
  },
  plugins: [
    json({
      preferConst: true,
      indent: '  ',
    }),
    builtins(),
    resolve({
      extensions,
      jsnext: true,
      main: true,
      browser: true,
    }),
    uglify({}, minify),
    commonjs({
      include: 'node_modules/**',
      extensions: ['.js'],
    }),
    babel({
      extensions,
      presets: [
        '@babel/preset-typescript',
        [
          '@babel/preset-env',
          {
            targets: ['>1%', 'Firefox ESR', 'ie >= 11'],
            modules: false,
          },
        ],
      ],
      plugins: [
        '@babel/plugin-proposal-object-rest-spread',
        '@babel/plugin-proposal-class-properties',
      ],
      babelrc: false,
    }),
  ],
}
