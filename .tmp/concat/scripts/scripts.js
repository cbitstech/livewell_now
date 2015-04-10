// 'use strict';
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
  'ngTouch',
  'highcharts-ng'
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
    }).when('/lesson_player/:id/:post', {
      templateUrl: 'views/lesson_player.html',
      controller: 'LessonPlayerCtrl'
    }).when('/skills_fundamentals', {
      templateUrl: 'views/skills_fundamentals.html',
      controller: 'SkillsFundamentalsCtrl'
    }).when('/skills_awareness', {
      templateUrl: 'views/skills_awareness.html',
      controller: 'SkillsAwarenessCtrl'
    }).when('/skills_lifestyle', {
      templateUrl: 'views/skills_lifestyle.html',
      controller: 'SkillsLifestyleCtrl'
    }).when('/skills_coping', {
      templateUrl: 'views/skills_coping.html',
      controller: 'SkillsCopingCtrl'
    }).when('/skills_team', {
      templateUrl: 'views/skills_team.html',
      controller: 'SkillsTeamCtrl'
    }).when('/skills_fundamentals', {
      templateUrl: 'views/skills_fundamentals.html',
      controller: 'SkillsFundamentalsCtrl'
    }).when('/ews', {
      templateUrl: 'views/ews.html',
      controller: 'EwsCtrl'
    }).when('/ews2', {
      templateUrl: 'views/ews2.html',
      controller: 'Ews2Ctrl'
    }).when('/schedule', {
      templateUrl: 'views/schedule.html',
      controller: 'ScheduleCtrl'
    }).when('/summary_player', {
      templateUrl: 'views/summary_player.html',
      controller: 'SummaryPlayerCtrl'
    }).when('/summary_player/:id/:post', {
      templateUrl: 'views/summary_player.html',
      controller: 'SummaryPlayerCtrl'
    }).when('/load_interventions_review', {
      templateUrl: 'views/load_interventions_review.html',
      controller: 'LoadInterventionsReviewCtrl'
    }).when('/mySkills', {
      templateUrl: 'views/myskills.html',
      controller: 'MyskillsCtrl'
    }).when('/chartsDashboard', {
      templateUrl: 'views/chartsdashboard.html',
      controller: 'ChartsdashboardCtrl'
    }).when('/chartsMedication', {
      templateUrl: 'views/chartsmedication.html',
      controller: 'ChartsmedicationCtrl'
    }).when('/chartsSleep', {
      templateUrl: 'views/chartssleep.html',
      controller: 'ChartssleepCtrl'
    }).when('/chartsRoutine', {
      templateUrl: 'views/chartsroutine.html',
      controller: 'ChartsroutineCtrl'
    }).when('/chartsActivity', {
      templateUrl: 'views/chartsactivity.html',
      controller: 'ChartsactivityCtrl'
    }).when('/dailyReviewTester', {
      templateUrl: 'views/dailyreviewtester.html',
      controller: 'DailyreviewtesterCtrl'
    }).when('/personalSnapshot', {
      templateUrl: 'views/personalsnapshot.html',
      controller: 'PersonalsnapshotCtrl'
    }).otherwise({ redirectTo: '/' });
  }
]).run([
  '$rootScope',
  function ($rootScope) {
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
        name: 'Skills',
        href: 'skills'
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
        id: 162,
        post: 'foundations',
        type: 'lesson_player'
      },
      {
        name: 'Basic Facts ',
        id: 183,
        post: 'foundations',
        type: 'lesson_player'
      },
      {
        name: 'Medications',
        id: 184,
        post: 'foundations',
        type: 'lesson_player'
      },
      {
        name: 'Lifestyle Skills',
        id: 185,
        post: 'foundations',
        type: 'lesson_player'
      },
      {
        name: 'Coping Skills',
        id: 186,
        post: 'foundations',
        type: 'lesson_player'
      },
      {
        name: 'Team',
        id: 187,
        post: 'foundations',
        type: 'lesson_player'
      },
      {
        name: 'Awareness',
        id: 188,
        post: 'foundations',
        type: 'lesson_player'
      },
      {
        name: 'Action',
        id: 189,
        post: 'foundations',
        type: 'lesson_player'
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
  'UserData',
  function ($scope, $routeParams, UserData) {
    $scope.pageTitle = 'Daily Review';
    $scope.interventionGroups = UserData.query('dailyReview');
    $scope.code = parseInt($routeParams.id) || 22;
    $scope.selectedIntervention = _.where($scope.interventionGroups, { code: $scope.code })[0];
    $scope.interventionResponse = function () {
      if (typeof $scope.selectedIntervention.response == 'object') {
        return $scope.selectedIntervention.response[Math.floor(Math.random() * $scope.selectedIntervention.response.length + 1)];
      } else {
        return $scope.selectedIntervention.response;
      }
    };
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
      $('button#awareness').removeClass('active');
      $('button#risk').removeClass('active');
      $('button#resources').addClass('active');
    };
    $scope.showRisk = function () {
      $scope.awarenessVisible = false;
      $scope.resourcesVisible = false;
      $scope.riskVisible = true;
      $('button#awareness').removeClass('active');
      $('button#risk').addClass('active');
      $('button#resources').removeClass('active');
    };
    $scope.showAwareness = function () {
      $scope.resourcesVisible = false;
      $scope.riskVisible = false;
      $scope.awarenessVisible = true;
      $('button#resources').removeClass('active');
      $('button#risk').removeClass('active');
      $('button#awareness').addClass('active');
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
        name: 'Introduction',
        post: 'instructions'
      },
      {
        id: 199,
        name: 'Schedule',
        post: 'instructions'
      },
      {
        id: 201,
        name: 'Settings',
        post: 'instructions'
      },
      {
        id: 202,
        name: 'Coach',
        post: 'instructions'
      },
      {
        id: 203,
        name: 'Psychiatrist',
        post: 'instructions'
      },
      {
        id: 204,
        name: 'Foundations',
        post: 'instructions'
      },
      {
        id: 205,
        name: 'Daily Check In',
        post: 'instructions'
      },
      {
        id: 372,
        name: 'Weekly Check In',
        post: 'instructions'
      },
      {
        id: 369,
        name: 'Daily Review',
        post: 'instructions'
      },
      {
        id: 370,
        name: 'Charts',
        post: 'instructions'
      },
      {
        id: 371,
        name: 'Wellness Plan',
        post: 'instructions'
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
        id: 'fundamentals',
        name: 'Building Skills'
      },
      {
        id: 'awareness',
        name: 'Awareness'
      },
      {
        id: 'lifestyle',
        name: 'Lifestyle'
      },
      {
        id: 'coping',
        name: 'Coping'
      },
      {
        id: 'team',
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
    $scope.pageTitle = 'Daily Review';
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
    $scope.pageCollection = [
      {
        label: 'Dashboard',
        href: '#/chartsDashboard'
      },
      {
        label: 'Medication',
        href: '#/chartsMedication'
      },
      {
        label: 'Sleep',
        href: '#/chartsSleep'
      },
      {
        label: 'Routine',
        href: '#/chartsRoutine'
      },
      {
        label: 'Activity',
        href: '#/chartsActivity'
      }
    ];
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
    $scope.showAnchors = false;
    $scope.showAction = false;
    $scope.showPlan = true;
    $('.btn-default').removeClass('active');
    $('#load-plan').addClass('active');
    $scope.loadAnchors = function () {
      $scope.showAnchors = true;
      $scope.showAction = false;
      $scope.showPlan = false;
      $('.btn-default').removeClass('active');
      $('#load-anchors').addClass('active');
    };
    $scope.loadAction = function () {
      $scope.showAnchors = false;
      $scope.showAction = true;
      $scope.showPlan = false;
      $('.btn-default').removeClass('active');
      $('#load-action').addClass('active');
    };
    $scope.loadPlan = function () {
      $scope.showAnchors = false;
      $scope.showAction = false;
      $scope.showPlan = true;
      $('.btn-default').removeClass('active');
      $('#load-plan').addClass('active');
    };
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
      // alert('Thank you, your results have been saved');
      debugger;
      $location.path('/ews');
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
  'Pound',
  function ($scope, $location, $routeParams, Pound) {
    $scope.pageTitle = 'Daily Check In';
    $scope.dailyCheckIn = {
      gotUp: '',
      toBed: '',
      wellness: '',
      medications: '',
      startTime: new Date()
    };
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
    $scope.times = [
      {
        value: '0000',
        label: '12:00AM'
      },
      {
        value: '0030',
        label: '12:30AM'
      },
      {
        value: '0100',
        label: '1:00AM'
      },
      {
        value: '0130',
        label: '1:30AM'
      },
      {
        value: '0200',
        label: '2:00AM'
      },
      {
        value: '0200',
        label: '2:30AM'
      },
      {
        value: '0300',
        label: '3:00AM'
      },
      {
        value: '0300',
        label: '3:30AM'
      },
      {
        value: '0400',
        label: '4:00AM'
      },
      {
        value: '0400',
        label: '4:30AM'
      },
      {
        value: '0500',
        label: '5:00AM'
      },
      {
        value: '0500',
        label: '5:30AM'
      },
      {
        value: '0600',
        label: '6:00AM'
      },
      {
        value: '0600',
        label: '6:30AM'
      },
      {
        value: '0700',
        label: '7:00AM'
      },
      {
        value: '0700',
        label: '7:30AM'
      },
      {
        value: '0800',
        label: '8:00AM'
      },
      {
        value: '0800',
        label: '8:30AM'
      },
      {
        value: '0900',
        label: '9:00AM'
      },
      {
        value: '0900',
        label: '9:30AM'
      },
      {
        value: '1000',
        label: '10:00AM'
      },
      {
        value: '1000',
        label: '10:30AM'
      },
      {
        value: '1100',
        label: '11:00AM'
      },
      {
        value: '1100',
        label: '11:30AM'
      },
      {
        value: '1200',
        label: '12:00PM'
      },
      {
        value: '1230',
        label: '12:30PM'
      },
      {
        value: '1300',
        label: '1:00PM'
      },
      {
        value: '1330',
        label: '1:30PM'
      },
      {
        value: '1400',
        label: '2:00PM'
      },
      {
        value: '1430',
        label: '2:30PM'
      },
      {
        value: '1500',
        label: '3:00PM'
      },
      {
        value: '1530',
        label: '3:30PM'
      },
      {
        value: '1600',
        label: '4:00PM'
      },
      {
        value: '1630',
        label: '4:30PM'
      },
      {
        value: '1700',
        label: '5:00PM'
      },
      {
        value: '1730',
        label: '5:30PM'
      },
      {
        value: '1800',
        label: '6:00PM'
      },
      {
        value: '1830',
        label: '6:30PM'
      },
      {
        value: '1900',
        label: '7:00PM'
      },
      {
        value: '1930',
        label: '7:30PM'
      },
      {
        value: '2000',
        label: '8:00PM'
      },
      {
        value: '2030',
        label: '8:30PM'
      },
      {
        value: '2100',
        label: '9:00PM'
      },
      {
        value: '2130',
        label: '9:30PM'
      },
      {
        value: '2200',
        label: '10:00PM'
      },
      {
        value: '2230',
        label: '10:30PM'
      },
      {
        value: '2300',
        label: '11:00PM'
      },
      {
        value: '2330',
        label: '11:30PM'
      }
    ];
    $scope.saveCheckIn = function () {
      $scope.dailyCheckIn.endTime = new Date();
      Pound.add('dailyCheckIn', $scope.dailyCheckIn);
      $location.path('/daily_review/' + $routeParams.id);
    };
    $scope.highlight = function (id, response) {
      $('label').removeClass('highlight');
      $(id).addClass('highlight');
      $scope.dailyCheckIn.wellness = response;
    };
  }
]);
'use strict';
/**
 * @ngdoc function
 * @name livewellApp.controller:SkillsFundamentalsCtrl
 * @description
 * # SkillsFundamentalsCtrl
 * Controller of the livewellApp
 */
angular.module('livewellApp').controller('EwsCtrl', [
  '$scope',
  'UserData',
  function ($scope, UserData) {
    $scope.pageTitle = 'Weekly Check In';
    $scope.ews = UserData.query('ews');
  }
]);
'use strict';
/**
 * @ngdoc function
 * @name livewellApp.controller:SkillsFundamentalsCtrl
 * @description
 * # SkillsFundamentalsCtrl
 * Controller of the livewellApp
 */
angular.module('livewellApp').controller('Ews2Ctrl', [
  '$scope',
  'UserData',
  function ($scope, UserData) {
    $scope.pageTitle = 'Weekly Check In';
    $scope.ews2 = UserData.query('ews2');
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
          if (response.length != undefined) {
            localStorage[el.route] = JSON.stringify(_.compact(response));
          } else {
            localStorage[el.route] = JSON.stringify(response);
          }
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
        scope.randomizationScheme = {};
        scope.currentIndex = scope.questionIndex || 0;
        scope.showQuestion = function (questionPosition) {
          var dataLabelToRandomize = scope.questionGroups[scope.currentIndex].questionDataLabel;
          var numResponsesToRandomize = _.where(scope.questionGroups, { questionDataLabel: dataLabelToRandomize }).length;
          if (numResponsesToRandomize > 1) {
            var questionsToRandomize = _.where(scope.questionGroups, { questionDataLabel: dataLabelToRandomize });
            if (scope.randomizationScheme[dataLabelToRandomize] == undefined) {
              scope.randomizationScheme[dataLabelToRandomize] = Math.floor(Math.random() * numResponsesToRandomize);
            }
            var randomQuestionToPick = questionsToRandomize[scope.randomizationScheme[dataLabelToRandomize]];
            scope.currentIndex = _.findIndex(scope.questionGroups, { id: randomQuestionToPick.id });
            console.log(questionPosition, scope.currentIndex, questionPosition == scope.currentIndex, scope.questionGroups, { id: randomQuestionToPick.id });
          }
          return questionPosition == scope.currentIndex;
        };
        scope.goesToIndex = '';
        scope.goesTo = function (goesToId) {
          for (var index = 0; index < scope.questionGroups.length; index++) {
            if (scope.questionGroups[index].questionDataLabel == goesToId) {
              scope.goesToIndex = index;
            }
          }  // alert(scope.goesToIndex,goesToId );
        };
        scope.next = function (question) {
          console.log(question);
          if (question.responses.length == 1 && question.responses[0].goesTo != '') {
            scope.goesTo(question.responses[0].goesTo);
          }
          if (scope.goesToIndex != '') {
            // alert("Going to " + scope.goesToIndex);
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
        }  //            scope.showEndNav = function(length,pageTitle) {
           //                  if (length == 0 && pageTitle = 'Daily Review'){
           //                        return true}
           //                  }
           //            }
;
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
    $scope.savePromptSchedule = function () {
      $('form').append('<div class="alert alert-success">Your prompt times have been updated.</div>');
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
        if ($routeParams.post == undefined) {
          window.location.href = '#/';
        } else {
          window.location.href = '#/' + $routeParams.post;
        }
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
 * @name livewellApp.controller:LoadInterventionsReviewCtrl
 * @description
 * # LoadInterventionsReviewCtrl
 * Controller of the livewellApp
 */
angular.module('livewellApp').controller('LoadInterventionsCtrl', [
  '$scope',
  'UserData',
  function ($scope, UserData) {
    $scope.pageTitle = 'Topics';
    $scope.hierarchy = UserData.query('interventionLabels');
  }
]);
'use strict';
/**
 * @ngdoc function
 * @name livewellApp.controller:SkillsFundamentalsCtrl
 * @description
 * # SkillsFundamentalsCtrl
 * Controller of the livewellApp
 */
angular.module('livewellApp').controller('SkillsFundamentalsCtrl', [
  '$scope',
  function ($scope) {
    $scope.pageTitle = 'Fundamentals';
    $scope.mainLinks = [
      {
        name: 'Prepare',
        id: 537,
        post: 'skills_fundamentals'
      },
      {
        name: 'Plan',
        id: 538,
        post: 'skills_fundamentals'
      },
      {
        name: 'Perform',
        id: 539,
        post: 'skills_fundamentals'
      }
    ];
  }
]);
'use strict';
/**
 * @ngdoc function
 * @name livewellApp.controller:SkillsAwarenessCtrl
 * @description
 * # SkillsAwarenessCtrl
 * Controller of the livewellApp
 */
angular.module('livewellApp').controller('SkillsAwarenessCtrl', [
  '$scope',
  function ($scope) {
    $scope.pageTitle = 'Awareness';
    $scope.mainLinks = [
      {
        name: 'Self-Assessment',
        id: 194,
        post: 'skills_awareness'
      },
      {
        name: 'Psychiatrist Feedback',
        id: 196,
        post: 'skills_awareness'
      },
      {
        name: 'Support Feedback',
        id: 197,
        post: 'skills_awareness'
      }
    ];
  }
]);
'use strict';
/**
 * @ngdoc function
 * @name livewellApp.controller:SkillsLifestyleCtrl
 * @description
 * # SkillsLifestyleCtrl
 * Controller of the livewellApp
 */
angular.module('livewellApp').controller('SkillsLifestyleCtrl', [
  '$scope',
  function ($scope) {
    $scope.pageTitle = 'Lifestyle';
    $scope.mainLinks = [
      {
        name: 'Sleep',
        id: 543,
        post: 'skills_lifestyle'
      },
      {
        name: 'Medications',
        id: 544,
        post: 'skills_lifestyle'
      },
      {
        name: 'Abstinence',
        id: 545,
        post: 'skills_lifestyle'
      },
      {
        name: 'Routine',
        id: 546,
        post: 'skills_lifestyle'
      },
      {
        name: 'Tranquility',
        id: 547,
        post: 'skills_lifestyle'
      },
      {
        name: 'Socialization',
        id: 562,
        post: 'skills_lifestyle'
      }
    ];
  }
]);
'use strict';
/**
 * @ngdoc function
 * @name livewellApp.controller:SkillsCopingCtrl
 * @description
 * # SkillsCopingCtrl
 * Controller of the livewellApp
 */
angular.module('livewellApp').controller('SkillsCopingCtrl', [
  '$scope',
  function ($scope) {
    $scope.pageTitle = 'Coping';
    $scope.mainLinks = [
      {
        name: 'Depression - Dial Up',
        id: 550,
        post: 'skills_coping',
        type: 'summary_player'
      },
      {
        name: 'Mania - Dial Down',
        id: 551,
        post: 'skills_coping',
        type: 'summary_player'
      }
    ];
  }
]);
'use strict';
/**
 * @ngdoc function
 * @name livewellApp.controller:SkillsTeamCtrl
 * @description
 * # SkillsTeamCtrl
 * Controller of the livewellApp
 */
angular.module('livewellApp').controller('SkillsTeamCtrl', [
  '$scope',
  function ($scope) {
    $scope.pageTitle = 'Team';
    //   $scope.mainLinks = [
    //   {name:"Duality", id:553, post:'skills_team'},
    //   {name:"Humilty", id:554, post:'skills_team'},
    //   {name:"Obligation", id:555, post:'skills_team'},     
    //  {name:"Sacrifice", id:556, post:'skills_team'},
    // {name:"Asking for Help", id:557, post:'skills_team'},
    //   {name:"Giving Back", id:558, post:'skills_team'},
    //   {name:"Doctor Checklist", id:559, post:'skills_team'},     
    //  {name:"Support Checklist", id:560, post:'skills_team'},
    //  {name:"Hospital Checklist", id:561, post:'skills_team'}
    // ];
    $scope.mainLinks = [
      {
        name: 'Psychiatrist',
        id: 580,
        post: 'skills_team'
      },
      {
        name: 'Supports',
        id: 581,
        post: 'skills_team'
      },
      {
        name: 'Hospital',
        id: 582,
        post: 'skills_team'
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
angular.module('livewellApp').controller('ScheduleCtrl', [
  '$scope',
  'UserData',
  function ($scope, UserData) {
    $scope.pageTitle = 'My Schedule';
    $scope.schedules = UserData.query('schedule');
  }
]);
'use strict';
/**
 * @ngdoc function
 * @name livewellApp.controller:SummaryPlayerCtrl
 * @description
 * # SummaryPlayerCtrl
 * Controller of the livewellApp
 */
angular.module('livewellApp').controller('SummaryPlayerCtrl', [
  '$scope',
  '$routeParams',
  '$location',
  function ($scope, $routeParams, $location) {
    $scope.getChapterContents = function (chapter_id, appContent) {
      var search_criteria = { id: parseInt(chapter_id) };
      var chapter = _.where(appContent, search_criteria)[0];
      chapter.element_array = _.where(appContent, search_criteria)[0].element_list.toString().split(',');
      chapter.contents = [];
      // console.log("Chapter selected:",_.where(appContent, search_criteria)[0]);
      // console.log("Chapter contents list:",chapter_contents_list);
      _.each(chapter.element_array, function (element) {
        // console.log(parseInt(element));
        chapter.contents.push(_.where(appContent, { id: parseInt(element) })[0]);
      });
      return chapter;
    };
    $scope.showAddSkills = false;
    $scope.lessons = JSON.parse(localStorage['lessons']);
    $scope.chapter = $scope.getChapterContents($routeParams.id, $scope.lessons);
    $scope.pageTitle = $scope.chapter.pretty_name;
    $scope.page = $scope.chapter.contents;
    $scope.addToMySkills = function () {
      var id = $scope.page.id;
      if (localStorage['mySkills'] == undefined) {
        localStorage['mySkills'] = JSON.stringify([id]);
      } else {
        var mySkills = JSON.parse(localStorage['mySkills']);
        mySkills.push(parseInt(id));
        localStorage['mySkills'] = JSON.stringify(mySkills);
      }
      $location.path('/mySkills');
    };
    debugger;
  }
]);
'use strict';
/**
 * @ngdoc function
 * @name livewellApp.controller:MyskillsCtrl
 * @description
 * # MyskillsCtrl
 * Controller of the livewellApp
 */
angular.module('livewellApp').controller('MyskillsCtrl', [
  '$scope',
  '$location',
  '$filter',
  function ($scope, $location, $filter) {
    $scope.pageTitle = 'My Skills';
    $scope.currentSkillId = null;
    $scope.currentSkillContent = null;
    $scope.lessons = JSON.parse(localStorage['lessons']);
    $scope.mySkills = _.uniq(JSON.parse(localStorage['mySkills']));
    $scope.skill = function (id) {
      return $filter('filter')($scope.lessons, { id: id }, true);
    };
    $scope.showSkill = function (id) {
      $scope.currentSkillId = id;
      $scope.currentSkillContent = $scope.skill(id)[0].main_content;
    };
    $scope.removeSkill = function () {
      var id = $scope.currentSkillId;
      var array = $scope.mySkills;
      var index = array.indexOf(id);
      debugger;
      if (index > -1) {
        array.splice(index, 1);
      }
      $scope.mySkills = array;
      localStorage['mySkills'] = JSON.stringify($scope.mySkills);
      $location.refresh('/mySkills');
    };
  }
]);
'use strict';
/**
 * @ngdoc function
 * @name livewellApp.controller:ChartsdashboardCtrl
 * @description
 * # ChartsdashboardCtrl
 * Controller of the livewellApp
 */
angular.module('livewellApp').controller('ChartsdashboardCtrl', [
  '$scope',
  function ($scope) {
    $scope.config = {
      chart: {
        type: 'heatmap',
        marginTop: 40,
        marginBottom: 80
      },
      title: { text: 'Weekly Dashboard' },
      xAxis: {
        categories: [
          'M',
          'Tu',
          'W',
          'Th',
          'F',
          'Sa',
          'Su'
        ]
      },
      yAxis: {
        categories: [
          'Routine',
          'Sleep',
          'Medications',
          'Wellness'
        ],
        title: null
      },
      colorAxis: {
        min: 0,
        max: 100,
        reversed: false,
        stops: [
          [
            0,
            '#fb0101'
          ],
          [
            0.5,
            '#FCEE21'
          ],
          [
            0.9,
            '#04C300'
          ]
        ]
      },
      tooltip: {
        formatter: function () {
          return 'On <b>' + this.series.xAxis.categories[this.point.x] + '</b>, you scored <br><b>' + this.point.value + '</b> % in <br><b>' + this.series.yAxis.categories[this.point.y] + '</b>';
        }
      },
      series: [{
          name: 'Percent',
          data: [
            [
              0,
              2,
              75
            ],
            [
              1,
              2,
              75
            ],
            [
              2,
              2,
              87.5
            ],
            [
              3,
              2,
              62.5
            ],
            [
              4,
              2,
              50
            ],
            [
              5,
              2,
              62.5
            ],
            [
              6,
              2,
              50
            ],
            [
              0,
              1,
              100
            ],
            [
              1,
              1,
              100
            ],
            [
              2,
              1,
              100
            ],
            [
              3,
              1,
              100
            ],
            [
              4,
              1,
              87.5
            ],
            [
              5,
              1,
              87.5
            ],
            [
              6,
              1,
              87.5
            ],
            [
              0,
              0,
              87.5
            ],
            [
              1,
              0,
              87.5
            ],
            [
              2,
              0,
              87.5
            ],
            [
              3,
              0,
              62.5
            ],
            [
              4,
              0,
              62.5
            ],
            [
              5,
              0,
              62.5
            ],
            [
              6,
              0,
              87.5
            ],
            [
              0,
              3,
              87.5
            ],
            [
              1,
              3,
              87.5
            ],
            [
              2,
              3,
              87.5
            ],
            [
              3,
              3,
              100
            ],
            [
              4,
              3,
              100
            ],
            [
              5,
              3,
              100
            ],
            [
              6,
              3,
              100
            ]
          ],
          dataLabels: {
            enabled: true,
            color: '#000000'
          }
        }]
    };
  }
]);
'use strict';
/**
 * @ngdoc function
 * @name livewellApp.controller:ChartsmedicationCtrl
 * @description
 * # ChartsmedicationCtrl
 * Controller of the livewellApp
 */
angular.module('livewellApp').controller('ChartsmedicationCtrl', [
  '$scope',
  function ($scope) {
    $scope.config = {};
  }
]);
'use strict';
/**
 * @ngdoc function
 * @name livewellApp.controller:ChartssleepCtrl
 * @description
 * # ChartssleepCtrl
 * Controller of the livewellApp
 */
angular.module('livewellApp').controller('ChartssleepCtrl', [
  '$scope',
  function ($scope) {
    $scope.config = {};
  }
]);
'use strict';
/**
 * @ngdoc function
 * @name livewellApp.controller:ChartsroutineCtrl
 * @description
 * # ChartsroutineCtrl
 * Controller of the livewellApp
 */
angular.module('livewellApp').controller('ChartsroutineCtrl', [
  '$scope',
  function ($scope) {
    $scope.config = {};
  }
]);
'use strict';
/**
 * @ngdoc function
 * @name livewellApp.controller:ChartsactivityCtrl
 * @description
 * # ChartsactivityCtrl
 * Controller of the livewellApp
 */
angular.module('livewellApp').controller('ChartsactivityCtrl', [
  '$scope',
  function ($scope) {
    $scope.config = {};
  }
]);
'use strict';
/**
 * @ngdoc function
 * @name livewellApp.controller:DailyreviewtesterCtrl
 * @description
 * # DailyreviewtesterCtrl
 * Controller of the livewellApp
 */
angular.module('livewellApp').controller('DailyreviewtesterCtrl', [
  '$scope',
  'Pound',
  'dailyReview',
  function ($scope, Pound, dailyReview) {
    $scope.collection = Pound.find('dailyCheckIn');
    $scope.proposedIntervention = dailyReview.getCode();
  }
]);
'use strict';
/**
 * @ngdoc function
 * @name livewellApp.controller:PersonalsnapshotCtrl
 * @description
 * # PersonalsnapshotCtrl
 * Controller of the livewellApp
 */
angular.module('livewellApp').controller('PersonalsnapshotCtrl', [
  '$scope',
  'UserData',
  function ($scope, UserData) {
    // 	var sleepRoutineRanges = {};
    // sleepRoutineRanges.MoreSevere      = 12;
    // sleepRoutineRanges.More            = 9;
    // sleepRoutineRanges.Less            = 7;
    // sleepRoutineRanges.LessSevere      = 4;
    // sleepRoutineRanges.BedTimeStrt_MT  = '2300';
    // sleepRoutineRanges.BedtimeStop_MT  = '0100';
    // sleepRoutineRanges.RiseTimeStrt_MT = '0630';
    // sleepRoutineRanges.RiseTimeStop_MT = '0830';
    $scope.sleepRoutineRanges = UserData.query('sleepRoutineRanges');
    $scope.currentClinicalStatusCode = UserData.query('clinicalStatus').currentCode;
  }
]);
'use strict';
/**
 * @ngdoc service
 * @name livewellApp.dailyReview
 * @description
 * # dailyReview
 * Service in the livewellApp.
 */
angular.module('livewellApp').service('dailyReview', [
  'Pound',
  'UserData',
  function (Pound, UserData) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var contents = {};
    var recoder = {}, history = {}, historySeed = {}, dailyCheckInData = {};
    var conditions = [];
    var sleepRoutineRanges = UserData.query('sleepRoutineRanges');
    var currentClinicalStatusCode = UserData.query('clinicalStatus').currentCode;
    var dailyReviewResponses = Pound.find('dailyCheckIn');
    historySeed.wellness = [
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ];
    // wellness balanced 7 days
    historySeed.medications = [
      1,
      1,
      1,
      1,
      1,
      1,
      1
    ];
    // took all meds 7 days
    historySeed.sleep = [
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ];
    // in baseline range 7 days
    historySeed.routine = [
      2,
      2,
      2,
      2,
      2,
      2,
      2
    ];
    // in both windows 7 days
    dailyCheckInData.recoder.wellness = function () {
      var code = null;
      return code;
    };
    recoder.medications = function () {
      var code = null;
      return code;
    };
    recoder.sleep = function (toBed, gotUp, sleepRoutineRanges) {
      var score = 0;
      // duration = gotUp - toBed
      // look at ranges defined in sleepRoutineRanges, which range is it in?
      if (duration < lessSevere) {
        score = -1;
      }
      if (duration > moreSevere) {
        score = 1;
      }
      if (duration < less && duration >= lessSevere) {
        score = -0.5;
      }
      if (duration > more && duration <= moreSevere) {
        score = 0.5;
      }
      return score;
    };
    recoder.routine = function () {
      var sum = 0;
      //look at rise time, is it in in rise time window defined in sleepRoutineRanges, if so, add 1 to sum
      //look at to bed time, is it in in to bed time window defined in sleepRoutineRanges, if so, add 1 to sum
      //if end time is less than start time, add 24 hours to range
      return sum;
    };
    conditions[26] = function () {
      var boolean = false;
      //logic
      return boolean;
    };
    conditions[25] = function () {
      var boolean = false;
      //logic
      return boolean;
    };
    conditions[24] = function () {
      var boolean = false;
      //logic
      return boolean;
    };
    conditions[23] = function () {
      var boolean = false;
      //logic
      return boolean;
    };
    conditions[22] = function () {
      var boolean = false;
      //logic
      return boolean;
    };
    conditions[21] = function () {
      var boolean = false;
      //logic
      return boolean;
    };
    conditions[20] = function () {
      var boolean = false;
      //logic
      return boolean;
    };
    conditions[19] = function () {
      var boolean = false;
      //logic
      return boolean;
    };
    conditions[18] = function () {
      var boolean = false;
      //logic
      return boolean;
    };
    conditions[17] = function () {
      var boolean = false;
      //logic
      return boolean;
    };
    conditions[16] = function () {
      var boolean = false;
      //logic
      return boolean;
    };
    conditions[15] = function () {
      var boolean = false;
      //logic
      return boolean;
    };
    conditions[14] = function () {
      var boolean = false;
      //logic
      return boolean;
    };
    conditions[13] = function () {
      var boolean = false;
      //logic
      return boolean;
    };
    conditions[12] = function () {
      var boolean = false;
      //logic
      return boolean;
    };
    conditions[11] = function () {
      var boolean = false;
      //logic
      return boolean;
    };
    conditions[10] = function () {
      var boolean = true;
      //logic
      return boolean;
    };
    conditions[9] = function () {
      var boolean = false;
      //logic
      return boolean;
    };
    conditions[8] = function () {
      var boolean = false;
      //logic
      return boolean;
    };
    conditions[7] = function () {
      var boolean = false;
      //logic
      return boolean;
    };
    conditions[6] = function () {
      var boolean = false;
      //logic
      return boolean;
    };
    conditions[5] = function () {
      var boolean = false;
      //logic
      return boolean;
    };
    conditions[4] = function () {
      var boolean = false;
      //logic
      return boolean;
    };
    conditions[3] = function () {
      var boolean = false;
      //logic
      return boolean;
    };
    conditions[2] = function () {
      var boolean = true;
      //logic
      return boolean;
    };
    conditions[1] = function () {
      var boolean = false;
      //logic
      return boolean;
    };
    conditions[0] = null;
    contents.getCode = function () {
      //look for the highest TRUE value in the condition set
      debugger;
      for (var i = conditions.length; i--;) {
        if (conditions[i]() == true) {
          return i;
          break;
        }
      }
    };
    return contents;
  }
]);