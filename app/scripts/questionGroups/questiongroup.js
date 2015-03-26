'use strict';

/**
 * @ngdoc directive
 * @name livewellApp.directive:questionGroup
 * @description
 * # questionGroup
 */
angular.module('livewellApp')
  .directive('questionGroup', function ($location) {
    return {
      templateUrl: 'views/questionGroups/question_group.html',
      restrict: 'E', 
      link: function postLink(scope, element, attrs) {

      	scope._LABELS = scope.labels || [
      		{name:'back',label:'&lt;'},
      		{name:'next',label:'&gt;'},
      		{name:'submit', label:'Save'}
      	];

            scope._SURVEY_FAILURE_LABEL = scope.surveyFailureLabel || '<b>Unfortunately, this survey failed to load:</b>';

            scope.questionGroups = _.flatten(scope.questionGroups);

            scope.surveyFailure = function(){

                  var error = {};
                  //there are no questions
                  if (scope.questionGroups.length == 0 && _.isArray(scope.questionGroups)) {
                        error = { error:true, message:"There are no questions available." }
                  }
                  //questions are not in an array
                  else if (_.isArray(scope.questionGroups) == false){
                        error = { error:true, message:"Questions are not properly formatted." }
                  }
                  else {
                        error = { error:false }
                  }

                  if (error.error == true){
                        console.error(error);
                  }

                  return error

            }

      	scope.label = function(labelName){
      		return _.where(scope._LABELS, {name:labelName})[0].label
      	}

      	scope.numberOfQuestions = scope.questionGroups.length;


      	scope.currentIndex = scope.questionIndex || 0;
            scope.randomizationScheme = {};


      	scope.showQuestion = function(questionIndex){

                  var dataLabelToRandomize = scope.questionGroups[scope.currentIndex].questionDataLabel;
                  var numResponsesToRandomize = _.where(scope.questionGroups,{questionDataLabel:dataLabelToRandomize}).length;
                  
                  if(scope.randomizationScheme[dataLabelToRandomize] == undefined){
                        scope.randomizationScheme[dataLabelToRandomize] = Math.floor(Math.random() * (numResponsesToRandomize)) + 1;
                  }



                  if (numResponsesToRandomize > 1){
                        debugger;
                        var iterator = 0;
                        for (iterator = 0; iterator < scope.questionGroups.length; iterator++) { 
                            if ((scope.randomizationScheme[dataLabelToRandomize] - 1 == 0) && scope.questionGroups[iterator].questionDataLabel == dataLabelToRandomize){
                              scope.currentIndex = iterator;
                              console.log(scope.questionGroups,dataLabelToRandomize,numResponsesToRandomize,scope.iterator,questionIndex == scope.currentIndex);

                            }
                        }
                  }
      		return questionIndex == scope.currentIndex;
      	}

            scope.goesToIndex = "";

            scope.goesTo = function(goesToId){

                  for (var index = 0; index < scope.questionGroups.length; index++) { 
                      if (scope.questionGroups[index].questionDataLabel == goesToId){
                        scope.goesToIndex = index;
                      }
                  }

                  // alert(scope.goesToIndex,goesToId );

            }

      	scope.next = function(question){
                  console.log(question);

                  if (question.responses.length == 1 && question.responses[0].goesTo != "")
                        {
                              scope.goesTo(question.responses[0].goesTo);
                        }

                  if (scope.goesToIndex != "")
                  {     
                        // alert("Going to " + scope.goesToIndex);
                        scope.currentIndex = scope.goesToIndex; 

                  }
                  else {
                  scope.currentIndex++;
                  }
                  scope.goesToIndex = "";
      	};

      	scope.back = function(){
      		scope.currentIndex--;
      	};


      	//is overridden by scope.complete function if different action is desired at the end of survey
      	scope.submit = scope.submit || function(){
      		console.log('OVERRIDE THIS IN YOUR CONTROLLER SCOPE: ',$('form').serializeArray());
			$location.path('#/');      		
      	}


      	scope.questionViewType = function(questionType){

      		switch (questionType){

      			case "radio" || "checkbox":
      			return "multiple"
      			break;
      			case "text" || "phone" || "email" || "textarea":
      			return "single"
      			break;
      			default:
      			return "html"
      			break;

      		}

      	}

//            scope.showEndNav = function(length,pageTitle) {
//                  if (length == 0 && pageTitle = 'Daily Review'){
//                        return true}
//                  }
//            }

      }
    };
  });
