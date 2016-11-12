table.controller('PlotController', ['$scope','measure', 'type', 'MeasureService', '$mdDialog',
    function ($scope,  measure, type, MeasureService, $mdDialog) {
        console.log(measure);
   -

        MeasureService.getTouch(measure.touchURL).then(function (resp) {
            console.log(resp);
        })

        $scope.cancel = function () {
            $mdDialog.cancel();
        }
    }]);
