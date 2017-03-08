(function () {
  'use strict';

  angular.module('ngApp').factory('DataService', ['$http', DataService]);

  function DataService ($http) {

    return {
      get:function() { return $http.get('data/data.json'); }
    };

  }

})();