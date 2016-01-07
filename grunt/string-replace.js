'use strict';

module.exports = {
    config: {
        files: {
            'build/index.html': 'build/index.html'
        },
        options:{
            replacements: [
                {
                    pattern: '<!-- LayerSlider CSS -->',
                    replacement: ''
                },
                {
                    pattern: '<link href="css/layerslider.css" rel="stylesheet" type="text/css" />',
                    replacement: ''
                },
                {
                    pattern: '<!-- GreenSock (necessary for LayerSlider\'s JavaScript plugin) -->',
                    replacement: ''
                },
                {
                    pattern: 'js/greensock.js',
                    replacement: 'js/layerslider-concat.js'
                },
                {
                    pattern: '<!-- LayerSlider -->',
                    replacement: ''
                },
                {
                    pattern: '<script src="js/layerslider.transitions.js" type="text/javascript"></script>',
                    replacement: ''
                },
                {
                    pattern: '<script src="js/layerslider.kreaturamedia.jquery.js" type="text/javascript"></script>',
                    replacement: ''
                }
            ]
        }
    }
};