// Authors - Laércio S Bezerra | laerciosouza@lavid.ufpb.br
//           Thiago Luiz Nunes | thiagoluiz.dev@gmail.com

// collection.js
angular
  .module('geek')
  .directive('collectionsList', collectionsList)
  .directive('collectionNew', collectionNew)
  .directive('collectionShow', collectionShow)
  .directive('collectionEdit', collectionEdit)
  .directive('collectionsListWithController', collectionsListWithController)
  .directive('collectionShowWithController', collectionShowWithController);

/* recommended */

// controller it must have been loaded.
// rendering partial of collection.
function collectionsList() {
  return {
    restrict: 'A',
    templateUrl: 'partials/collections/_collection.html'
  };
};

// controller it must have been loaded.
// rendering partial of form.
function collectionNew() {
  return {
    restrict: 'A',
    templateUrl: 'partials/collections/_form.html'
  };
};

// controller it must have been loaded.
// rendering partial of collection.
function collectionShow() {
  return {
    restrict: 'A',
    templateUrl: 'partials/collections/_collection.html'
  };
};

// controller it must have been loaded.
// rendering partial of form.
function collectionEdit() {
  return {
    restrict: 'A',
    templateUrl: 'partials/collections/_form.html'
  };
};

// controller will be loaded during the call.
// rendering partial of collection.
function collectionsListWithController() {
  return {
    restrict: 'A',
    controller: 'listCollectionsController',
    controllerAs: 'vm',
    templateUrl: 'partials/collections/_collection.html'
  };
};

// controller will be loaded during the call.
// rendering partial of collection.
function collectionShowWithController() {
  return {
    restrict: 'A',
    controller: 'showCollectionController',
    controllerAs: 'vm',
    templateUrl: 'partials/collections/_collection.html'
  };
};
