table.directive('tawPlot', function() {
    return {
        restrict: 'AE',
        scope: {
            xAxisName: '@',
            yAxisName: '@',
            xAxisValue: '@',
            yAxisValue: '@'
        },
        link: function (element, $scope) {
            console.log(element);
            console.log($scope)
        }
    }
});