table.config(['$stateProvider', function ($stateProvider) {
    $stateProvider
        .state('base.table', {
            url: '/table',
            views: {
                'table@base': {
                    templateUrl: 'dist/html/table/views/table.view.html',
                    controller: 'TableController as tc'
                }
            }
   
        })
}]);