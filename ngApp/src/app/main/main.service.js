(function () {
  'use strict';

  angular.module('ngApp').factory('DataService', ['$http', function($http) {

    return {
      get:function() { return $http.get('data/data.json'); }
    };

  }]);
})();