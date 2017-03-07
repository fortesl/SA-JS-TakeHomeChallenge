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
    vm.selectedProperty = { title:"", image:"https://blog-blogmediainc.netdna-ssl.com/upload/SportsBlogcom/2003491/0518175001429930488_filepicker.jpg", description:""};

    //get data
    var init = function() {
      DataService.get().then(function(response) {
        vm.propertyData = response.data;
        vm.selectedProperty = vm.propertyData[0];
      });
    };

    vm.showProperty = function(property) {
      vm.selectedProperty = property;
    };

    init();
  }
})();