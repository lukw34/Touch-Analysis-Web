table.controller('TableController', ['MeasureService', '$mdDialog', '$scope',
    function (MeasureService, $mdDialog, $scope) {
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

        $scope.isSearching = false;
        $scope.measurement = [];
        MeasureService.getMeasureData().then(function (resp) {
            $scope.measurement = resp.data;
        }).catch(function (err) {
            console.error(err);
        });

        $scope.reset = function () {
            $scope.search = undefined;
        };

        $scope.getTouch = function (measure) {
            $mdDialog.show(Object.assign(plotTouchDialog, {
                locals: {
                    type: 'touch',
                    measure: measure
                }
            }));
        };

        $scope.openSearch = function() {
            $scope.isSearching = true;
        };

        $scope.closeSearch = function() {
            $scope.isSearching = false;
        };

        $scope.getAcc = function (measure) {
            console.log(measure);
        };

        $scope.getDetail = function (measure) {
            $mdDialog.show(Object.assign(detailDialog, {
                locals: {
                    measure: measure
                }
            }));
        };
    }]);
