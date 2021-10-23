const fs = require('fs');

const writeFile = (fileName, data) => {
	fs.writeFile(fileName, data, (err) => {
		if (err) throw err;
		console.log(`The file ${fileName} has been saved!`);
	});
};

module.exports = writeFile;
