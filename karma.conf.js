// Karma configuration
// Generated on Sun Apr 19 2015 08:18:32 GMT+0100 (BST)

module.exports = function(config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jspm', 'jasmine'],


        plugins: ['karma-jspm', 'karma-firefox-launcher'],
       // plugins: ['karma-jspm', 'karma-phantomjs-launcher'],

        jspm: {

            loadFiles: ['js/*.js', 'test/**/*.js']
        },

// jspm-karma deals with this now....
        // list of files / patterns to load in the browser
//        files: [
//            'js/*.js',
//            'test/**/*.js'
//        ],

        // list of files to exclude
        exclude: [],


        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {},


        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress'],


        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['Firefox'],
//        browsers: ['Chrome', 'Firefox'],

        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false 
    });
};
