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
            scope.questionAnswered = [];

            scope.responseArray = [];

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

            scope.randomizationScheme = {};

      	scope.currentIndex = scope.questionIndex || 0;

      	scope.showQuestion = function(questionPosition){

                  var dataLabelToRandomize = scope.questionGroups[scope.currentIndex].questionDataLabel;

                  var numResponsesToRandomize = _.where(scope.questionGroups,{questionDataLabel:dataLabelToRandomize}).length;

                  if (numResponsesToRandomize > 1){

                        var questionsToRandomize = _.where(scope.questionGroups,{questionDataLabel:dataLabelToRandomize});

                        if(scope.randomizationScheme[dataLabelToRandomize] == undefined){
                          scope.randomizationScheme[dataLabelToRandomize] = Math.floor(Math.random() * (numResponsesToRandomize));
                        }


                        var randomQuestionToPick = questionsToRandomize[scope.randomizationScheme[dataLabelToRandomize]];

                        scope.currentIndex = _.findIndex(scope.questionGroups,{id:randomQuestionToPick.id});

                        // console.log(questionPosition, scope.currentIndex,questionPosition == scope.currentIndex,scope.questionGroups,{id:randomQuestionToPick.id});

                  }
                  

      		return questionPosition == scope.currentIndex;
      	}

            scope.goesToIndex = "";

            scope.goesTo = function(goesToId,index){

                  scope.skipArray[index] = true;

                  for (var index = 0; index < scope.questionGroups.length; index++) { 
                      if (scope.questionGroups[index].questionDataLabel == goesToId){
                        scope.goesToIndex = index;
                      }
                  }

                  // alert(scope.goesToIndex,goesToId );

            }

      	scope.next = function(question,index){
                  // console.log(question);

                  scope.responseArray[scope.currentIndex] = $('form').serializeArray()[0]; 

                  if (question.responses.length == 1 && question.responses[0].goesTo != "")
                        {
                              scope.goesTo(question.responses[0].goesTo);
                        }

                  if (scope.goesToIndex != "")
                  {     
         
                        scope.currentIndex = scope.goesToIndex;

                  }
                  else {

                        if( scope.skipArray[index] == true){
                              scope.currentIndex++;}
                        else{
                              alert('You must enter an answer to continue!');//modal
                        } 

                  }
                  scope.goesToIndex = "";
      	};

      	scope.back = function(){

      		scope.currentIndex--;


      	};


      	//is overridden by scope.complete function if different action is desired at the end of survey
      	scope.submit = scope.submit || function(){
      		console.log('OVERRIDE THIS IN YOUR CONTROLLER SCOPE: ',$('form').serializeArray());

            var _SAVE_LOCATION = 'livewell_survey_data';

            $scope.responseArray[$scope.currentIndex] = $('form').serializeArray()[0]; 

            var responses = _.flatten($scope.responseArray);

            var sessionID = Guid.create();

            _.each(responses, function(el){

                  var payload = {
                        userId: UserDetails.find,
                        survey: 'survey',
                        questionDataLabel: el.name,
                        questionValue: el.value,
                        sessionGUID: sessionID,
                        savedAt: new Date()
                  };

                  (new PurpleRobot()).emitReading(_SAVE_LOCATION,payload).execute();
                  console.log(payload);

            });



			$location.path('#/');      		
      	}

            scope.skippable = scope.skippable || true;
            scope.skipArray = [];


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
