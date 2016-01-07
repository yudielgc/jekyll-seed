'use strict';

module.exports = {
    development: {
        options: {
            paths: ["styles"],
            modifyVars: {
                "icon-font-path": '"../bower_components/bootstrap/fonts/"'
            }
        },
        files: {
            "styles/styles.css": "styles/styles.less"
        }
    },
    release: {
        options: {
            paths: ["styles"],
            cleancss: true
        },
        files: {
            "build/styles/styles.css": "styles/styles.less"
        }
    }
};