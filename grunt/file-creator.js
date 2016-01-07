'use strict';

module.exports = function(grunt){
	return {
        bower: {
            ".bowerrc": function(fs, fd, done) {
                var proxyAddress = 'http://' + grunt.option('username') + ':' + grunt.option('password') + '@proxy';
                var content = JSON.stringify({
                    'proxy': proxyAddress,
                    'https-proxy': proxyAddress,
                    'strict-ssl': false
                });

                fs.writeSync(fd, content);
                done();
            }
        }
    };
};