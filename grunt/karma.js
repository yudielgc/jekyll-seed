'use strict';

module.exports = {
    options: {
        configFile: 'src/_site/test/unit/karma.conf.js'
    },
    unit: {
        singleRun: true,
        autoWatch: false,
        browsers: ['PhantomJS'],
        reporters: 'dots'
    }
};