table.controller('DetailController', ['$scope', 'measure', '$mdDialog', function ($scope, measure, $mdDialog) {
    console.log(measure);

    $scope.properties = [];
    angular.forEach(measure, function (value, key) {
        if(key !== 'touchURL' && key !== 'accURL' && key !== '$$hashKey') {
            this.push({
                key: key,
                value: value
            });
        }
    }, $scope.properties);


    $scope.cancel = function () {
        $mdDialog.cancel();
    };
}]);
