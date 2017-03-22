const buble = require('rollup-plugin-buble');
const commonjs = require('rollup-plugin-commonjs');
const nodeResolve = require('rollup-plugin-node-resolve');
const uglify = require('rollup-plugin-uglify');

const plugins = [
    nodeResolve({ jsnext: true, main: true }),
    commonjs({ include: 'node_modules/**' }),
    buble(),
    uglify()
];

module.exports = {
    entry: 'src/index.js',
    dest: 'dist/assets/js/script.js',
    sourceMap: 'dist/assets/js/script.js.map',
    format: 'iife',
    plugins
};
