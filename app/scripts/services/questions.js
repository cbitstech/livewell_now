'use strict';

/**
 * @ngdoc service
 * @name livewellApp.Questions
 * @description
 * # Questions
 * accesses locally stored questions that were provided over the questions / question-responses routes
 */
angular.module('livewellApp')
  .service('Questions', function Questions() {
    // AngularJS will instantiate a singleton by calling "new" on this function

  var content = {};
  var _QUESTIONS_COLLECTION_KEY = 'questions';
  var _RESPONSES_COLLECTION_KEY = 'questionresponses';
  var _QUESTION_CRITERIA_COLLECTION_KEY = 'questioncriteria';
  var _RESPONSE_CRITERIA_COLLECTION_KEY = 'responsecriteria';

  content.query = function(questionGroup){

  if (localStorage[_QUESTIONS_COLLECTION_KEY] != undefined){
  //grab from synched local storage
  content.items = JSON.parse(localStorage[_QUESTIONS_COLLECTION_KEY]);
  //filter to show only one question group
  if (questionGroup != undefined){
  content.items = _.where(content.items, {questionGroup:questionGroup});
  }

  //attach response groups to questions
  var responses_collection = JSON.parse(localStorage[_RESPONSES_COLLECTION_KEY]);
  var question_criteria_collection = JSON.parse(localStorage[_QUESTION_CRITERIA_COLLECTION_KEY]);
  var response_criteria_collection = JSON.parse(localStorage[_RESPONSE_CRITERIA_COLLECTION_KEY]);

  _.each(content.items, function(el,idx){
      content.items[idx].responses = _.where(responses_collection, {responseGroupId: el.responseGroupId});
      content.items[idx].criteria = _.where(question_criteria_collection, {questionCriteriaId: el.questionCriteriaId});
      _.each(content.items[idx].responses, function(el2,idx2){
        content.items[idx].responses[idx2].criteria = _.where(response_criteria_collection,{responseId:el2.id});
      });

  });



  content.responses = responses_collection;

  content.questions = JSON.parse(localStorage[_QUESTIONS_COLLECTION_KEY]);
  content.questionCriteria = question_criteria_collection;
  content.responseCriteria = response_criteria_collection;

  content.items = _.sortBy(content.items,"order");

	}
	else{
		content.items = [];
	}

 	return content.items

	}

  content.uniqueQuestionGroups = function(){

    var uniqueQuestionGroups = [];
    _.each(_.uniq(content.query(),"questionGroup"), function(el){
        uniqueQuestionGroups.push({name: el.questionGroup, id: el.questionGroup});
    });

    return _.uniq(uniqueQuestionGroups,"name")

  }

  return content
  });
