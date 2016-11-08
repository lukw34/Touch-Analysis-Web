table.controller('TableController', ['MeasureService', function (MeasureService) {
    var tc = this;
    tc.measurement = [];
    MeasureService.getMeasureData().then(function (resp) {
        tc.measurement = resp.data;
    }).catch(function (err) {
        console.error(err);
    })

    tc.getTouch = function(touchCsv) {
        MeasureService.getTouch(touchCsv).then(function(resp) {
            console.log(resp);
        })
    }
}]);
