// include depenencies (a-z)
const fs = require('fs');
const mkdirp = require('mkdirp');
const postcss = require('postcss');

const fp = require('../lib/fileProcessors.js');

// configure input, output and processors:
const inputFilename = 'src/index.css';
const outputDir = 'dist/assets/css/';
const outputFilename = 'dist/assets/css/style.css';

const processors = [
  require('postcss-import'),
  require('postcss-custom-properties'),
  require('postcss-calc'),
  require('postcss-color-function'),
  require('postcss-color-rgba-fallback'),
  require('autoprefixer'),
  require('cssnano'),
  require('postcss-reporter')({ clearMessages: true })
];

// process input and write output to disk:
postcss(processors)
  .process(fs.readFileSync(inputFilename), {
    from: inputFilename,
    to: outputFilename.substr(outputDir.length), // file path relative to output dir
    map: { inline: false }
  })
  .then(result => {
	const promisses = [fp.create(outputFilename, result.css)];
	if (result.map) {
		promisses.push(fp.create(`${outputFilename}.map`, result.map));
	}

	return Promise.all(promisses);
  })
  .catch(err => handleError(err.message));

function writeOutput(result) {
  mkdirp(outputDir, (err) => {
    handleError(err);
    fs.writeFile(outputFilename, result.css, handleError);
    if (result.map) {
        fs.writeFile(`${outputFilename}.map`, result.map, handleError);
    }
  });
}

function handleError(err) {
  if (err) {
    console.log(err);
    process.exit(1);
  }
}
