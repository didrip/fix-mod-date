const fs			= require('fs');
const parser	= require('xml2json');

module.exports = {

	modDate: (absFilePath) => {
		fs.readFile(absFilePath, (err, data) => {

			if (err) { console.error(`error reading file ${absoluteFilepath} :\n`, error); throw err; }
		
			const json = parser.toJson(data);
			console.log('to json ->', json);
			return null;
		});
	}
}
