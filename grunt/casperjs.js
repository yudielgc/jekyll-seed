'use strict';

module.exports = {
    acceptance : {
        options : {
            test : true,
            async: {
                parallel: false
            }
        },
        files : {
            'src/_site/test/acceptance/casper-results.xml' : ['src/_site/test/acceptance/**/*.js']
        }
    }
};