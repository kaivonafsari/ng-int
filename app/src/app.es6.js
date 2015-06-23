'use strict';
import angular from 'angular';

//application module files
import 'app.home';

//angular dependencies
import 'angular-ui-router';
import 'angular-bootstrap';
import 'angular-ui-utils';
import 'angular-animate';
import 'angular-scroll';

export default angular.module('app', [
    //angular modules
    'duScroll',
    'ngAnimate',
    'ui.bootstrap',
    'ui.router',
    'ui.keypress',
    //application modules
    'app.home'
]);
