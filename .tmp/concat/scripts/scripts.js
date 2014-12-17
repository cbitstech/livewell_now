'use strict';
/**
 * @ngdoc overview
 * @name livewellApp
 * @description
 * # livewellApp
 *
 * Main module of the application.
 */
angular.module('livewellApp', [
  'ngAnimate',
  'ngCookies',
  'ngResource',
  'ngRoute',
  'ngSanitize',
  'ngTouch'
]).config([
  '$routeProvider',
  function ($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl'
    }).when('/about', {
      templateUrl: 'views/about.html',
      controller: 'AboutCtrl'
    }).when('/foundations', {
      templateUrl: 'views/foundations.html',
      controller: 'FoundationsCtrl'
    }).when('/checkins', {
      templateUrl: 'views/checkins.html',
      controller: 'CheckinsCtrl'
    }).when('/daily_review', {
      templateUrl: 'views/daily_review.html',
      controller: 'DailyReviewCtrl'
    }).when('/daily_review/:id', {
      templateUrl: 'views/daily_review.html',
      controller: 'DailyReviewCtrl'
    }).when('/wellness', {
      templateUrl: 'views/wellness.html',
      controller: 'WellnessCtrl'
    }).when('/wellness/:section', {
      templateUrl: 'views/wellness.html',
      controller: 'WellnessCtrl'
    }).when('/wellness', {
      templateUrl: 'views/wellness.html',
      controller: 'WellnessCtrl'
    }).when('/instructions', {
      templateUrl: 'views/instructions.html',
      controller: 'InstructionsCtrl'
    }).when('/daily_review_summary', {
      templateUrl: 'views/daily_review_summary.html',
      controller: 'DailyReviewSummaryCtrl'
    }).when('/daily_review_conclusion', {
      templateUrl: 'views/daily_review_conclusion.html',
      controller: 'DailyReviewConclusionCtrl'
    }).when('/daily_review_conclusion/:id', {
      templateUrl: 'views/daily_review_conclusion.html',
      controller: 'DailyReviewConclusionCtrl'
    }).when('/daily_review_conclusion/:intervention_set/:id', {
      templateUrl: 'views/daily_review_conclusion.html',
      controller: 'DailyReviewConclusionCtrl'
    }).when('/medications', {
      templateUrl: 'views/medications.html',
      controller: 'MedicationsCtrl'
    }).when('/skills', {
      templateUrl: 'views/skills.html',
      controller: 'SkillsCtrl'
    }).when('/team', {
      templateUrl: 'views/team.html',
      controller: 'TeamCtrl'
    }).when('/intervention', {
      templateUrl: 'views/intervention.html',
      controller: 'InterventionCtrl'
    }).when('/intervention/:code', {
      templateUrl: 'views/intervention.html',
      controller: 'InterventionCtrl'
    }).when('/exit', {
      templateUrl: 'views/exit.html',
      controller: 'ExitCtrl'
    }).when('/charts', {
      templateUrl: 'views/charts.html',
      controller: 'ChartsCtrl'
    }).when('/weekly_check_in', {
      templateUrl: 'views/weekly_check_in.html',
      controller: 'WeeklyCheckInCtrl'
    }).when('/weekly_check_in/:questionIndex', {
      templateUrl: 'views/weekly_check_in.html',
      controller: 'WeeklyCheckInCtrl'
    }).when('/daily_check_in', {
      templateUrl: 'views/daily_check_in.html',
      controller: 'DailyCheckInCtrl'
    }).when('/daily_check_in/:id', {
      templateUrl: 'views/daily_check_in.html',
      controller: 'DailyCheckInCtrl'
    }).when('/settings', {
      templateUrl: 'views/settings.html',
      controller: 'SettingsCtrl'
    }).when('/localStorageBackupRestore', {
      templateUrl: 'views/localstoragebackuprestore.html',
      controller: 'LocalstoragebackuprestoreCtrl'
    }).when('/cms', {
      templateUrl: 'views/cms.html',
      controller: 'CmsCtrl'
    }).when('/admin', {
      templateUrl: 'views/admin.html',
      controller: 'AdminCtrl'
    }).when('/load_interventions', {
      templateUrl: 'views/load_interventions.html',
      controller: 'LoadInterventionsCtrl'
    }).when('/lesson_player/:id', {
      templateUrl: 'views/lesson_player.html',
      controller: 'LessonPlayerCtrl'
    }).when('/lesson_player/', {
      templateUrl: 'views/lesson_player.html',
      controller: 'LessonPlayerCtrl'
    }).otherwise({ redirectTo: '/' });
  }
]);
'use strict';
/**
 * @ngdoc function
 * @name livewellApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the livewellApp
 */
angular.module('livewellApp').controller('MainCtrl', [
  '$scope',
  'UserDetails',
  function ($scope, UserDetails) {
    $scope.pageTitle = 'LiveWell';
    $scope.mainLinks = [
      {
        name: 'Foundations',
        href: 'foundations'
      },
      {
        name: 'Check Ins',
        href: 'checkins'
      },
      {
        name: 'Daily Review',
        href: 'daily_review'
      },
      {
        name: 'Wellness Plan',
        href: 'wellness/resources'
      },
      {
        name: 'Instructions',
        href: 'instructions'
      },
      {
        name: 'Settings',
        href: 'settings'
      }
    ];  // $scope.showLogin = function(){
        //   if (UserDetails.find.id == null){
        //     return true
        //   }
        //   else {
        //     return false
        //   }
        // }
  }
]);
'use strict';
/**
 * @ngdoc function
 * @name livewellApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the livewellApp
 */
angular.module('livewellApp').controller('AboutCtrl', [
  '$scope',
  function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }
]);
'use strict';
/**
 * @ngdoc function
 * @name livewellApp.controller:FoundationsCtrl
 * @description
 * # FoundationsCtrl
 * Controller of the livewellApp
 */
angular.module('livewellApp').controller('FoundationsCtrl', [
  '$scope',
  function ($scope) {
    $scope.pageTitle = 'Foundations';
    $scope.mainLinks = [
      {
        name: 'Overview',
        id: 162
      },
      {
        name: 'Basic Facts ',
        id: 183
      },
      {
        name: 'Medications',
        id: 184
      },
      {
        name: 'Lifestyle Skills',
        id: 185
      },
      {
        name: 'Coping Skills',
        id: 186
      },
      {
        name: 'Team',
        id: 187
      },
      {
        name: 'Awareness',
        id: 188
      },
      {
        name: 'Action',
        id: 189
      }
    ];
  }
]);
'use strict';
/**
 * @ngdoc function
 * @name livewellApp.controller:CheckinsCtrl
 * @description
 * # CheckinsCtrl
 * Controller of the livewellApp
 */
angular.module('livewellApp').controller('CheckinsCtrl', [
  '$scope',
  '$location',
  function ($scope, $location) {
    $scope.pageTitle = 'Check Ins';
  }
]);
'use strict';
/**
 * @ngdoc function
 * @name livewellApp.controller:DailyReviewCtrl
 * @description
 * # DailyReviewCtrl
 * Controller of the livewellApp
 */
angular.module('livewellApp').controller('DailyReviewCtrl', [
  '$scope',
  '$routeParams',
  function ($scope, $routeParams) {
    $scope.pageTitle = 'Daily Review';
    $scope.interventionGroups = [
      {
        code: 5,
        questionSet: 'sleep',
        medicationPercentage: 0.88,
        sleepPercentage: 0.65,
        routinePercentage: 0.88,
        wellnessPercentage: 1,
        medicationClass: 'success',
        sleepClass: 'warning',
        routineClass: 'success',
        wellnessClass: 'success',
        response: 'Glad to see you\'re doing well. That\'s great! Keep up the good work. Try getting a bit more sleep in order to stay well.'
      },
      {
        code: 11,
        questionSet: 'symptom-milddown-prodself',
        medicationPercentage: 0.88,
        sleepPercentage: 0.81,
        routinePercentage: 0.88,
        wellnessPercentage: 0.75,
        medicationClass: 'success',
        sleepClass: 'success',
        routineClass: 'success',
        wellnessClass: 'warning',
        response: 'Sorry to hear you\'re down. You\'re doing the right thing by participating in this program! Things can get better.'
      },
      {
        code: 8,
        questionSet: 'at-risk-medications',
        medicationPercentage: 0.6,
        sleepPercentage: 0.8,
        routinePercentage: 0.75,
        wellnessPercentage: 0.9,
        medicationClass: 'warning',
        sleepClass: 'success',
        routineClass: 'success',
        wellnessClass: 'success',
        response: 'I see you\'re well, which is great! Let\'s keep that going. Looks like you may need to adjust your medication schedule in order to do so.'
      },
      {
        code: 2,
        questionSet: 'at-risk-routine',
        medicationPercentage: 0.88,
        sleepPercentage: 0.81,
        routinePercentage: 0.7,
        wellnessPercentage: 1,
        medicationClass: 'success',
        sleepClass: 'success',
        routineClass: 'warning',
        wellnessClass: 'success',
        response: 'I see you\'re doing well. That\'s fantastic! Keep it up. Try getting your routine more consistent in order to stay well.'
      },
      {
        code: 1,
        questionSet: 'well',
        medicationPercentage: 1,
        sleepPercentage: 1,
        routinePercentage: 1,
        wellnessPercentage: 1,
        medicationClass: 'success',
        sleepClass: 'success',
        routineClass: 'success',
        wellnessClass: 'success',
        response: 'I see you\'ve been well for several days now. Your medications, sleep, and routine are in order. Keep up the good work!'
      }
    ];
    $scope.code = parseInt($routeParams.id) || 1;
    $scope.selectedIntervention = _.where($scope.interventionGroups, { code: $scope.code })[0];
  }
]);
'use strict';
/**
 * @ngdoc function
 * @name livewellApp.controller:WellnessCtrl
 * @description
 * # WellnessCtrl
 * Controller of the livewellApp
 */
angular.module('livewellApp').controller('WellnessCtrl', [
  '$scope',
  '$routeParams',
  function ($scope, $routeParams) {
    $scope.pageTitle = 'Wellness Plan';
    $scope.section = $routeParams.section || '';
    $scope.showResources = function () {
      $scope.riskVisible = false;
      $scope.awarenessVisible = false;
      $scope.resourcesVisible = true;
    };
    $scope.showRisk = function () {
      $scope.awarenessVisible = false;
      $scope.resourcesVisible = false;
      $scope.riskVisible = true;
    };
    $scope.showAwareness = function () {
      $scope.resourcesVisible = false;
      $scope.riskVisible = false;
      $scope.awarenessVisible = true;
    };
    switch ($scope.section) {
    case 'resources':
      $scope.showResources();
      break;
    case 'awareness':
      $scope.showAwareness();
      break;
    case 'risk':
      $scope.showRisk();
      break;
    default:
      $scope.resourcesVisible = false;
      $scope.riskVisible = false;
      $scope.awarenessVisible = false;
    }
  }
]);
'use strict';
/**
 * @ngdoc function
 * @name livewellApp.controller:InstructionsCtrl
 * @description
 * # InstructionsCtrl
 * Controller of the livewellApp
 */
angular.module('livewellApp').controller('InstructionsCtrl', [
  '$scope',
  'StaticContent',
  function ($scope, StaticContent) {
    $scope.pageTitle = 'Instructions';
    $scope.mainLinks = [
      {
        id: 198,
        name: 'Introduction'
      },
      {
        id: 199,
        name: 'Schedule'
      },
      {
        id: 201,
        name: 'Settings'
      },
      {
        id: 202,
        name: 'Coach'
      },
      {
        id: 203,
        name: 'Psychiatrist'
      },
      {
        id: 204,
        name: 'Foundations'
      },
      {
        id: 205,
        name: 'Daily Check In'
      },
      {
        id: 372,
        name: 'Weekly Check In'
      },
      {
        id: 369,
        name: 'Daily Review'
      },
      {
        id: 370,
        name: 'Charts'
      },
      {
        id: 371,
        name: 'Wellness Plan'
      }
    ];
  }
]);
'use strict';
/**
 * @ngdoc function
 * @name livewellApp.controller:DailyReviewSummaryCtrl
 * @description
 * # DailyReviewSummaryCtrl
 * Controller of the livewellApp
 */
angular.module('livewellApp').controller('DailyReviewSummaryCtrl', [
  '$scope',
  function ($scope) {
    $scope.pageTitle = 'Daily Review';
  }
]);
'use strict';
/**
 * @ngdoc function
 * @name livewellApp.controller:DailyReviewConclusionCtrl
 * @description
 * # DailyReviewConclusionCtrl
 * Controller of the livewellApp
 */
angular.module('livewellApp').controller('DailyReviewConclusionCtrl', [
  '$scope',
  '$sanitize',
  function ($scope, $sanitize) {
    $scope.pageTitle = 'Daily Review';
    $scope.lastNotification = '\ufffcKeep up the good work!<br/>Check out your medication plan in Reduce Risk.';
  }
]);
'use strict';
/**
 * @ngdoc function
 * @name livewellApp.controller:SkillsCtrl
 * @description
 * # SkillsCtrl
 * Controller of the livewellApp
 */
angular.module('livewellApp').controller('MedicationsCtrl', [
  '$scope',
  'UserData',
  function ($scope, UserData) {
    $scope.pageTitle = 'My Medications';
    $scope.medications = UserData.query('medications');
  }
]);
'use strict';
/**
 * @ngdoc function
 * @name livewellApp.controller:SkillsCtrl
 * @description
 * # SkillsCtrl
 * Controller of the livewellApp
 */
angular.module('livewellApp').controller('SkillsCtrl', [
  '$scope',
  function ($scope) {
    $scope.pageTitle = 'My Skills';
    $scope.mainLinks = [
      {
        id: 190,
        name: 'Fundamentals'
      },
      {
        id: 193,
        name: 'Awareness'
      },
      {
        id: 191,
        name: 'Lifestyle'
      },
      {
        id: 192,
        name: 'Coping'
      },
      {
        id: 195,
        name: 'Team'
      }
    ];
  }
]);
'use strict';
/**
 * @ngdoc function
 * @name livewellApp.controller:SkillsCtrl
 * @description
 * # SkillsCtrl
 * Controller of the livewellApp
 */
angular.module('livewellApp').controller('TeamCtrl', [
  '$scope',
  'UserData',
  function ($scope, UserData) {
    $scope.pageTitle = 'My Team';
    $scope.team = UserData.query('team');
  }
]);
'use strict';
/**
 * @ngdoc function
 * @name livewellApp.controller:InterventionCtrl
 * @description
 * # InterventionCtrl
 * Controller of the livewellApp
 */
angular.module('livewellApp').controller('InterventionCtrl', [
  '$scope',
  '$routeParams',
  'Questions',
  function ($scope, $routeParams, Questions) {
    $scope.pageTitle = 'Intervention';
    console.log($routeParams);
    $scope.questionGroups = Questions.query($routeParams.code);
    $scope.hideProgressBar = true;
    console.log($scope.questionGroups);
  }
]);
'use strict';
/**
 * @ngdoc function
 * @name livewellApp.controller:ExitCtrl
 * @description
 * # ExitCtrl
 * Controller of the livewellApp
 */
angular.module('livewellApp').controller('ExitCtrl', [
  '$scope',
  function ($scope) {
    navigator.app.exitApp();
  }
]);
'use strict';
/**
 * @ngdoc function
 * @name livewellApp.controller:ChartsCtrl
 * @description
 * # ChartsCtrl
 * Controller of the livewellApp
 */
angular.module('livewellApp').controller('ChartsCtrl', [
  '$scope',
  function ($scope) {
    $scope.pageTitle = 'My Charts';
  }
]);
'use strict';
/**
 * @ngdoc function
 * @name livewellApp.controller:ResourcesCtrl
 * @description
 * # ResourcesCtrl
 * Controller of the livewellApp
 */
angular.module('livewellApp').controller('ResourcesCtrl', [
  '$scope',
  function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }
]);
'use strict';
/**
 * @ngdoc function
 * @name livewellApp.controller:RisksCtrl
 * @description
 * # RisksCtrl
 * Controller of the livewellApp
 */
angular.module('livewellApp').controller('RisksCtrl', [
  '$scope',
  'UserData',
  function ($scope, UserData) {
    //risk variables
    $scope.smarts = UserData.query('smarts');
  }
]);
'use strict';
/**
 * @ngdoc function
 * @name livewellApp.controller:AwarenessCtrl
 * @description
 * # AwarenessCtrl
 * Controller of the livewellApp
 */
angular.module('livewellApp').controller('AwarenessCtrl', [
  '$scope',
  'UserData',
  function ($scope, UserData) {
    //awareness variables
    $scope.awareness = UserData.query('awareness');
    $scope.intervention_anchors = UserData.query('anchors');
    $scope.plan = UserData.query('plan');
  }
]);
'use strict';
/**
 * @ngdoc function
 * @name livewellApp.controller:WeeklyCheckInCtrl
 * @description
 * # WeeklyCheckInCtrl
 * Controller of the livewellApp
 */
angular.module('livewellApp').controller('WeeklyCheckInCtrl', [
  '$scope',
  '$location',
  '$routeParams',
  'Questions',
  'Guid',
  'UserDetails',
  function ($scope, $location, $routeParams, Questions, Guid, UserDetails) {
    $scope.pageTitle = 'Weekly Check In';
    var phq_questions = Questions.query('phq9');
    var amrs_questions = Questions.query('amrs');
    //combine questions into one group for the page
    $scope.questionGroups = [
      phq_questions,
      amrs_questions
    ];
    //allows you to pass a question index url param into the question group directive
    $scope.questionIndex = parseInt($routeParams.questionIndex) - 1 || 0;
    //overrides questiongroup default submit action to send data to PR
    $scope.submit = function () {
      var _SAVE_LOCATION = 'surveys';
      var responses = $('form').serializeArray();
      var sessionID = Guid.create();
      _.each(responses, function (el) {
        var payload = {
            userId: UserDetails.find,
            survey: $scope.pageTitle,
            questionDataLabel: el.name,
            questionValue: el.value,
            sessionGUID: sessionID,
            savedAt: new Date()
          };
        // (new PurpleRobot()).emitReading(_SAVE_LOCATION,payload).execute();
        console.log(payload);
      });
      alert('Thank you, your results have been saved');
      $location.path('/');
    };
  }
]);
'use strict';
/**
 * @ngdoc function
 * @name livewellApp.controller:DailyCheckInCtrl
 * @description
 * # DailyCheckInCtrl
 * Controller of the livewellApp
 */
angular.module('livewellApp').controller('DailyCheckInCtrl', [
  '$scope',
  '$location',
  '$routeParams',
  function ($scope, $location, $routeParams) {
    $scope.pageTitle = 'Daily Check In';
    $scope.responses = [
      {
        order: 1,
        response: '-4',
        label: '-4',
        tailoredMessage: 'some message'
      },
      {
        order: 2,
        response: '-3',
        label: '-3',
        tailoredMessage: 'some message'
      },
      {
        order: 3,
        response: '-2',
        label: '-2',
        tailoredMessage: 'some message'
      },
      {
        order: 4,
        response: '-1',
        label: '-1',
        tailoredMessage: 'some message'
      },
      {
        order: 5,
        response: '0',
        label: '0',
        tailoredMessage: 'some message'
      },
      {
        order: 6,
        response: '1',
        label: '+1',
        tailoredMessage: 'some message'
      },
      {
        order: 7,
        response: '2',
        label: '+2',
        tailoredMessage: 'some message'
      },
      {
        order: 8,
        response: '3',
        label: '+3',
        tailoredMessage: 'some message'
      },
      {
        order: 9,
        response: '4',
        label: '+4',
        tailoredMessage: 'some message'
      }
    ];
    $scope.saveCheckIn = function () {
      $location.path('/daily_review/' + $routeParams.id);
    };
  }
]);
'use strict';
/**
 * @ngdoc service
 * @name livewellApp.StaticContent
 * @description
 * # StaticContent
 * accesses general purpose locally stored static content
 */
angular.module('livewellApp').service('StaticContent', function StaticContent() {
  // AngularJS will instantiate a singleton by calling "new" on this function
  var content = {};
  var _COLLECTION_KEY = 'staticContent';
  var _NULL_COLLECTION_MESSAGE = '<div class="alert alert-warning">No content has been provided for this section.</div>';
  if (localStorage[_COLLECTION_KEY] != undefined) {
    content.items = JSON.parse(localStorage[_COLLECTION_KEY]);
  } else {
    content.items = [];
  }
  content.query = function (key) {
    var queryResponse = _.where(content.items, { sectionKey: key });
    if (queryResponse.length > 0) {
      return queryResponse[0].content;
    } else {
      return _NULL_COLLECTION_MESSAGE;
    }
  };
  return content;
});
'use strict';
/**
 * @ngdoc function
 * @name livewellApp.controller:FetchContentCtrl
 * @description
 * # FetchContentCtrl
 * Controller of the livewellApp
 */
angular.module('livewellApp').controller('FetchContentCtrl', [
  '$scope',
  '$http',
  function ($scope, $http) {
    var SERVER_LOCATION = 'https://livewell2.firebaseio.com/';
    var APP_COLLECTIONS_ROUTE = 'appcollections';
    var USER_ID = 'test';
    var ROUTE_SUFFIX = '.json';
    var downloadContent = function (app_collections) {
      _.each(app_collections, function (el) {
        $http.get(SERVER_LOCATION + el.route + ROUTE_SUFFIX + '?userId=' + USER_ID).success(function (response) {
          localStorage[el.route] = JSON.stringify(_.compact(response));
          $('#update-summary').append('<div class=\'alert alert-sm alert-success\'>Updating ' + el.label + ' successful!</div>');
        }).error(function (err) {
          $('#update-summary').append('<div class=\'alert alert-sm alert-danger\'>Unable to update ' + el.label);
        });
      });
    };
    $scope.fetchContent = function () {
      $('#update-summary').html('<br/><br/>');
      $http.get(SERVER_LOCATION + APP_COLLECTIONS_ROUTE + ROUTE_SUFFIX).success(function (app_collections) {
        downloadContent(_.compact(app_collections));
      }).error(function (err) {
        $('#update-summary').append('<div class=\'alert alert-sm alert-danger\'>Unable to access content server, please make sure that you hav access to internet connection.<br/>If you continue to have difficulties please contact the study coordination staff.</div>');
      });
    };
  }
]);
'use strict';
/**
 * @ngdoc service
 * @name livewellApp.UserData
 * @description
 * # UserData
 * Service in the livewellApp.
 */
angular.module('livewellApp').service('UserData', function UserData() {
  // AngularJS will instantiate a singleton by calling "new" on this function
  var content = {};
  content.query = function (collectionKey) {
    console.log(collectionKey);
    if (localStorage[collectionKey] != undefined) {
      content.items = JSON.parse(localStorage[collectionKey]);
    } else {
      content.items = [];
    }
    console.log(content.items);
    return content.items;
  };
  return content;
});
'use strict';
/**
 * @ngdoc service
 * @name livewellApp.Questions
 * @description
 * # Questions
 * accesses locally stored questions that were provided over the questions / question-responses routes
 */
angular.module('livewellApp').service('Questions', [
  '$http',
  function Questions($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var _CONTENT_SERVER_URL = 'https://livewellnew.firebaseio.com';
    var content = {};
    var _QUESTIONS_COLLECTION_KEY = 'questions';
    var _RESPONSES_COLLECTION_KEY = 'questionresponses';
    var _QUESTION_CRITERIA_COLLECTION_KEY = 'questioncriteria';
    var _RESPONSE_CRITERIA_COLLECTION_KEY = 'responsecriteria';
    content.query = function (questionGroup) {
      if (localStorage[_QUESTIONS_COLLECTION_KEY] != undefined) {
        //grab from synched local storage
        content.items = JSON.parse(localStorage[_QUESTIONS_COLLECTION_KEY]);
        //filter to show only one question group
        if (questionGroup != undefined) {
          content.items = _.where(content.items, { questionGroup: questionGroup });
        }
        //attach response groups to questions
        var responses_collection = JSON.parse(localStorage[_RESPONSES_COLLECTION_KEY]);
        var question_criteria_collection = JSON.parse(localStorage[_QUESTION_CRITERIA_COLLECTION_KEY]);
        var response_criteria_collection = JSON.parse(localStorage[_RESPONSE_CRITERIA_COLLECTION_KEY]);
        _.each(content.items, function (el, idx) {
          content.items[idx].responses = _.where(responses_collection, { responseGroupId: el.responseGroupId });
          content.items[idx].criteria = _.where(question_criteria_collection, { questionCriteriaId: el.questionCriteriaId });
          _.each(content.items[idx].responses, function (el2, idx2) {
            content.items[idx].responses[idx2].criteria = _.where(response_criteria_collection, { responseId: el2.id });
          });
        });
        content.responses = responses_collection;
        content.questions = JSON.parse(localStorage[_QUESTIONS_COLLECTION_KEY]);
        content.questionCriteria = question_criteria_collection;
        content.responseCriteria = response_criteria_collection;
        content.items = _.sortBy(content.items, 'order');
      } else {
        content.items = [];
      }
      return content.items;
    };
    content.save = function (collectionToSave, collection) {
      debugger;
      localStorage[collectionToSave] = JSON.stringify(collection);
      $http.put(_CONTENT_SERVER_URL + '/' + collectionToSave).success(alert('Data saved to server'));
    };
    content.uniqueQuestionGroups = function () {
      var uniqueQuestionGroups = [];
      _.each(_.uniq(content.query(), 'questionGroup'), function (el) {
        uniqueQuestionGroups.push({
          name: el.questionGroup,
          id: el.questionGroup
        });
      });
      return _.uniq(uniqueQuestionGroups, 'name');
    };
    return content;
  }
]);
'use strict';
/**
 * @ngdoc directive
 * @name livewellApp.directive:questionGroup
 * @description
 * # questionGroup
 */
angular.module('livewellApp').directive('questionGroup', [
  '$location',
  function ($location) {
    return {
      templateUrl: 'views/questionGroups/question_group.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        scope._LABELS = scope.labels || [
          {
            name: 'back',
            label: '&lt;'
          },
          {
            name: 'next',
            label: '&gt;'
          },
          {
            name: 'submit',
            label: 'Save'
          }
        ];
        scope._SURVEY_FAILURE_LABEL = scope.surveyFailureLabel || '<b>Unfortunately, this survey failed to load:</b>';
        scope.questionGroups = _.flatten(scope.questionGroups);
        console.log(scope.questionGroups);
        scope.surveyFailure = function () {
          var error = {};
          //there are no questions
          if (scope.questionGroups.length == 0 && _.isArray(scope.questionGroups)) {
            error = {
              error: true,
              message: 'There are no questions available.'
            };
          }  //questions are not in an array
          else if (_.isArray(scope.questionGroups) == false) {
            error = {
              error: true,
              message: 'Questions are not properly formatted.'
            };
          } else {
            error = { error: false };
          }
          if (error.error == true) {
            console.error(error);
          }
          return error;
        };
        scope.label = function (labelName) {
          return _.where(scope._LABELS, { name: labelName })[0].label;
        };
        scope.numberOfQuestions = scope.questionGroups.length;
        scope.currentIndex = scope.questionIndex || 0;
        scope.showQuestion = function (questionIndex) {
          return questionIndex == scope.currentIndex;
        };
        scope.goesToIndex = '';
        scope.goesTo = function (goesToId) {
          for (var index = 0; index < scope.questionGroups.length; index++) {
            if (scope.questionGroups[index].questionDataLabel == goesToId) {
              scope.goesToIndex = index;
            }
          }
          alert(scope.goesToIndex, goesToId);
        };
        scope.next = function (question) {
          console.log(question);
          debugger;
          if (question.responses.length == 1 && question.responses[0].goesTo != '') {
            scope.goesTo(question.responses[0].goesTo);
          }
          if (scope.goesToIndex != '') {
            alert('Going to ' + scope.goesToIndex);
            scope.currentIndex = scope.goesToIndex;
          } else {
            scope.currentIndex++;
          }
          scope.goesToIndex = '';
        };
        scope.back = function () {
          scope.currentIndex--;
        };
        //is overridden by scope.complete function if different action is desired at the end of survey
        scope.submit = scope.submit || function () {
          console.log('OVERRIDE THIS IN YOUR CONTROLLER SCOPE: ', $('form').serializeArray());
          $location.path('#/');
        };
        scope.questionViewType = function (questionType) {
          switch (questionType) {
          case 'radio' || 'checkbox':
            return 'multiple';
            break;
          case 'text' || 'phone' || 'email' || 'textarea':
            return 'single';
            break;
          default:
            return 'html';
            break;
          }
        };
      }
    };
  }
]);
'use strict';
/**
 * @ngdoc function
 * @name livewellApp.controller:SettingsCtrl
 * @description
 * # SettingsCtrl
 * Controller of the livewellApp
 */
angular.module('livewellApp').controller('SettingsCtrl', [
  '$scope',
  function ($scope) {
    $scope.pageTitle = 'Settings';
    $scope.checkinPrompt = null;
    $scope.reviewPrompt = null;
    $scope.checkinPromptSchedule = function () {
      alert('Daily Check-In set for ' + $scope.checkinPrompt);  //TODO Schedule a check prompt in 
                                                                //Set an onload override to go to checkin
    };
    $scope.reviewPromptSchedule = function () {
      alert('Daily Review set for ' + $scope.reviewPrompt);  //TODO Schedule a check prompt in 
                                                             //Set an onload override to go to checkin
    };
  }
]);
'use strict';
/**
 * @ngdoc service
 * @name livewellApp.Guid
 * @description
 * # Guid
 * provides the capacity to generate a guid as needed,
 */
angular.module('livewellApp').service('Guid', function Guid() {
  // AngularJS will instantiate a singleton by calling "new" on this function
  var guid = {};
  // make a string 4 of length 4 with random alphanumerics
  guid.S4 = function () {
    return ((1 + Math.random()) * 65536 | 0).toString(16).substring(1);
  };
  // concat a bunch together plus stitch in '4' in the third group
  guid.create = function () {
    return (guid.S4() + guid.S4() + '-' + guid.S4() + '-4' + guid.S4().substr(0, 3) + '-' + guid.S4() + '-' + guid.S4() + guid.S4() + guid.S4()).toLowerCase();
  };
  return guid;
});
'use strict';
/**
 * @ngdoc function
 * @name livewellApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the livewellApp
 */
angular.module('livewellApp').controller('LoginCtrl', [
  '$scope',
  function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }
]);
'use strict';
/**
 * @ngdoc service
 * @name livewellApp.Pound
 * @description
 * # Pound
 * acts as an interface to localStorage 
 * TODO, use localForage, but gracefully degrade to localStorage if it doesn't exist
 */
angular.module('livewellApp').service('Pound', function Pound() {
  // AngularJS will instantiate a singleton by calling "new" on this function
  var pound = {};
  console.warn('CAUTION: localForage does not exist');
  //pound.insert(key, object)
  //adds to or CREATES a store
  //key: name of thing to store
  //object: value of thing to store in json form
  //pound.add("foo",{"thing":"thing value"});
  //adds {"thing":"thing value"} to a key called "foo" in localStorage
  pound.add = function (key, object) {
    var collection = [];
    if (localStorage[key]) {
      collection = JSON.parse(localStorage[key]);
      object.id = collection.length + 1;
      object.timestamp = new Date();
      object.created_at = new Date();
      console.log(object);
      collection.push(object);
      localStorage[key] = JSON.stringify(collection);
    } else {
      object.id = 1;
      object.timestamp = new Date();
      object.created_at = new Date();
      console.log(object);
      collection = [object];
      localStorage[key] = JSON.stringify(collection);
      pound.add('pound', key);
    }
    return { added: object };
  };
  //pound.save(key, object, id)
  //equivalent of upsert
  //key: name of thing to store
  //object: value of thing to store in json form
  //
  //pound.save("foo",{thing:"thing value", id:id_value});
  //looks to find a thing called foo that has an array of objects inside
  //then looks to find an object in that array that has an id of a particular value, 
  // if it exists, the object is updated with the keys in the object to replace
  ///if it does not exist, it is added
  pound.save = function (key, object) {
    var collection = [];
    if (localStorage[key]) {
      var exists = false;
      collection = JSON.parse(localStorage[key]);
      _.each(collection, function (el, idx) {
        if (el.id == object.id) {
          exists = true;
          object.timestamp = new Date();
          collection[idx] = object;
        }
      });
      if (exists == false) {
        object.id = collection.length + 1;
        object.timestamp = new Date();
        object.created_at = new Date();
        collection.push(object);
      }
    } else {
      object.id = 1;
      object.created_at = new Date();
      collection = [object];
      pound.add('pound', key);
    }
    localStorage[key] = JSON.stringify(collection);
    return { saved: object };
  };
  //pound.update(key, object)
  //get collection of JSON objects
  //iterate through collection and check if passed object matches an element
  //merge attributes of objects
  //set the collection at the current index to the value of the object
  //stringify the collection and set the localStorage key to that value
  pound.update = function (key, object) {
    var collection = JSON.parse(localStorage[key]);
    _.each(collection, function (el, idx) {
      if (el.id == object.id) {
        for (var attribute in el) {
          el[attribute] = object[attribute];
          object.updated_at = new Date();
        }
        collection[idx] = object;
      }
    });
    localStorage[key] = JSON.stringify(collection);
    return { updated: object };
  };
  //pound.find(key,criteria_object)
  //key: name of localstorage location
  //criteria_object: object that matches the criteria you're looking for
  //pound.find("foo")
  //returns the ENTIRE contents of the localStorage array
  //pound.find("foo",{thing:"thing value"})
  //returns the elements in the array that match that criteria
  pound.find = function (key, criteria_object) {
    var collection = [];
    if (localStorage[key]) {
      collection = JSON.parse(localStorage[key]);
      if (criteria_object) {
        return _.where(collection, criteria_object) || [];
      } else {
        return collection || [];
      }
    } else {
      return [];
    }
  };
  pound.list = function () {
    return pound.find('pound');
  };
  //pound.delete(key,id)
  //removes an item from a collection that matches a specific id criteria
  pound.delete = function (key, id) {
    var collection = [];
    var object_to_delete;
    collection = JSON.parse(localStorage[key]);
    _.each(collection, function (el, idx) {
      if (el.id == id) {
        object_to_delete = collection[idx];
        collection[idx] = false;
      }
      ;
    });
    localStorage[key] = JSON.stringify(_.compact(collection));
    return { deleted: object_to_delete };
  };
  //pound.nuke(key)
  //completely removes the key from local storage and pound list
  pound.nuke = function (key) {
    var collection = pound.list;
    localStorage.removeItem(key);
    _.each(collection, function (el, idx) {
      if (el == key) {
        collection[idx] = false;
      }
      ;
    });
    localStorage['pound'] = JSON.stringify(_.compact(collection));
    return { cleared: key };
  };
  return pound;
});
'use strict';
/**
 * @ngdoc service
 * @name livewellApp.UserDetails
 * @description
 * # UserDetails
 * Service in the livewellApp.
 */
angular.module('livewellApp').service('UserDetails', [
  'Pound',
  function UserDetails(Pound) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var _USER_LOCAL_COLLECTION_KEY = 'user';
    var userDetails = {};
    var userDetailsModel = {
        uid: 1,
        userID: null,
        groupID: null,
        loginKey: null
      };
    //if there is no user, create a dummy user object based on the above model
    if (localStorage[_USER_LOCAL_COLLECTION_KEY] == undefined) {
    }
    //return the current user object
    userDetails.find = Pound.find(_USER_LOCAL_COLLECTION_KEY, { uid: '1' })[0];
    //updates the whole user object
    userDetails.update = function (userObject) {
      Pound.update(_USER_LOCAL_COLLECTION_KEY, userObject);
      return userDetails.find;
    };
    // updates one key in the whole user object
    userDetails.updateKey = function (key, value) {
      var userObject = userDetails.find;
      userObject[key] = value;
      return userDetails.update(userObject);
    };
    return userDetails;
  }
]);
'use strict';
/**
 * @ngdoc function
 * @name livewellApp.controller:LocalstoragebackuprestoreCtrl
 * @description
 * # LocalstoragebackuprestoreCtrl
 * Controller of the livewellApp
 */
angular.module('livewellApp').controller('LocalstoragebackuprestoreCtrl', [
  '$scope',
  '$sanitize',
  function ($scope, $sanitize) {
    $scope.initiateLocalBackup = function () {
      $scope.localStorageContents = JSON.stringify(JSON.stringify(localStorage));
    };
    $scope.restoreLocalBackup = function () {
      var restoreContent = JSON.parse(JSON.parse($scope.localStorageContents));
      _.each(_.keys(restoreContent), function (el) {
        debugger;
        localStorage[el] = eval('restoreContent.' + el);
      });
      localStorage = JSON.parse($scope.localStorageContents);  //open file or copy and paste string and replace localStorage
    };
    $scope.updateRemoteService = function (serverURL) {
    };
    $scope.wipeLocalStorage = function () {
      localStorage.clear();
    };
  }
]);
'use strict';
/**
 * @ngdoc function
 * @name livewellApp.controller:CmsCtrl
 * @description
 * # CmsCtrl
 * Controller of the livewellApp
 */
angular.module('livewellApp').controller('CmsCtrl', [
  '$scope',
  'Questions',
  function ($scope, Questions) {
    $scope.formFieldTypes = [
      'checkbox',
      'radio',
      'html',
      'text',
      'textarea',
      'select',
      'email',
      'time',
      'phone',
      'url'
    ];
    $scope.questionGroups = Questions.uniqueQuestionGroups();
    $scope.questions = Questions.questions;
    $scope.responses = Questions.responses;
    $scope.questionCriteria = Questions.questionCriteria;
    $scope.responseCriteria = Questions.responseCriteria;
    console.log(Questions);
    $scope.viewTypes = [
      {
        name: 'Table',
        value: 'table'
      },
      {
        name: 'Map',
        value: 'map'
      }
    ];
    $scope.viewType = 'table';
    $scope.questionGroup = 'cyoa';
    $scope.selectedQuestions = _.sortBy(Questions.query($scope.questionGroup), 'questionGroup');
    $scope.showGroup = function () {
      $scope.selectedQuestions = _.sortBy(Questions.query($scope.questionGroup), 'questionGroup');
      console.log($scope.selectedQuestions);
    };
    $scope.editResponses = function (id) {
      $scope.modalTitle = 'Edit Responses';
      $scope.responseGroupId = id;
      $scope.showResponses = _.where($scope.responses, { responseGroupId: $scope.responseGroupId });
      $scope.uniqueResponseGroups = _.pluck(_.uniq($scope.responses, 'responseGroupId'), 'responseGroupId');
      $scope.goesToOptions = $scope.selectedQuestions;
      $('#responseModal').modal();
    };
    $scope.saveResponses = function (id) {
      $('#responseModal').modal('toggle');
      Questions.save('responses', $scope.responses);
      Questions.save('responseCriteria', $scope.responseCriteria);
    };
    $scope.editQuestion = function (id) {
    };
    $scope.addQuestion = function (id) {
    };
    $scope.deleteQuestion = function (id) {
    };
    $scope.editCriteria = function (id) {
    };
  }
]);
'use strict';
/**
 * @ngdoc function
 * @name livewellApp.controller:AdminCtrl
 * @description
 * # AdminCtrl
 * Controller of the livewellApp
 */
angular.module('livewellApp').controller('AdminCtrl', [
  '$scope',
  'Questions',
  function ($scope, Questions) {
  }
]);
'use strict';
/**
 * @ngdoc function
 * @name livewellApp.controller:LessonPlayerCtrl
 * @description
 * # LessonPlayerCtrl
 * Controller of the livewellApp
 */
angular.module('livewellApp').controller('LessonPlayerCtrl', [
  '$scope',
  '$routeParams',
  '$sce',
  '$location',
  function ($scope, $routeParams, $sce, $location) {
    $scope.getChapterContents = function (chapter_id, appContent) {
      var search_criteria = { id: parseInt(chapter_id) };
      var chapter_contents_list = _.where(appContent, search_criteria)[0].element_list.toString().split(',');
      var chapter_contents = [];
      // console.log("Chapter selected:",_.where(appContent, search_criteria)[0]);
      // console.log("Chapter contents list:",chapter_contents_list);
      _.each(chapter_contents_list, function (element) {
        // console.log(parseInt(element));
        chapter_contents.push(_.where(appContent, { id: parseInt(element) })[0]);
      });
      return chapter_contents;
    };
    $scope.lessons = JSON.parse(localStorage['lessons']);
    $scope.backButton = 'Back';
    $scope.backButtonClass = 'btn btn-default';
    $scope.nextButton = 'Next';
    $scope.nextButtonClass = 'btn btn-primary';
    $scope.currentSlideIndex = 0;
    $scope.currentChapterContents = $scope.getChapterContents($routeParams.id, $scope.lessons);
    $scope.currentSlideContents = $scope.currentChapterContents[$scope.currentSlideIndex].main_content;
    $scope.next = function () {
      if ($scope.currentSlideIndex + 1 < $scope.currentChapterContents.length) {
        $scope.currentSlideIndex++;
        $scope.currentSlideContents = $scope.currentChapterContents[$scope.currentSlideIndex].main_content;
      } else {
        window.location.href = '#/';
      }
      if ($scope.currentSlideIndex + 1 == $scope.currentChapterContents.length) {
        $scope.nextButton = 'Next';
      } else {
        $scope.nextButton = 'Next';
      }
    };
    $scope.back = function () {
      if ($scope.currentSlideIndex > 0) {
        $scope.currentSlideIndex--;
        $scope.currentSlideContents = $scope.currentChapterContents[$scope.currentSlideIndex].main_content;
      }
    };
  }
]);
'use strict';
/**
 * @ngdoc function
 * @name livewellApp.controller:LoadInterventionsCtrl
 * @description
 * # LoadInterventionsCtrl
 * Controller of the livewellApp
 */
angular.module('livewellApp').controller('LoadInterventionsCtrl', [
  '$scope',
  '$location',
  function ($scope, $location) {
    $scope.hierarchy = [
      {
        'category': 'Symptomatic-Severe Up',
        'code': 23,
        'disabled': 'disabled'
      },
      {
        'category': 'Symptomatic-Severe Down',
        'code': 22,
        'disabled': 'disabled'
      },
      {
        'category': 'Symptomatic-Moderate Up-Onset-Provider',
        'code': 21,
        'disabled': 'disabled'
      },
      {
        'category': 'Symptomatic-Moderate Up-Onset-Self',
        'code': 20,
        'disabled': 'disabled'
      },
      {
        'category': 'Symptomatic-Moderate Up-Chronic-Self',
        'disabled': 'disabled'
      },
      {
        'category': 'Symptomatic-Moderate Down-Onset-Provider',
        'code': 18,
        'disabled': 'disabled'
      },
      {
        'category': 'Symptomatic-Moderate Down-Onset-Self',
        'code': 17,
        'disabled': 'disabled'
      },
      {
        'category': 'Symptomatic-Moderate Down-Chronic-Self',
        'code': 16,
        'disabled': 'disabled'
      },
      {
        'category': 'Symptomatic-Mild Up-Prodromal-Provider',
        'code': 15,
        'disabled': 'disabled'
      },
      {
        'category': 'Symptomatic-Mild Up-Prodromal-Self',
        'code': 14,
        'disabled': 'disabled'
      },
      {
        'category': 'Symptomatic-Mild Up-Residual-Self',
        'code': 13,
        'disabled': 'disabled'
      },
      {
        'category': 'Symptomatic-Mild Down-Prodromal-Provider',
        'code': 12,
        'disabled': 'disabled'
      },
      {
        'category': 'Symptomatic-Mild Down-Prodromal-Self',
        'code': 11,
        'disabled': ''
      },
      {
        'category': 'Symptomatic-Mild Down-Residual-Self',
        'code': 10,
        'disabled': 'disabled'
      },
      {
        'category': 'AtRisk-Medications-Severe',
        'code': 9,
        'disabled': 'disabled'
      },
      {
        'category': 'AtRisk-Medications',
        'code': 8,
        'disabled': ''
      },
      {
        'category': 'AtRisk-Sleep Less-Severe',
        'code': 7,
        'disabled': 'disabled'
      },
      {
        'category': 'AtRisk-Sleep More-Severe',
        'code': 6,
        'disabled': 'disabled'
      },
      {
        'category': 'AtRisk-Sleep Less',
        'code': 5,
        'disabled': ''
      },
      {
        'category': 'AtRisk-Sleep Erratic',
        'code': 4,
        'disabled': 'disabled'
      },
      {
        'category': 'AtRisk-Sleep More',
        'code': 3,
        'disabled': 'disabled'
      },
      {
        'category': 'AtRisk-Routine',
        'code': 2,
        'disabled': ''
      },
      {
        'category': 'Well',
        'code': 1,
        'disabled': ''
      }
    ];
  }
]);