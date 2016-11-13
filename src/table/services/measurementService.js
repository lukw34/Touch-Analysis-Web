table.factory('MeasureService', ['$http', '$q', function ($http, $q) {
    var factory = {};
    var root = '/api/';
    var EventTouch = function (eventTime, type, x, y) {
        this.eventTime = eventTime;
        this.type = type;
        this.x = x;
        this.y = y;
    };

    var EventAcc = function (eventTime, x, y, z) {
        this.eventTime = eventTime;
        this.x = x;
        this.y = y;
        this.z = z;
    };

    var csvParser = function (csvData, ObjectSchema) {
        var result = [];
        var data = csvData.slice(3);
        angular.forEach(data, function (value, key) {
            var properties = value.split(',');
            properties.unshift(null);
            this.push(new (Function.prototype.bind.apply(ObjectSchema, properties)));
        }, result);

        return result;
    };

    factory.getMeasureData = function () {
        return $http({
            method: 'GET',
            url: root + 'measuredata'
        });
    };

    factory.getTouch = function (csvUrl) {
        var deffered = $q.defer();
        $http({
            method: 'GET',
            url: root + csvUrl
        }).then(function (resp) {
            var csvData = resp.data.split('\n');
            deffered.resolve(csvParser(csvData, EventTouch));
        });

        return deffered.promise;
    };

    factory.getAcc = function (csvUrl) {
        var deffered = $q.defer();
        $http({
            method: 'GET',
            url: root + csvUrl
        }).then(function (resp) {
            var csvData = resp.data.split('\n');
            deffered.resolve(csvParser(csvData, EventAcc));
        });

        return deffered.promise;
    };

    factory.groupByType = function (data) {
        var result = {
            up: [],
            down: []
        };

        angular.forEach(data, function (value, key) {
            var container = value.type === 'ACTION_UP' ? this.up : this.down;
            container.push(value);
        }, result);

        return result;
    };

    factory.getIntervalTime = function (events) {
        var result = [];
        for (var index = 0; index < events.length - 1; index++) {
            if (events[index + 1].eventTime) {
                result.push(events[index + 1].eventTime - events[index].eventTime);
            }
        }

        return result;
    };

    factory.getIntervalTimelMix = function (eventsUp, eventsDown) {
        var result = [];
        for (var index = 0; index < eventsDown.length && index < eventsUp.length; index++) {
            result.push(eventsUp[index].eventTime - eventsDown[index].eventTime);
        }
        return result;
    };

    factory.getTouchSeries = function (events) {
        var groupedEvents = factory.groupByType(events);

        return {
            up: {
                name: 'up',
                data: factory.getIntervalTime(groupedEvents.up)
            },
            down: {
                name: 'down',
                data: factory.getIntervalTime(groupedEvents.down)
            },
            mix: {
                name: 'mix',
                data: factory.getIntervalTimelMix(groupedEvents.up, groupedEvents.down)
            }
        };
    };

    return factory;
}]);
