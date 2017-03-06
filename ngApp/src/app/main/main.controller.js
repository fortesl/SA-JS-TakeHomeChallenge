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

  angular
    .module('ngApp')
    .controller('MainController', ['DataService', MainController]);

  /** @ngInject */
  function MainController(DataService) {
    var vm = this;
    vm.title = "Sa Take Home Challenge";
    vm.subTitle = "Build something great for us :-)";
    vm.propertyData = [];

    //get data
    var init = function() {
      DataService.get().then(function(response) {
        vm.propertyData = response.data;
        vm.selectedProperty = vm.propertyData[0];
      });
    };

    self.showProperty = function(property) {
      selectedProperty = property;
    };

    init();
  }
})();

