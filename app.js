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

  app.controller('GalleryController', function() {
      this.current = 0;

      this.setCurrent = function(current) {
          this.current = current || 0;
      };
  });

  app.controller('ReviewController', function() {
     this.review = {};

     this.addReview = function(product) {
         this.review.createdOn = Date.now();
         product.reviews.push(this.review);
         this.review = {};  // clears front-end 2-way data binding
     };
  });

  app.directive('productTitle', function() {
      return {
          restrict: 'E', // type of directive, 'Element' in this case
          templateUrl: 'product-title.html' // hypen translate to camel in JS
      };
  });

  app.directive('productReviews', function() {
      return {
          restrict: 'E',
          templateUrl: 'product-reviews.html'
      };
  });

  app.directive('productDescription', function() {
      return {
          restrict: 'E',
          templateUrl: 'product-description.html'
      };
  });

  app.directive('productSpecs', function() {
      return {
          restrict: 'E',
          templateUrl: 'product-specs.html'
      }
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
          ],
          reviews: [
              {
                  stars: 5,
                  body: "This gem rocks!",
                  author: "hschrader@nm.dea.gov",
                  createdOn: 1397490980837
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
              'images/octogem-1.png',
              'images/octogem-2.png',
              'images/octogem-3.png'
          ],
          reviews: []
      }
  ];

})();
