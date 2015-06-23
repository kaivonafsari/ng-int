import mod from './_module.es6';
export default mod.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', ($stateProvider, $urlRouterProvider, $locationProvider)=> {
    $locationProvider.html5Mode(true);
    // For any unmatched url, redirect to /
    $urlRouterProvider.otherwise('/');

    // Now set up the states
    $stateProvider.state('home', {
        url: '/',
        views: {
            'main': {
                templateUrl: 'home.template.html',
                controller: 'HomeController',
                controllerAs: 'home'
            }
        }
    });
}]);
