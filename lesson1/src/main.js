import foo from './foo.js';
export default function () {
  console.log(foo);
}

// rollup src/main.js -o bundle.js -f cjs

// # `-o` is short for `--output.file`
// -f   --format