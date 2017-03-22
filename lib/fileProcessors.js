const fs = require('fs');
const path = require('path');
const mkdirp = require('mkdirp');

function readFile(filePath) {
	return new Promise((resolve, reject) => {
		fs.readFile(filePath, (err, content) => {
			if(err) reject(err);
			resolve(content);
		});
	});
}

function createFile(filePath, data) {
	return new Promise((resolve, reject) => {
		createDir(filePath)
			.then(() => {
				fs.writeFile(filePath, data, err => {
					if(err) reject(err);
					resolve();
				})
			})
			.catch(err => reject(err));
	});
}

function createDir(filePath) {
	return new Promise((resolve, reject) => {
		const dirPath = path.dirname(filePath);

		mkdirp(dirPath, err => {
			if (err) reject(err);
			resolve(filePath);
		});
	});
}

module.exports = {
	read: readFile,
	create: createFile
}
