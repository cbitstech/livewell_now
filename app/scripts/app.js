// 'use strict';

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
      .when('/load_interventions_review', {
        templateUrl: 'views/load_interventions_review.html',
        controller: 'LoadInterventionsReviewCtrl'
      })
      .when('/mySkills', {
        templateUrl: 'views/myskills.html',
        controller: 'MyskillsCtrl'
      })
      .when('/chartsDashboard', {
        templateUrl: 'views/chartsdashboard.html',
        controller: 'ChartsdashboardCtrl'
      })
      .when('/chartsMedication', {
        templateUrl: 'views/chartsmedication.html',
        controller: 'ChartsmedicationCtrl'
      })
      .when('/chartsSleep', {
        templateUrl: 'views/chartssleep.html',
        controller: 'ChartssleepCtrl'
      })
      .when('/chartsRoutine', {
        templateUrl: 'views/chartsroutine.html',
        controller: 'ChartsroutineCtrl'
      })
      .when('/chartsActivity', {
        templateUrl: 'views/chartsactivity.html',
        controller: 'ChartsactivityCtrl'
      })
      .when('/dailyReviewTester', {
        templateUrl: 'views/dailyreviewtester.html',
        controller: 'DailyreviewtesterCtrl'
      })
      .when('/personalSnapshot', {
        templateUrl: 'views/personalsnapshot.html',
        controller: 'PersonalsnapshotCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }).run(function($rootScope) {

    //  $rootScope.$on('$locationChangeSuccess', function () {
    //     var userClick;

    //     userClick = {
    //       user_id: 'TEST USER',
    //       inverventionId: 'LIVE WELL',
    //       readable_click_datetime: (""+new Date()),
    //       click_datetime: new Date(),
    //       href: window.location.href,
    //       type: 'page change'
    //     };

    //     console.log(userClick);

    //     postToPRImporter(prwAddrHostAndPortHttps, "USERDATA", "userClicks", userClick);


    //  });



    // $rootScope.$on('$includeContentLoaded', function () {

    //     $('.btn').on('click', function(event) {
    //     var userClick;

    //     userClick = {
    //       guid: guid(),
    //       user_id: 'TEST USER',
    //       inverventionId: 'LIVE WELL',
    //       readable_click_datetime: (""+new Date()),
    //       click_datetime: new Date(),
    //       href: window.location.href,
    //       contents: $(this).html(),
    //       tagClass: $(this).attr("class"),
    //       tagId: $(this).attr("id"),
    //       tagName: $(this).get(0).tagName
    //     };

    //     if (userClick.readable_click_datetime !=  localStorage['last_datetime']){
    //     console.log(userClick);
    //     postToPRImporter(prwAddrHostAndPortHttps, "USERDATA", "userClicks", userClick);
    //     }

    //     localStorage['last_datetime'] = userClick.readable_click_datetime;



    //   });



    // })
});



// var prJsonSubmitUrl = "http://10.101.117.92:12345/json/submit";  // http://10.101.117.92:12345/test.html
var prwAddrHostAndPortHttps = "https://app2.cbits.northwestern.edu"; // https://ejs.cbits.northwestern.edu:8094 OR https://165.124.171.88 OR https://165.124.171.34:8094

/**
 * Clears the contents of the specified jQuery element.
 * @param  {[type]} jqElem [description]
 * @return {[type]}        [description]
 */
var clearContents = function(jqElem) {
  if($(jqElem).is("input")) { $(jqElem).val(''); }
  if($(jqElem).is("textarea")) { $(jqElem).text(''); }
};

//===========================================================
// PurpleRobotWarehouse POST code (i.e. database-upload code)
//===========================================================

var s4 = function() {
  return Math.floor((1 + Math.random()) * 0x10000)
             .toString(16)
             .substring(1);
};

var guid = function() {
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
         s4() + '-' + s4() + s4() + s4();
};

/**
 * 
 * @param  {[type]} protoHostAndPortUrlBase 
 * @param  {[type]} userId                  
 * @param  {[type]} postData                
 * @param  {[type]} cbFn                    
 * @param  {[type]} cbData                  
 * @return {[type]}                         
 */

//IN order to use post to pri importer in app:
//postToPRImporter(prwAddrHostAndPortHttps, interventionID:String, "responses",postData:Object);
//postToPRImporter(prwAddrHostAndPortHttps, interventionID:String, "events",postData:Object);

/**
 * POSTs a user-enrollment form to Purple Robot Warehouse, for a specific user.
 * @param  {[type]} protoHostAndPortUrlBase Base URL to which you wish to POST. EX: "https://app2.cbits.northwestern.edu"
 * @param  {[type]} userId                  A user ID string, which will be MD5 hashed - this hash value is the database name. EX (pre-MD5-hashing): "evan.story@northwestern.edu".
 * @param  {[type]} tableName               Table name. EX: "user_responses".
 * @param  {[type]} postData                The data structure to POST. EX: { Q1: "Name?", A1: "John Doe", Q2: "Rate your happiness, 1-10 (high).", A2: 7 }
 * @param  {[type]} cbFn                    Callback function. Takes 4 parameters: cbData, responseData, postData, postUrl
 * @param  {[type]} cbData                  External data to pass to the callback function.
 * @return {[type]}                         No defined return value.
 */


var postArrayToPRImporter = function (protoHostAndPortUrlBase, userId, tableName, postDataArray, cbFn, cbData){

  if (_.isArray(postDataArray)) {

    _.each(postDataArray, function(el){
      postToPRImporter(protoHostAndPortUrlBase, userId, tableName, el, cbFn, cbData);
    })

  };

};

var postToPRImporter = function(protoHostAndPortUrlBase, userId, tableName, postData, cbFn, cbData) {
  var postUrl = protoHostAndPortUrlBase + '/prImporter';

  // generate the PR Importer message to be posted
  var userIdHash = md5(userId);
  var prImporterPostMessage = {
    "json": {
      "Operation": "SubmitProbes",
      "UserHash": userIdHash,
      "Payload": [
        {
          "PROBE": tableName,
          "GUID": guid(),
          "TIMESTAMP": (new Date().getTime() / 1000)
        }
      ],
      "Checksum": ""
    }
  };

  // SINGLE-LEVEL TABLE COLUMN + VALUE APPEND: loop-over the keys in the postData obj and append them to the Payload
  _.each(_.keys(postData), function(k) {
    prImporterPostMessage.json.Payload[0][k] = postData[k];
  });

  // stringify the payload
  prImporterPostMessage.json.Payload = JSON.stringify(prImporterPostMessage.json.Payload);
  
  // package-up the data.
  prImporterPostMessage.json.Checksum = md5(
      prImporterPostMessage.json.UserHash
    + prImporterPostMessage.json.Operation
    + prImporterPostMessage.json.Payload
  );
  var postData = prImporterPostMessage;
  postData.json = JSON.stringify(prImporterPostMessage.json);

  // POST the data to the specified URL.
  console.log('posting the following object to this URL: ' + postUrl);
  console.log(postData);

  $.post(postUrl, postData)
    .done(function(responseData) { 
      // call the user's callback function, if defined
      if (!isNullOrUndefined(cbFn)) {
        cbFn(cbData, responseData, postData, postUrl);
      }
    }
  );
};

// =====================
// Date / Time functions
// =====================

/**
 * Takes an HTML5 date string, and and an HTML5 time string, and returns a JS Date object.
 * @param  {[type]} dateStr [description]
 * @param  {[type]} timeStr [description]
 * @return {[type]}         [description]
 */
var html5DateAndTimeToJSDateTime = function(dateStr, timeStr) {
  var darr = dateStr.split('-');
  var tarr = timeStr.split(':');

  var year = parseInt(darr[0]),
    month = parseInt(darr[1]) - 1,
    day = parseInt(darr[2]),
    hour = parseInt(parseInt(tarr[0], 10)),
    minute = parseInt(parseInt(tarr[1], 10)),
    second = 0
    ;
  var d = new Date(year, month, day, hour, minute, second);
  return d;
};


/**
 * Returns the string representing an ICal-formatted Date string. EX: "20130101T123400" (as seen on: http://tech.cbits.northwestern.edu/purple-robot-javascript-api/)
 * Copy-pasted from PRNM.
 * @return {[type]} [description]
 */
Date.prototype.toICal = function() { var fn = 'Date.prototype.toICal';
  var  yy = this.getFullYear()
      ,MM = this.clone().addMonths(1).getMonth()
      ,dd = this.getDate()
      ,hh = this.getHours()
      ,mm = this.getMinutes()
      ,ss = this.getSeconds();

  var ret = ''
    + yy.toString()
    + ((MM < 10) ? '0' + MM : MM.toString())
    + ((dd < 10) ? '0' + dd : dd.toString())
    + 'T'
    + ((hh < 10) ? '0' + hh : hh.toString())
    + ((mm < 10) ? '0' + mm : mm.toString())
    + ((ss < 10) ? '0' + ss : ss.toString())
    ;
  return ret;
};

/**
 * Converts an ICal-formatted date string into a JS Date object.
 * Copy-pasted from PRNM.
 * @param  {[type]} iCalStr [description]
 * @return {[type]}         [description]
 */
var iCalToDate = function(iCalStr) { var fn = 'iCalToDate';
  var  yy = iCalStr.substr(0,4)
      ,MM = (parseInt(iCalStr.substr(4,2), 10)) - 1
      ,dd = iCalStr.substr(6,2)
      ,hh = iCalStr.substr(9,2)
      ,mm = iCalStr.substr(11,2)
      ,ss = iCalStr.substr(13,2);

  var d = new Date(yy,MM,dd,hh,mm,ss);
  // self.debug('iCalStr = ' + iCalStr + '; d = ' + d, fn);
  return d;
};

// =================
// Utility functions
// =================
 
var isNullOrUndefined = function(v) { var fn = 'isNullOrUndefined';
  // if(v == '"') { self.debug('v is a double-quote!', fn); return false; }
  return (v == null || v == undefined || v == 'null');
};

var isStringGt0Len = function(s) { var fn = 'isString';
  var ret = !self.isNullOrUndefined(s) && _.isString(s) && s.length > 0;
  self.debug('s = ' + s + '; ret = ' + ret, fn);
  return ret;
};


/**
 * Returns a single-quoted string representing a set of values in an array.
 * Copy-pasted from PRNM.
 * @param  {[type]} paramArray [description]
 * @return {[type]}            [description]
 */
var getQuotedAndDelimitedStr = function(paramArray, delim, quoteChar, doNotQuoteTokens) { var fn = 'getQuotedAndDelimitedStr';
  // self.log('entered and exiting, with paramArray = ' + paramArray,fn);
  var qc = self.isNullOrUndefined(quoteChar) ? '\'' : quoteChar;
  if(self.isNullOrUndefined(paramArray) || paramArray.length == 0) { return ''; }
  return _.reduce(_.map(paramArray, function(param) { 
      return !self.isNullOrUndefined(doNotQuoteTokens) && _.isArray(doNotQuoteTokens) && _.contains(doNotQuoteTokens, param)
        ? param
        : qc + param + qc;
    }),
    function(memo, val) {
      return paramArray.length == 1 ? val : memo + delim + val;
  });
};

function md5cycle(x, k) {
var a = x[0], b = x[1], c = x[2], d = x[3];

a = ff(a, b, c, d, k[0], 7, -680876936);
d = ff(d, a, b, c, k[1], 12, -389564586);
c = ff(c, d, a, b, k[2], 17,  606105819);
b = ff(b, c, d, a, k[3], 22, -1044525330);
a = ff(a, b, c, d, k[4], 7, -176418897);
d = ff(d, a, b, c, k[5], 12,  1200080426);
c = ff(c, d, a, b, k[6], 17, -1473231341);
b = ff(b, c, d, a, k[7], 22, -45705983);
a = ff(a, b, c, d, k[8], 7,  1770035416);
d = ff(d, a, b, c, k[9], 12, -1958414417);
c = ff(c, d, a, b, k[10], 17, -42063);
b = ff(b, c, d, a, k[11], 22, -1990404162);
a = ff(a, b, c, d, k[12], 7,  1804603682);
d = ff(d, a, b, c, k[13], 12, -40341101);
c = ff(c, d, a, b, k[14], 17, -1502002290);
b = ff(b, c, d, a, k[15], 22,  1236535329);

a = gg(a, b, c, d, k[1], 5, -165796510);
d = gg(d, a, b, c, k[6], 9, -1069501632);
c = gg(c, d, a, b, k[11], 14,  643717713);
b = gg(b, c, d, a, k[0], 20, -373897302);
a = gg(a, b, c, d, k[5], 5, -701558691);
d = gg(d, a, b, c, k[10], 9,  38016083);
c = gg(c, d, a, b, k[15], 14, -660478335);
b = gg(b, c, d, a, k[4], 20, -405537848);
a = gg(a, b, c, d, k[9], 5,  568446438);
d = gg(d, a, b, c, k[14], 9, -1019803690);
c = gg(c, d, a, b, k[3], 14, -187363961);
b = gg(b, c, d, a, k[8], 20,  1163531501);
a = gg(a, b, c, d, k[13], 5, -1444681467);
d = gg(d, a, b, c, k[2], 9, -51403784);
c = gg(c, d, a, b, k[7], 14,  1735328473);
b = gg(b, c, d, a, k[12], 20, -1926607734);

a = hh(a, b, c, d, k[5], 4, -378558);
d = hh(d, a, b, c, k[8], 11, -2022574463);
c = hh(c, d, a, b, k[11], 16,  1839030562);
b = hh(b, c, d, a, k[14], 23, -35309556);
a = hh(a, b, c, d, k[1], 4, -1530992060);
d = hh(d, a, b, c, k[4], 11,  1272893353);
c = hh(c, d, a, b, k[7], 16, -155497632);
b = hh(b, c, d, a, k[10], 23, -1094730640);
a = hh(a, b, c, d, k[13], 4,  681279174);
d = hh(d, a, b, c, k[0], 11, -358537222);
c = hh(c, d, a, b, k[3], 16, -722521979);
b = hh(b, c, d, a, k[6], 23,  76029189);
a = hh(a, b, c, d, k[9], 4, -640364487);
d = hh(d, a, b, c, k[12], 11, -421815835);
c = hh(c, d, a, b, k[15], 16,  530742520);
b = hh(b, c, d, a, k[2], 23, -995338651);

a = ii(a, b, c, d, k[0], 6, -198630844);
d = ii(d, a, b, c, k[7], 10,  1126891415);
c = ii(c, d, a, b, k[14], 15, -1416354905);
b = ii(b, c, d, a, k[5], 21, -57434055);
a = ii(a, b, c, d, k[12], 6,  1700485571);
d = ii(d, a, b, c, k[3], 10, -1894986606);
c = ii(c, d, a, b, k[10], 15, -1051523);
b = ii(b, c, d, a, k[1], 21, -2054922799);
a = ii(a, b, c, d, k[8], 6,  1873313359);
d = ii(d, a, b, c, k[15], 10, -30611744);
c = ii(c, d, a, b, k[6], 15, -1560198380);
b = ii(b, c, d, a, k[13], 21,  1309151649);
a = ii(a, b, c, d, k[4], 6, -145523070);
d = ii(d, a, b, c, k[11], 10, -1120210379);
c = ii(c, d, a, b, k[2], 15,  718787259);
b = ii(b, c, d, a, k[9], 21, -343485551);

x[0] = add32(a, x[0]);
x[1] = add32(b, x[1]);
x[2] = add32(c, x[2]);
x[3] = add32(d, x[3]);

}

function cmn(q, a, b, x, s, t) {
a = add32(add32(a, q), add32(x, t));
return add32((a << s) | (a >>> (32 - s)), b);
}

function ff(a, b, c, d, x, s, t) {
return cmn((b & c) | ((~b) & d), a, b, x, s, t);
}

function gg(a, b, c, d, x, s, t) {
return cmn((b & d) | (c & (~d)), a, b, x, s, t);
}

function hh(a, b, c, d, x, s, t) {
return cmn(b ^ c ^ d, a, b, x, s, t);
}

function ii(a, b, c, d, x, s, t) {
return cmn(c ^ (b | (~d)), a, b, x, s, t);
}

function md51(s) {
txt = '';
var n = s.length,
state = [1732584193, -271733879, -1732584194, 271733878], i;
for (i=64; i<=s.length; i+=64) {
md5cycle(state, md5blk(s.substring(i-64, i)));
}
s = s.substring(i-64);
var tail = [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0];
for (i=0; i<s.length; i++)
tail[i>>2] |= s.charCodeAt(i) << ((i%4) << 3);
tail[i>>2] |= 0x80 << ((i%4) << 3);
if (i > 55) {
md5cycle(state, tail);
for (i=0; i<16; i++) tail[i] = 0;
}
tail[14] = n*8;
md5cycle(state, tail);
return state;
}

/* there needs to be support for Unicode here,
 * unless we pretend that we can redefine the MD-5
 * algorithm for multi-byte characters (perhaps
 * by adding every four 16-bit characters and
 * shortening the sum to 32 bits). Otherwise
 * I suggest performing MD-5 as if every character
 * was two bytes--e.g., 0040 0025 = @%--but then
 * how will an ordinary MD-5 sum be matched?
 * There is no way to standardize text to something
 * like UTF-8 before transformation; speed cost is
 * utterly prohibitive. The JavaScript standard
 * itself needs to look at this: it should start
 * providing access to strings as preformed UTF-8
 * 8-bit unsigned value arrays.
 */
function md5blk(s) { /* I figured global was faster.   */
var md5blks = [], i; /* Andy King said do it this way. */
for (i=0; i<64; i+=4) {
md5blks[i>>2] = s.charCodeAt(i)
+ (s.charCodeAt(i+1) << 8)
+ (s.charCodeAt(i+2) << 16)
+ (s.charCodeAt(i+3) << 24);
}
return md5blks;
}

var hex_chr = '0123456789abcdef'.split('');

function rhex(n)
{
var s='', j=0;
for(; j<4; j++)
s += hex_chr[(n >> (j * 8 + 4)) & 0x0F]
+ hex_chr[(n >> (j * 8)) & 0x0F];
return s;
}

function hex(x) {
for (var i=0; i<x.length; i++)
x[i] = rhex(x[i]);
return x.join('');
}

function md5(s) {
return hex(md51(s));
}

/* this function is much faster,
so if possible we use it. Some IEs
are the only ones I know of that
need the idiotic second function,
generated by an if clause.  */

function add32(a, b) {
return (a + b) & 0xFFFFFFFF;
}

if (md5('hello') != '5d41402abc4b2a76b9719d911017c592') {
function add32(x, y) {
var lsw = (x & 0xFFFF) + (y & 0xFFFF),
msw = (x >> 16) + (y >> 16) + (lsw >> 16);
return (msw << 16) | (lsw & 0xFFFF);
}
}


