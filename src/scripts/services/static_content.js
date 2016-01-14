'use strict';

/**
 * @ngdoc service
 * @name livewellApp.StaticContent
 * @description
 * # StaticContent
 * accesses general purpose locally stored static content
 */
angular.module('livewellApp')
  .service('StaticContent', function StaticContent() {
    // AngularJS will instantiate a singleton by calling "new" on this function
 	
  var content = {};
  var _COLLECTION_KEY = 'staticContent';
  var _NULL_COLLECTION_MESSAGE = '<div class="alert alert-warning">No content has been provided for this section.</div>';

  if (localStorage[_COLLECTION_KEY] != undefined){
  content.items = JSON.parse(localStorage[_COLLECTION_KEY]); 
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
 	return _NULL_COLLECTION_MESSAGE;

  }}


return content

});
