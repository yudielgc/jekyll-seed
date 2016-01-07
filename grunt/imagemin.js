'use strict';

module.exports = {
    release: {
        options: {
            optimizationLevel: 3
        },
        files: [{
            expand: true,
            cwd: '<%= commonDirectory %>/images/',
            src: ['**/*'],
            dest: 'build/images' 
        }]
    }
};