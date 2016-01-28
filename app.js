(function() {
  var app = angular.module('store', []);

  app.controller('StoreController', function() {
    this.products = gems;
  });

  var gems = [
      {
          name: 'Dodecahedron',
          price: 2,
          description: 'Mea sale noluisse ex, aeque theophrastus in qui.',
          canPurchase: false,
          soldOut: true,
          images: [
              {
                  full: 'images/hexagem-full.png',
                  thumb: 'images/hexagem-thumb.png'
              }
          ]
      },
      {
          name: 'Pentagonal Gem',
          price: 5.99,
          description: 'Duis at tincidunt sem. Praesent ultricies sed sodales.',
          canPurchase: true,
          soldOut: false,
          images: [
              {
                  full: 'images/octogem-full.png',
                  thumb: 'images/octogem-thumb.png'
              }
          ]
      }
  ];

})();
