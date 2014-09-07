'use strict';

/**
 * @ngdoc service
 * @name livewellApp.StaticContent
 * @description
 * # StaticContent
 * Service in the livewellApp.
 */
angular.module('livewellApp')
  .service('StaticContent', function StaticContent() {
    // AngularJS will instantiate a singleton by calling "new" on this function
 	
  var content = {};
  var COLLECTION_KEY = 'static-content';

  if (localStorage[COLLECTION_KEY] != undefined){
  content.items = JSON.parse(localStorage[COLLECTION_KEY]); 
	}
	else{
		content.items = [];
	}
  
  content.query = function(key){
  
  var queryResponse = _.where(content.items, {sectionKey:key});

  if (queryResponse.length > 0){
  return queryResponse[0].content
  }
  else{
 	return '<div class="alert alert-warning">No content has been provided for this section.</div>';

  }}


return content

});
