'use strict';

module.exports = {
    dev: {
        files: ['app/**/*.js', 'test/unit/**/*.js'],
        tasks: ['check']
    },
    less: {
        files: ['styles/*.less'],
        tasks: ['less:development']
    }
};