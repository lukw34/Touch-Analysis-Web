table.factory('MeasureService', ['$http', '$q', function ($http, $q) {
    var root = '/api';
    var Event = function (eventTime, type, x, y) {
        this.eventTime = eventTime;
        this.type = type;
        this.x = x;
        this.y = y;
    };

    var csvParser = function (csvData, ObjectSchema) {
        var result = [];
        var data = csvData.slice(3)
        angular.forEach(data, function (value, key) {
            var properties = value.split(',');
            properties.unshift(null);
            this.push(new (Function.prototype.bind.apply(ObjectSchema, properties)));
        }, result);

        return result;
    };

    return {
        getMeasureData: function () {
            return $http({
                method: 'GET',
                url: root + '/measuredata'
            })
        },

        getTouch: function (touchCsv) {
            var deffered = $q.defer();
            $http({
                method: 'GET',
                url: root + '/touch/' + touchCsv
            }).then(function (resp) {
                var csvData = resp.data.split('\n');
                deffered.resolve(csvParser(csvData, Event));
            })

            return deffered.promise;
        }
    };
}]);
