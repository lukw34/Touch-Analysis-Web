table.directive('tawPlot', function() {
    return {
        restrict: 'AE',
        scope: {
            title: '@',
            series: '='
        },
        link: function ($scope, element) {
            Highcharts.chart(element[0], {
                height:350,
                title: {
                    text: undefined
                },
                series: [{
                    data: $scope.series,
                    step: 'center',
                    name: ''
                }]
            });
        }
    };
});