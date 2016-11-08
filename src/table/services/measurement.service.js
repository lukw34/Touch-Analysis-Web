table.factory('MeasureService', ['$http', function ($http) {
    var root = '/api';

    return {
        getMeasureData: function () {
            return $http({
                method: 'GET',
                url: root + '/measuredata'
            })
        },

        getTouch: function(touchCsv) {
            return $http({
                method: 'GET',
                url: root + '/touch/' + touchCsv
            })
        }
    }
}]);
