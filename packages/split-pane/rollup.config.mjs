import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';

const OUTPUT_FOLDER = 'dist';

export default [
  {
    input: 'src/index.ts',
    output: {
      dir: OUTPUT_FOLDER,
    },
    external: ['react'],
    plugins: [
      nodeResolve(),
      replace({
        preventAssignment: true,
        'process.env.NODE_ENV': JSON.stringify('production'),
      }),
      typescript(),
      commonjs(),
      postcss(),
    ],
  },
];
