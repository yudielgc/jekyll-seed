'use strict';

module.exports = function(grunt){
	grunt.registerTask('package', function(){
		var done = this.async(),
	        fs = require('fs'),
	        files = fs.readdirSync('./environments/'),
	        async = require('async');
	    
	    function readTargetFrom(envFile){
	        return envFile.substring(0, envFile.length - 3);
	    }

	    function spawn(envFile, callback){
	        var target = readTargetFrom(envFile);

	        grunt.log.writeln('Packaging ' + target);

	        grunt.util.spawn({
	            grunt: true,
	            args: ['ci-build', '--env', target]
	        }, function(err){
	            grunt.log.writeln('Packaging ' + target + ' complete.');
	            callback(err);
	        });
	    }

	    async.eachSeries(files, spawn, function(err){
	        grunt.task.run('clean:build');
	        done(err);
	    });
	});
};