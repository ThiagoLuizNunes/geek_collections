// Authors - Laércio S Bezerra | laerciosouza@lavid.ufpb.br
//           Thiago Luiz Nunes | thiagoluiz.dev@gmail.com

/* recommended */

// main.js
angular
  .module('geek', ['ngRoute'])
  .config(config);

// Routes
function config($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl   : 'partials/index.html'
    })
    .when('/collections', {
      templateUrl   : 'partials/collections/list.html',
      controller    : 'listCollectionsController',
      controllerAs  : 'mvvm'
      // resolve: { loggedin: checkLoggedin }
    })
    .when('/collections/new', {
      templateUrl   : 'partials/collections/new.html',
      controller    : 'newCollectionController',
      controllerAs  : 'vm'
      // resolve: { loggedin: checkLoggedin }
    })
    .when('/collections/:id', {
      templateUrl   : 'partials/collections/show.html',
      controller    : 'showCollectionController',
      controllerAs  : 'vm'
      // resolve: { loggedin: checkLoggedin }
    })
    .when('/collections/:id/edit', {
      templateUrl   : 'partials/collections/edit.html',
      controller    : 'editCollectionController',
      controllerAs  : 'vm'
      // resolve: { loggedin: checkLoggedin }
    })
    .otherwise({redirectTo  : '/'});
};

// Verfify if user is logged in
// function checkLoggedin(userService){
//   return userService.getUserStatus()
//     .then(function(response) {
//       return response;
//     });
// };
