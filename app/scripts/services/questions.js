'use strict';

/**
 * @ngdoc service
 * @name livewellApp.Questions
 * @description
 * # Questions
 * Service in the livewellApp.
 */
angular.module('livewellApp')
  .service('Questions', function Questions() {
    // AngularJS will instantiate a singleton by calling "new" on this function

  var content = {};
  var COLLECTION_KEY = 'questions';

  content.query = function(questionGroup){

  if (localStorage[COLLECTION_KEY] != undefined){
  content.items = JSON.parse(localStorage[COLLECTION_KEY]); 
	}
	else{
		content.items = [];
	}

  content.items = _.where(content.items, {questionGroup:questionGroup})

 	return content.items

	}

  return content
  });
