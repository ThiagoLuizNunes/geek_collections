// Author - Laércio S Bezerra | laerciosouza@lavid.ufpb.br

/* recommended */

// collection.js
(function() {
  'use strict';

  angular
    .module('geek')
    .service('collectionService', collectionService);

  collectionService.$inject = ['$http', '$q', '$routeParams', 'apiURL'];

  /* recommended */
  function collectionService($http, $q, $routeParams, apiURL){

    /* jshint validthis: true */
    const collectionsURL = '/collections';

    // return available functions for use in the controllers
    return ({
      getCollections: getCollections,
      postCollection: postCollection,
      getCollection: getCollection,
      putCollection: putCollection,
      deleteCollection: deleteCollection
    });

    ////////////

    // GET collections on API
    function getCollections(){

      // create a new instance of deferred
      var deferred = $q.defer();

      // Make an AJAX call get collections
      $http.get(apiURL + collectionsURL)
        .success(getCollectionsComplete)
        .error(getCollectionsFailed);

      return deferred.promise;

      ////////////

      function getCollectionsComplete(response) {
        deferred.resolve(response);
      };

      function getCollectionsFailed(error) {
        console.log('MSG: Error on collectionService request - getCollectionsFailed - ERROR: '
         + error.statusText + ' - STATUS: ' + error.status);
      };
    };

    // POST collection on API
    function postCollection(body){

      // create a new instance of deferred
      var deferred = $q.defer();

      // Make an AJAX call get collections
      $http.post(apiURL + collectionsURL, body, {
        headers : { 'Content-Type' : undefined }
      })
        .success(postCollectionComplete)
        .error(postCollectionFailed);

      return deferred.promise;

      ////////////

      function postCollectionComplete(response) {
        deferred.resolve(response);
      };

      function postCollectionFailed(error) {
        console.log('MSG: Error on collectionService request - postCollectionFailed - ERROR: '
         + error.statusText + ' - STATUS: ' + error.status);
      };
    };

    // GET collection on API
    function getCollection(){
      // create a new instance of deferred
      var collectionURL = '/' + $routeParams.id;
      var deferred = $q.defer();

      // Make an AJAX call get collection by id
      $http.get(apiURL + collectionsURL + collectionURL)
        .success(getCollectionComplete)
        .error(getCollectionFailed);

      return deferred.promise;

      ////////////

      function getCollectionComplete(response) {
        deferred.resolve(response);
      };

      function getCollectionFailed(error) {
        console.log('MSG: Error on collectionService request - getCollectionFailed - ERROR: '
         + error.error);
      };
    };

    // PUT collection on API
    function putCollection(body){
      // create a new instance of deferred
      var collectionURL = '/' + $routeParams.id;
      var deferred = $q.defer();

      // Make an AJAX call put collection by id
      $http.put(apiURL + collectionsURL + collectionURL, body)
        .success(putCollectionComplete)
        .error(putCollectionFailed);

      return deferred.promise;

      ////////////

      function putCollectionComplete(response) {
        deferred.resolve(response);
      };

      function putCollectionFailed(error) {
        console.log('MSG: Error on collectionService request - putCollectionFailed - ERROR: '
          + error.error);
      };
    };

    // DELETE collection on API
    function deleteCollection(index = false){
      // create a new instance of deferred
      var collectionURL = '/' + (index._id || $routeParams.id);
      var deferred = $q.defer();

      // Make an AJAX call get collection by id
      $http.delete(apiURL + collectionsURL + collectionURL)
        .success(deleteCollectionComplete)
        .error(deleteCollectionFailed);

      return deferred.promise;

      ////////////

      function deleteCollectionComplete(response) {
        deferred.resolve(response);
      };

      function deleteCollectionFailed(error) {
        console.log('MSG: Error on collectionService request - deleteCollectionFailed - ERROR: '
         + error.error);
      };
    };

  };

})();