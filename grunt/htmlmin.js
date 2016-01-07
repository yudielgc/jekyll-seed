'use strict';

module.exports = {
    release: {
        options: {
            collapseWhitespace: true,
            collapseBooleanAttributes: true,
            removeCommentsFromCDATA: true,
            removeOptionalTags: true
        },
        files: [{
            expand: true,
            cwd: 'build',
            src: ['app/views/**/*.html', 'Index.html'],
            dest: 'build/'
        }]
    }
};