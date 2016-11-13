table.controller('TableController', ['MeasureService', '$mdDialog', '$scope',
    function (MeasureService, $mdDialog, $scope) {
    var tc = this;

    var plotTouchDialog = {
        controller: 'PlotTouchController',
        templateUrl: 'dist/html/table/views/plotTouchModal.html',
        parent: angular.element(document.body),
        clickOutsideToClose: true
    };

    var detailDialog = {
        controller: 'DetailController',
        templateUrl: 'dist/html/table/views/detailModal.html',
        parent: angular.element(document.body),
        clickOutsideToClose: true
    };

    tc.isSearching = false;
    tc.measurement = [];
    MeasureService.getMeasureData().then(function (resp) {
        tc.measurement = resp.data;
    }).catch(function (err) {
        console.error(err);
    });

    tc.reset = function () {
        $scope.search = undefined;
    };

    tc.getTouch = function (measure) {
        $mdDialog.show(Object.assign(plotTouchDialog, {
            locals: {
                type: 'touch',
                measure: measure
            }
        }));
    };

    tc.getAcc = function (measure) {
        console.log(measure);
    };

    tc.getDetail = function (measure) {
        $mdDialog.show(Object.assign(detailDialog, {
            locals: {
                measure: measure
            }
        }));
    };
}]);
