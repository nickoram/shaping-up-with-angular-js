(function() {
  var app = angular.module('store', []);

  var gems = [
      {
          name: 'Dodecahedron',
          price: 2.99,
          description: 'Mea sale noluisse ex, aeque theophrastus in qui.',
          canPurchase: false,
          soldOut: true
      },
      {
          name: 'Pentagonal Gem',
          price: 5.99,
          description: 'Duis at tincidunt sem. Praesent ultricies sed sodales.',
          canPurchase: true,
          soldOut: false
      }
  ];

  app.controller('StoreController', function() {
    this.products = gems;
  });

})();
