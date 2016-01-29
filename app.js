(function() {
  var app = angular.module('store', []);

  app.controller('StoreController', function() {
      this.products = gems;
  });

  app.controller('PanelController', function() {
      this.tab = 1;

      this.selectTab = function(setTab) {
          this.tab = setTab;
      };

      this.isSelected = function(checkTab) {
          return this.tab === checkTab;
      };
  });

  var gems = [
      {
          name: 'Dodecahedron',
          price: 2,
          description: 'Mea sale noluisse ex, aeque theophrastus in qui.',
          canPurchase: false,
          soldOut: true,
          images: [
              'images/hexagem-1.png',
              'images/hexagem-2.png',
              'images/hexagem-3.png'
          ]
      },
      {
          name: 'Pentagonal Gem',
          price: 5.99,
          description: 'Duis at tincidunt sem. Praesent ultricies sed sodales.',
          canPurchase: true,
          soldOut: false,
          images: [
              'images/octogem-1.png',
              'images/octogem-2.png',
              'images/octogem-3.png'
          ]
      }
  ];

})();
