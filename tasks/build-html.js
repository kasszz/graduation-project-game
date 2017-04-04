'use strict';

const glob = require('glob-promise');
const nunjucks = require('nunjucks');
const markdown = require('nunjucks-markdown');
const path = require('path');

const fp = require('../lib/fileProcessors.js');
const markdownRenderer = require('../lib/markdown-renderer.js');
const cheerioParser = require('../lib/cheerio-parser.js');

const basePath = './src/';
const input = './src/views/**/**.html';
const inputExclude = './src/views/_*/**.html';
const output = './dist/';

const env = nunjucks.configure(basePath);

markdown.register(env, markdownRenderer(nunjucks));

glob(input, {'ignore': inputExclude})
	.then(filePaths => {
		filePaths.forEach(filePath => {
			filePath = filePath.replace(basePath, '');

			createHtmlFile(filePath);
		});
	})
	.catch(err => console.error(err));

function createHtmlFile(nunjucksFilePath) {
	const outputFilePath = path.join(output, path.basename(nunjucksFilePath))

	renderHTML(nunjucksFilePath)
    .then(cheerioParser)
		.then(html => fp.create(outputFilePath, html))
		.catch(err => console.error(err));
}

function renderHTML(nunjucksFilePath) {
	return new Promise((resolve, reject) => {
		nunjucks.render(nunjucksFilePath, function(err, html) {
			if(err) reject(err);
			resolve(html);
		});
	});
}
