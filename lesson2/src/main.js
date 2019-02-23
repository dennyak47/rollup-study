import foo from './foo.js';
export default function () {
  console.log(foo);
}

// rollup -c
// rollup --config
// to use config file

// rollup -c -o bundle-2.js # `-o` is short for `--output.file`