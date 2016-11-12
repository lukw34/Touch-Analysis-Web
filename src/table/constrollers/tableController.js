table.controller('TableController', ['MeasureService', '$mdDialog', function (MeasureService, $mdDialog) {
    var tc = this;
    var plotDialog = {
        controller: 'PlotController',
        templateUrl: 'dist/html/table/views/plotModal.html',
        parent: angular.element(document.body),
        clickOutsideToClose:true
    };

    tc.measurement = [];
    MeasureService.getMeasureData().then(function (resp) {
        tc.measurement = resp.data;
    }).catch(function (err) {
        console.error(err);
    })

    tc.getTouch = function(measure) {
        $mdDialog.show(Object.assign(plotDialog, {
            locals: {
                type: 'touch',
                measure: measure
            }
        }));
    }
}]);
