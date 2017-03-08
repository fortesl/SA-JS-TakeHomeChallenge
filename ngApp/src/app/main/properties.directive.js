(function() {
    'use strict';

    angular.module('ngApp').directive('saProperties', [ saProperties]);

    function saProperties() {
        
        return {
            restrict: 'E',
            templateUrl: 'app/main/properties.view.html'
        };

    }

})();