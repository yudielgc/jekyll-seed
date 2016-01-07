'use strict';

module.exports = function(grunt) {
    var envToUse = grunt.option('env') || 'dev';
    var env = require('./environments/' + envToUse + '.js');

    var config = require('load-grunt-config')(grunt, {
        init: false,
        data: {
            env: env
        },
        loadGruntTasks: {
            pattern: ['grunt-*']
        }
    });

    grunt.util._.extend(config, {
        pkg: grunt.file.readJSON('package.json'),
        //releasePackageName: '<%= pkg.name %>-' + envToUse,
        releasePackageName: '<%= pkg.name %>',
        releaseDirectory: 'releases/<%= releasePackageName %>'
    });

    grunt.initConfig(config);

    require('./grunt/package')(grunt);

    grunt.registerTask('check', [/*'jshint', */'casperjs:acceptance', 'karma:unit']);

    grunt.registerTask('build', ['clean:build', 'concat']);
    grunt.registerTask('version', ['autoprefixer:release', 'copy:pre-rev', 'string-replace:config', 'rev', 'usemin'/*, 'htmlmin'*/]);
    grunt.registerTask('release', ['clean:release', 'copy:release', 'clean:build']);
    
    grunt.registerTask('prepare', ['build', 'version']);
    
    grunt.registerTask('ci-build', ['prepare', 'release']);

    grunt.registerTask('default', [/*'check', */'prepare', 'release']);
};