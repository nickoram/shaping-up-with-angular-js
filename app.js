(function() {
  var app = angular.module('store', []);

  var gem = {
      name: 'Dodecahedron',
      price: 2.99,
      description: 'Mea sale noluisse ex, aeque theophrastus in qui.',
      canPurchase: false,
      soldOut: false
  }

  app.controller('StoreController', function() {
    this.product = gem;
  });

})();
