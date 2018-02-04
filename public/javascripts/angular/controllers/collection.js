// Authors - Laércio S Bezerra | laerciosouza@lavid.ufpb.br
//           Thiago Luiz Nunes | thiagoluiz.dev@gmail.com

/* recommended */

// collection.js
(function() {
  'use strict';

  angular
    .module('geek')
    .controller('listCollectionsController', listCollectionsController)
    .controller('newCollectionController', newCollectionController)
    .controller('showCollectionController', showCollectionController)
    .controller('editCollectionController', editCollectionController);

  // add services requireds
  listCollectionsController.$inject = ['collectionService', '$route'];
  newCollectionController.$inject = ['collectionService', '$location', 'Upload'];
  showCollectionController.$inject = ['collectionService', '$location'];
  editCollectionController.$inject = ['collectionService', '$location'];

  /* recommended */
  function listCollectionsController(collectionService, $route) {

    /* jshint validthis: true */
    var vm = this;
    vm.collections = [];

    // calling others submit function.
    vm.deleteCollection = deleteCollection;

    // load automatically listCollections.
    activate();

    function activate() {
      return listCollections()
        .then(function() {
          console.log('Activated listCollections View');
        });
    };

    // return a collections list.
    function listCollections() {
      return collectionService.getCollections()
        .then(function(response) {
          angular.forEach(response, function(value){
            vm.collections.push( { collection :  value } );
          });

          return vm.collections;
        });
    };

    // delete a collection from list.
    function deleteCollection(index) {
      return collectionService.deleteCollection(index)
        .then(function() {
          return $route.reload();
        });
    };

  };

  function showCollectionController(collectionService, $location) {

    /* jshint validthis: true */
    var vm = this;

    // calling others submit function.
    vm.deleteCollection = deleteCollection;

    // load automatically showCollection.
    activate();

    function activate() {
      return showCollection()
        .then(function() {
          console.log('Activated showCollection View');
        });
    };

    // return a collection by ID.
    function showCollection() {
      return collectionService.getCollection()
        .then(function(response) {
          return vm.collection = response;
        });
    };

    // delete a collection by ID.
    function deleteCollection() {
      return collectionService.deleteCollection()
        .then(function() {
          return $location.path("/collections");
        });
    };

  };

  function newCollectionController(collectionService, $location, Upload) {

    /* jshint validthis: true */
    var vm = this;
    vm.collection;

    // calling others submit function.
    vm.submitCollection = newCollection;

    // create a new collection.
    function newCollection() {
      //check if from is valid
      if (vm.collection && vm.upload_form.file.$valid && vm.collection.file && !vm.collection.$error) {
        // create new formdata to upload
        var formdata = new FormData();

        // adding field to formdata
        formdata.append('title', vm.collection.title);
        formdata.append('file', vm.collection.file);

        // sendind formdata
        return collectionService.postCollection(formdata)
          .then(function(response) {
            return $location.path("/collections/" + response._id);
          });
      }
    };

  };

  function editCollectionController(collectionService, $location) {

    /* jshint validthis: true */
    var vm = this;
    vm.editCollection = true;

    // calling others submit function.
    vm.submitCollection = editCollection;

    // load automatically showCollection.
    activate();
    ////////////

    function activate() {
      return showCollection()
        .then(function() {
          console.log('Activated editCollection View');
        });
    };

    // return a collection by ID.
    function showCollection() {
      return collectionService.getCollection()
        .then(function(response) {
          return vm.collection = response;
        });
    };

    // edit a collection by ID.
    function editCollection() {
      return collectionService.putCollection(vm.collection)
        .then(function(response) {
          return $location.path("/collections/" + response._id);
        });
    };
  };

})();
