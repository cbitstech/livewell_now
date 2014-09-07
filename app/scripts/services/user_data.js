'use strict';

/**
 * @ngdoc service
 * @name livewellApp.UserData
 * @description
 * # UserData
 * Service in the livewellApp.
 */
angular.module('livewellApp')
  .service('UserData', function UserData() {
    // AngularJS will instantiate a singleton by calling "new" on this function

	
  var content = {};

  content.query = function(collectionKey){

  console.log(collectionKey);
  if (localStorage[collectionKey] != undefined){
  content.items = JSON.parse(localStorage[collectionKey]); 
	}
	else{
		content.items = [];
	}
  console.log(content.items);
 	return content.items

	}

  return content

  });
