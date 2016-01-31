'use strict';

/**
 * @ngdoc service
 * @name livewellApp.Guid
 * @description
 * # Guid
 * provides the capacity to generate a guid as needed,
 */
angular.module('livewellApp')
  .service('Guid', function Guid() {
    // AngularJS will instantiate a singleton by calling "new" on this function

    var guid = {};

    // make a string 4 of length 4 with random alphanumerics
    guid.S4 = function () {
    return (((1+Math.random())*0x10000)|0).toString(16).substring(1); 
		}
 
		// concat a bunch together plus stitch in '4' in the third group
		guid.create = function() {
		  return (guid.S4() + guid.S4() + "-" + guid.S4() + "-4" + guid.S4().substr(0,3) + "-" + guid.S4() + "-" + guid.S4() + guid.S4() + guid.S4()).toLowerCase();
		}

		return guid

  });
