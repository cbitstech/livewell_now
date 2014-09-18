'use strict';

/**
 * @ngdoc service
 * @name livewellApp.UserDetails
 * @description
 * # UserDetails
 * Service in the livewellApp.
 */
angular.module('livewellApp')
  .service('UserDetails', function UserDetails(Pound) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    var _USER_LOCAL_COLLECTION_KEY = 'user';

    var userDetails = {};

    var userDetailsModel = {
    	id: 1,
    	userID: null,
    	groupID: null,
    	loginKey: null

    }

    //if there is no user, create a dummy user object based on the above model
    if (localStorage[_USER_LOCAL_COLLECTION_KEY] == undefined){
    	Pound.save(_USER_LOCAL_COLLECTION_KEY,userDetailsModel);
    }

    //return the current user object
    userDetails.find = Pound.find(_USER_LOCAL_COLLECTION_KEY,{id:1})[0];

    //updates the whole user object
    userDetails.update = function(userObject){
    	Pound.update(_USER_LOCAL_COLLECTION_KEY,userObject);
    	return userDetails.find
    };

    // updates one key in the whole user object
    userDetails.updateKey = function(key, value){
    	var userObject = userDetails.find;
    	userObject[key] = value;
    	return userDetails.update(userObject);
    }

    return userDetails;


  });
