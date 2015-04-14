/**
 * Zebra 0.0.1
 */
"use strict"
var fs = require('fs');

function Zebra() {
    if(process.argv.length > 0) {
        var myfile = process.argv[0];
		var i = 0;

        if(fs.existsSync(myfile)) {
            var content = fs.readFileSync(myfile, 'utf8');
			var mats = content.macach(/__inline\((.*?)\)/g);
			if(mats){
				for(i = 0, len= mats.length; i<len; i++){
					console.log(mats[i]);
				}
			}
            fs.writeFileSync(myfile, content.toUpperCase());
            console.log("Done");
        } else {
            console.log("File does not exist - " + myfile);
        }
    } else {
        console.log("Pass on a file name/path");
    }
}

exports.zebra = Zebra;