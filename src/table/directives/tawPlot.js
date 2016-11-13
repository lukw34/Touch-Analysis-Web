table.directive('tawPlot', function() {
    return {
        restrict: 'AE',
        scope: {
            series: '='
        },
        link: function ($scope, element) {
            var series = [];
            angular.forEach($scope.series, function(value, key) {
                this.push(Object.assign(value, {
                    step: 'center',

                }));
            }, series);
    
            Highcharts.chart(element[0], {
                height:350,
                title: {
                    text: undefined
                },
                series: series
            });
        }
    };
});