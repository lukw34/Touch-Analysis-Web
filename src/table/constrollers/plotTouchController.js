table.controller('PlotTouchController', ['$scope', 'measure', 'MeasureService', '$mdDialog',
    function ($scope, measure, MeasureService, $mdDialog) {
        
        $scope.currentNavItem = 'mix';
        $scope.series = {};
        $scope.title = 'Touch diagrams';
        MeasureService.getTouch('touch/' + measure.touchURL).then(function (resp) {
                $scope.series = MeasureService.getTouchSeries(resp);          

        });

        $scope.cancel = function () {
            $mdDialog.cancel();
        };
    }]);
