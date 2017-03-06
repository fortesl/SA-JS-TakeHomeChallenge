(function () {
  'use strict';

  angular.module('ngApp').factory('DataService', ['$http', function($http) {

    return {
      get:function() { return $http.get('data/data.json'); }
    };

  }]);
})();

(function() {
  'use strict';

  var debug = true;

  angular
    .module('ngApp')
    .controller('MainController', ['DataService', MainController]);

  /** @ngInject */
  function MainController(DataService) {
    var vm = this;
    vm.title = "Sa Take Home Challenge";
    vm.subTitle = "Build something great for us :-)";
    vm.data = [];

    //get data
    var init = function() {
      DataService.get().then(function(response) {
        var property = response.data.property;
        for (var i=0; i<7; i++) {
          vm.data.push(property);
        }
        if (debug) {
          console.log(vm.data);
        }
      });
    };

    init();
  }
})();

