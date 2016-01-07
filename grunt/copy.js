'use strict';

module.exports = {
    'pre-rev':{
        files: [
            { expand: true, flatten: true, src:'src/_site/*.html', dest: 'build/' },
            { expand: true, flatten: true, src:['src/_site/fonts/*'], dest: 'build/fonts/' },
            { expand: true, flatten: true, src:['src/_site/css/blank.gif'], dest: 'build/css/' },
            { expand: true, cwd: 'src/_site/images', src: ['**'], dest: 'build/images' }
        ]
    },
    release:{
        files: [
            {expand: true, cwd: 'build/', src:['**'], dest: '<%= releaseDirectory %>/'}
        ]
    }
};