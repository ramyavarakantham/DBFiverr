/**
 * Created by starn on 4/28/2016.
 */
angular.module('newService').factory('NewService',['$resource',
    function($resource) {
        return {
            submitService:  $resource('api/submitService')
        };
    }
]);