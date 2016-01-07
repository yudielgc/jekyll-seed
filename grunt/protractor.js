'use strict';

module.exports = {
	options: {
		args: {
			includeStackTrace: false
		}
	},
	run: {
		options: {
			configFile: "test/ui/protractor.conf.js"
		}
	},
	debug: {
		options: {
			configFile: "test/ui/protractor.conf.js",
			debug: true,
			args: {
				includeStackTrace: true,
				browser: 'chrome'	
			}
		}
	},
	e2e: {
		options: {
			configFile: "test/e2e/protractor.conf.js"
		}
	}
};