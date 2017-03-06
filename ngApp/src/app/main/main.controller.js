(function() {
  'use strict';

  angular
    .module('ngApp')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController() {
    var vm = this;
    vm.title = "Sa Take Home Challenge";
    vm.subTitle = "Build something great for us :-)";
  }
})();
