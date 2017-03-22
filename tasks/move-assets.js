'use strict';

const glob = require('glob-promise');
const path = require('path');
const fs = require('fs');

const fp = require('../lib/fileProcessors.js');

const input = './src/assets/**/*';
const inputRootDir = 'src';
const outputRootDir = 'dist';


glob(input)
	.then(filePaths => {
		filePaths.forEach(filePath => {
			if(!fs.lstatSync(filePath).isDirectory()) {
        copyFile(filePath);
      }
		});
	})
	.catch(err => console.error(err));

function copyFile(filePath) {
  fp.read(filePath)
    .then(content => {
      fp.create(filePath.replace(inputRootDir, outputRootDir) , content)
    })
    .catch(err => console.error(err));
}
