module.exports = function (config) {
    config.set({
        basePath: '../app',

        files: [
            'lib/jquery-2.1.0.min.js',
            'lib/angular/angular.js',
            'lib/angular/angular-*.js',
            '../test/lib/angular/angular-mocks.js',
            '../test/lib/sinon-1.8.2.js',
            'js/**/*.js',
            '../test/unit/**/*.js',
            'templates/directives/*.html'
        ],

        exclude: [
            '../app/lib/angular/angular-loader.js',
            '../app/lib/angular/*.min.js',
            '../app/lib/angular/angular-scenario.js'
        ],

        autoWatch: true,

        frameworks: ['jasmine'],

        browsers: ['Chrome'],

        plugins: [
            'karma-junit-reporter',
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-ng-html2js-preprocessor'
        ],

        preprocessors: {
            'templates/directives/*.html': 'html2js'
        },


        junitReporter: {
            outputFile: 'test_out/unit.xml',
            suite: 'unit'
        }

    })
}
