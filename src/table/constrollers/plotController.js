table.controller('PlotController', ['$scope', 'measure', 'type', 'MeasureService', '$mdDialog',
    function ($scope, measure, type, MeasureService, $mdDialog) {

        var plotKinds = {
            touch: {
                plotTitle: 'Touch Diagrams',
                csvUrl: 'touch/' + measure.touchURL,
                getter: MeasureService.getTouch,
                seriesCreator: MeasureService.getTouchSeries
            },
            acc: {
                plotTitle: 'Acc Diagrams',
                csvUrl: 'accelerometr/' + measure.accURL,
                getter: MeasureService.getAcc,
            }
        };

        var plotType = plotKinds[type];
        $scope.series = {};
        $scope.title = plotType.plotTitle;
        plotType.getter(plotType.csvUrl).then(function (resp) {
            if (plotType.seriesCreator) {
                $scope.series = plotType.seriesCreator(resp);
            }

        });

        $scope.cancel = function () {
            $mdDialog.cancel();
        };
    }]);
