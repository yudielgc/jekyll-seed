'use strict';

module.exports = {
    options: {
        "node": true,
        "browser": true,
        "esnext": true,
        "bitwise": true,
        "camelcase": true,
        "curly": true,
        "eqeqeq": true,
        "immed": true,
        "indent": 4,
        "latedef": true,
        "newcap": true,
        "noarg": true,
        "quotmark": "single",
        "regexp": true,
        "undef": true,
        "unused": true,
        "strict": true,
        "trailing": true,
        "smarttabs": true,
        "globals": {
            "angular": false,
            "define": false,
            "require": false,
            "describe": false,
            "it": false,
            "xit": false,
            "protractor": false,
            "by": false,
            "beforeEach": false,
            "afterEach": false,
            "expect": false,
            "inject": false,
            "jasmine": false,
            "spyOn": false,
            "element": false,
            "browser": false,
            "$": false
        }
    },
    files: ['app/**/*.js', 'test/**/*.js']    
};