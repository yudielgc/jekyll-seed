'use strict';

module.exports = {
    options: {
        force: true
    },
    build: ['build/'],
    //release: ['<%= releaseDirectory %>/', '<%= releaseDirectory %>/<%= releaseDirectory %>'],
    release: ['releases/**/', '!releases/'],
    deploy: { cwd: '<%= grunt.option("directory") %>', src: ['**'], expand:true }
};