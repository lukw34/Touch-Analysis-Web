base.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/main/table');

    $stateProvider
        .state('base', {
            abstract: true,
            url: '/main',
            templateUrl: 'dist/html/base/views/mainTemplate.html'
        });
}]);
