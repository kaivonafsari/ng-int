require.config({
    baseUrl: '',
    shim: {
        'lodash': {exports: '_'},
        'angular': {exports: 'angular'},
        'angular-route': ['angular'],
        'angular-mocks': ['angular'],
        'angular-loader': ['angular'],
        'angular-bootstrap': ['angular'],
        'angular-ui-router': ['angular'],
        'angular-ui-utils': ['angular'],
        'angular-animate': ['angular'],
        'angular-scroll': ['angular'],
        'app.templates': ['angular']
    },
    paths: {
        angular: 'lib/angular/angular',
        lodash: 'lib/lodash/lodash',
        'angular-ui-router': 'lib/angular-ui-router/release/angular-ui-router',
        almond: 'lib/almond/almond',
        'angular-loader': 'lib/angular-loader/angular-loader',
        'angular-mocks': 'lib/angular-mocks/angular-mocks',
        'angular-bootstrap': 'lib/angular-bootstrap/ui-bootstrap-tpls',
        requirejs: 'lib/requirejs/require',
        'angular-animate': 'lib/angular-animate/angular-animate',
        'angular-ui-utils': 'lib/angular-ui-utils/ui-utils',
        'angular-scroll': 'lib/angular-scroll/angular-scroll.min',
        'app.templates': 'src/__templates/__templates'
    },
    packages: [
        {
            name: 'app.home',
            main: '_index.es6',
            location: 'src/module'
        }
    ]
});
require(['src/main.es6.js']);
