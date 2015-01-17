'use strict';

/**
 * @ngdoc overview
 * @name livewellApp
 * @description
 * # livewellApp
 *
 * Main module of the application.
 */
angular
  .module('livewellApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/foundations', {
        templateUrl: 'views/foundations.html',
        controller: 'FoundationsCtrl'
      })
      .when('/checkins', {
        templateUrl: 'views/checkins.html',
        controller: 'CheckinsCtrl'
      })
      .when('/daily_review', {
        templateUrl: 'views/daily_review.html',
        controller: 'DailyReviewCtrl'
      })
      .when('/daily_review/:id', {
        templateUrl: 'views/daily_review.html',
        controller: 'DailyReviewCtrl'
      })
      .when('/wellness', {
        templateUrl: 'views/wellness.html',
        controller: 'WellnessCtrl'
      })
      .when('/wellness/:section', {
        templateUrl: 'views/wellness.html',
        controller: 'WellnessCtrl'
      })
      .when('/wellness', {
        templateUrl: 'views/wellness.html',
        controller: 'WellnessCtrl'
      })
      .when('/instructions', {
        templateUrl: 'views/instructions.html',
        controller: 'InstructionsCtrl'
      })
      .when('/daily_review_summary', {
        templateUrl: 'views/daily_review_summary.html',
        controller: 'DailyReviewSummaryCtrl'
      })
      .when('/daily_review_conclusion', {
        templateUrl: 'views/daily_review_conclusion.html',
        controller: 'DailyReviewConclusionCtrl'
      })
      .when('/daily_review_conclusion/:id', {
        templateUrl: 'views/daily_review_conclusion.html',
        controller: 'DailyReviewConclusionCtrl'
      })
      .when('/daily_review_conclusion/:intervention_set/:id', {
        templateUrl: 'views/daily_review_conclusion.html',
        controller: 'DailyReviewConclusionCtrl'
      })
      .when('/medications', {
        templateUrl: 'views/medications.html',
        controller: 'MedicationsCtrl'
      })
      .when('/skills', {
        templateUrl: 'views/skills.html',
        controller: 'SkillsCtrl'
      })
      .when('/team', {
        templateUrl: 'views/team.html',
        controller: 'TeamCtrl'
      })
      .when('/intervention', {
        templateUrl: 'views/intervention.html',
        controller: 'InterventionCtrl'
      })
      .when('/intervention/:code', {
        templateUrl: 'views/intervention.html',
        controller: 'InterventionCtrl'
      })
      .when('/exit', {
        templateUrl: 'views/exit.html',
        controller: 'ExitCtrl'
      })
      .when('/charts', {
        templateUrl: 'views/charts.html',
        controller: 'ChartsCtrl'
      })
      .when('/weekly_check_in', {
        templateUrl: 'views/weekly_check_in.html',
        controller: 'WeeklyCheckInCtrl'
      })
      .when('/weekly_check_in/:questionIndex', {
        templateUrl: 'views/weekly_check_in.html',
        controller: 'WeeklyCheckInCtrl'
      })
      .when('/daily_check_in', {
        templateUrl: 'views/daily_check_in.html',
        controller: 'DailyCheckInCtrl'
      })
      .when('/daily_check_in/:id', {
        templateUrl: 'views/daily_check_in.html',
        controller: 'DailyCheckInCtrl'
      })
      .when('/settings', {
        templateUrl: 'views/settings.html',
        controller: 'SettingsCtrl'
      })
      .when('/localStorageBackupRestore', {
        templateUrl: 'views/localstoragebackuprestore.html',
        controller: 'LocalstoragebackuprestoreCtrl'
      })
      .when('/cms', {
        templateUrl: 'views/cms.html',
        controller: 'CmsCtrl'
      })
      .when('/admin', {
        templateUrl: 'views/admin.html',
        controller: 'AdminCtrl'
      })
      .when('/load_interventions', {
        templateUrl: 'views/load_interventions.html',
        controller: 'LoadInterventionsCtrl'
      })
      .when('/lesson_player/:id', {
        templateUrl: 'views/lesson_player.html',
        controller: 'LessonPlayerCtrl'
      })
      .when('/lesson_player/', {
        templateUrl: 'views/lesson_player.html',
        controller: 'LessonPlayerCtrl'
      })
      .when('/lesson_player/:id/:post', {
        templateUrl: 'views/lesson_player.html',
        controller: 'LessonPlayerCtrl'
      })
      .when('/skills_fundamentals', {
        templateUrl: 'views/skills_fundamentals.html',
        controller: 'SkillsFundamentalsCtrl'
      })
      .when('/skills_awareness', {
        templateUrl: 'views/skills_awareness.html',
        controller: 'SkillsAwarenessCtrl'
      })
      .when('/skills_lifestyle', {
        templateUrl: 'views/skills_lifestyle.html',
        controller: 'SkillsLifestyleCtrl'
      })
      .when('/skills_coping', {
        templateUrl: 'views/skills_coping.html',
        controller: 'SkillsCopingCtrl'
      })
      .when('/skills_team', {
        templateUrl: 'views/skills_team.html',
        controller: 'SkillsTeamCtrl'
      })
      .when('/skills_fundamentals', {
        templateUrl: 'views/skills_fundamentals.html',
        controller: 'SkillsFundamentalsCtrl'
      })
      .when('/ews', {
        templateUrl: 'views/ews.html',
        controller: 'EwsCtrl'
      })
      .when('/ews2', {
        templateUrl: 'views/ews2.html',
        controller: 'Ews2Ctrl'
      })
      .when('/schedule', {
        templateUrl: 'views/schedule.html',
        controller: 'ScheduleCtrl'
      })
      .when('/summary_player', {
        templateUrl: 'views/summary_player.html',
        controller: 'SummaryPlayerCtrl'
      })
      .when('/summary_player/:id/:post', {
            templateUrl: 'views/summary_player.html',
            controller: 'SummaryPlayerCtrl'
        })
      .otherwise({
        redirectTo: '/'
      });
  });
