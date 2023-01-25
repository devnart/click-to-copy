import css from "rollup-plugin-css-only";
import terser from "@rollup/plugin-terser";
import postcss from "rollup-plugin-postcss";
import cssnano from "cssnano";

export default {
  input: "src/index.js",
  output: {
    file: "dist/index.js",
    format: "cjs",
  },
  plugins: [
    css({
      output: "dist/style.css",
    }),
    terser(),
    postcss({
      plugins: [cssnano()],
      extract: true,
      minimize: true,
      extract: 'dist/style.css'
    }),
  ],
};
