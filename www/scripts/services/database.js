
/**
 * @ngdoc service
 * @name livewellApp.Database
 * @description
 * # Database
 * IndexedDB data storage for submitted survey data.
 */
angular.module('livewellApp').service('Database', function (UserData) {
    window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
    window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction || { READ_WRITE: "readwrite" }; // This line should only be needed if it is needed to support the object's constants for older browsers
    window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange;

    var DATABASE_VERSION = 4;
    
    var database = {
        db: null
    };
    
    database.waitForDatabase = function(callback) {
        if (database.db == null) {
            window.setTimeout(function() {
                database.waitForDatabase(callback);
            }, 10);
        } else {
            callback();
        }
    };
    
    var openRequest = indexedDB.open("LiveWell", DATABASE_VERSION);

    openRequest.onerror = function(event) {
        console.log('DATABASE: Unable to open/create database: ' + event);
    };

    openRequest.onsuccess = function(event) {
        console.log('DATABASE: Database opened successfully.: ' + event);

        database.db = event.target.result;
    };
    
    openRequest.onupgradeneeded = function(event) { 
        var db = event.target.result;
        
        var lastVersion = window.localStorage.getItem('livewell_last_database_version');
        
        if (lastVersion == null) {
            lastVersion = 0;
        }
        
        switch (lastVersion) {
            case 0:
                var dailyCheckInStore = db.createObjectStore('daily_check_in', {
                    keypath: 'id',
                    autoIncrement: true
                }); 
            
                dailyCheckInStore.createIndex('created', 'created');
                dailyCheckInStore.createIndex('sessionID', 'sessionID');

                dailyCheckInStore.createIndex('gotUp', 'gotUp');
                dailyCheckInStore.createIndex('toBed', 'toBed');
                dailyCheckInStore.createIndex('medications', 'medications');
                dailyCheckInStore.createIndex('wellness', 'wellness');
                dailyCheckInStore.createIndex('sleepDuration', 'sleepDuration');

                var weeklyCheckInStore = db.createObjectStore('weekly_check_in', {
                    keypath: 'id',
                    autoIncrement: true
                });

                weeklyCheckInStore.createIndex('created', 'created');
                weeklyCheckInStore.createIndex('sessionID', 'sessionID');
            
                weeklyCheckInStore.createIndex('phq1', 'phq1');
                weeklyCheckInStore.createIndex('phq2', 'phq2');
                weeklyCheckInStore.createIndex('phq3', 'phq3');
                weeklyCheckInStore.createIndex('phq4', 'phq4');
                weeklyCheckInStore.createIndex('phq5', 'phq5');
                weeklyCheckInStore.createIndex('phq6', 'phq6');
                weeklyCheckInStore.createIndex('phq7', 'phq7');
                weeklyCheckInStore.createIndex('phq8', 'phq8');
                weeklyCheckInStore.createIndex('phq_composite', 'phq_composite');

                weeklyCheckInStore.createIndex('amrs1', 'amrs1');
                weeklyCheckInStore.createIndex('amrs2', 'amrs2');
                weeklyCheckInStore.createIndex('amrs3', 'amrs3');
                weeklyCheckInStore.createIndex('amrs4', 'amrs4');
                weeklyCheckInStore.createIndex('amrs5', 'amrs5');
                weeklyCheckInStore.createIndex('amrs_composite', 'amrs_composite');

                var earlyWarningDepressionStore = db.createObjectStore('ews_depression', {
                    keypath: 'id',
                    autoIncrement: true
                });

                earlyWarningDepressionStore.createIndex('created', 'created');
                earlyWarningDepressionStore.createIndex('sessionID', 'sessionID');
                earlyWarningDepressionStore.createIndex('warning_count', 'count');
            
                earlyWarningDepressionStore.createIndex('anxious', 'anxious');
                earlyWarningDepressionStore.createIndex('less_energy', 'less_energy');
                earlyWarningDepressionStore.createIndex('concentration', 'concentration');
                earlyWarningDepressionStore.createIndex('less_interest', 'less_interest');
                earlyWarningDepressionStore.createIndex('negative_thinking', 'negative_thinking');
                earlyWarningDepressionStore.createIndex('withdrawn', 'withdrawn');
                earlyWarningDepressionStore.createIndex('sleep', 'sleep');
                earlyWarningDepressionStore.createIndex('guilt', 'guilt');
                earlyWarningDepressionStore.createIndex('none', 'none');

                var earlyWarningAnxiousStore = db.createObjectStore('ews_anxious', {
                    keypath: 'id',
                    autoIncrement: true
                });

                earlyWarningAnxiousStore.createIndex('created', 'created');
                earlyWarningAnxiousStore.createIndex('sessionID', 'sessionID');
                earlyWarningAnxiousStore.createIndex('warning_count', 'count');
            
                earlyWarningAnxiousStore.createIndex('sleep', 'sleep');
                earlyWarningAnxiousStore.createIndex('more_active', 'more_active');
                earlyWarningAnxiousStore.createIndex('more_talkative', 'more_talkative');
                earlyWarningAnxiousStore.createIndex('more_social', 'more_social');
                earlyWarningAnxiousStore.createIndex('more_irritable', 'more_irritable');
                earlyWarningAnxiousStore.createIndex('more_energy', 'more_energy');
                earlyWarningAnxiousStore.createIndex('more_self_esteem', 'more_self_esteem');
                earlyWarningAnxiousStore.createIndex('racing_thoughts', 'racing_thoughts');
                earlyWarningAnxiousStore.createIndex('none', 'none');
            case 1:
                var dailyReviewStore = db.createObjectStore('daily_review', {
                    keypath: 'id',
                    autoIncrement: true
                }); 
            
                dailyReviewStore.createIndex('started', 'started');
                dailyReviewStore.createIndex('userStarted', 'userStarted');

                dailyReviewStore.createIndex('initialCode', 'initialCode');
                dailyReviewStore.createIndex('finalCode', 'finalCode');
            case 2:
                var clinicalStatusStore = db.createObjectStore('clinical_status', {
                    keypath: 'id',
                    autoIncrement: true
                }); 
            
                clinicalStatusStore.createIndex('updated', 'updated');
                clinicalStatusStore.createIndex('status_code', 'status_code');
                clinicalStatusStore.createIndex('version', 'version');
                clinicalStatusStore.createIndex('source', 'source');
                
                var clinicalReachoutStore = db.createObjectStore('clinical_reachout', {
                    keypath: 'id',
                    autoIncrement: true
                }); 
            
                clinicalReachoutStore.createIndex('updated', 'updated');
                clinicalReachoutStore.createIndex('reachout_code', 'reachout_code');
                clinicalReachoutStore.createIndex('provider_call', 'provider_call');
                clinicalReachoutStore.createIndex('provider_email', 'provider_email');
                clinicalReachoutStore.createIndex('coach_email', 'coach_email');
                clinicalReachoutStore.createIndex('message', 'message');
                clinicalReachoutStore.createIndex('notify', 'notify');
            case 3:
                var clinicalWeeklyReachoutStore = db.createObjectStore('clinical_weekly_reachout', {
                    keypath: 'id',
                    autoIncrement: true
                }); 
            
                clinicalWeeklyReachoutStore.createIndex('updated', 'updated');
                clinicalWeeklyReachoutStore.createIndex('reachout_code', 'reachout_code');
                clinicalWeeklyReachoutStore.createIndex('provider_call', 'provider_call');
                clinicalWeeklyReachoutStore.createIndex('provider_email', 'provider_email');
                clinicalWeeklyReachoutStore.createIndex('coach_email', 'coach_email');
                clinicalWeeklyReachoutStore.createIndex('message', 'message');
                clinicalWeeklyReachoutStore.createIndex('notify', 'notify');
        }

        window.localStorage.setItem('livewell_last_database_version', DATABASE_VERSION);
        
        var transaction = event.target.transaction;

        transaction.oncomplete = function(event) {    
            console.log('DATABASE CREATED');
            database.db = db;
        };
    };

    database.insert = function(tableName, object) {
        database.waitForDatabase(function() {
            var transaction = database.db.transaction([ tableName ], "readwrite");
        
            transaction.oncomplete = function(event) {
                // Transaction created successfully.
            };
        
            transaction.onerror = function(event) {
                console.log('DATABASE: Error creating transaction for \'' + tableName + '\'. Event:');
                console.log(event);
            };

            var store = transaction.objectStore(tableName);

            var request = store.add(object);

            request.onsuccess = function(event) {
                console.log('DATABASE: INSERT into \'' + tableName + '\' succeeded.');
            };

            request.onerror = function(event) {
                console.log('DATABASE: Error on INSERT into \'' + tableName + '\'. Event:');
                console.log(event);
            };
        });
    };

    database.insertWithCallback = function(tableName, object, callback) {
        database.waitForDatabase(function() {
            var transaction = database.db.transaction([ tableName ], "readwrite");
        
            transaction.oncomplete = function(event) {
                // Transaction created successfully.
            };
        
            transaction.onerror = function(event) {
                console.log('DATABASE: Error creating transaction for \'' + tableName + '\'. Event:');
                console.log(event);
            };

            var store = transaction.objectStore(tableName);

            var request = store.add(object);

            request.onsuccess = function(event) {
                console.log('DATABASE: INSERT into \'' + tableName + '\' succeeded.');
                
                callback();
            };

            request.onerror = function(event) {
                console.log('DATABASE: Error on INSERT into \'' + tableName + '\'. Event:');
                console.log(event);
            };
        });
    };

    database.upsert = function(tableName, object) {
        database.waitForDatabase(function() {
            var transaction = database.db.transaction([ tableName ], "readwrite");
        
            transaction.oncomplete = function(event) {
                // Transaction created successfully.
            };
        
            transaction.onerror = function(event) {
                console.log('DATABASE: Error creating transaction for \'' + tableName + '\'. Event:');
                console.log(event);
            };

            var store = transaction.objectStore(tableName);

            var request = store.put(object);

            request.onsuccess = function(event) {
                console.log('DATABASE: UPSERT into \'' + tableName + '\' succeeded.');
            };

            request.onerror = function(event) {
                console.log('DATABASE: Error on UPSERT into \'' + tableName + '\'. Event:');
                console.log(event);
            };
        });
    };
    
    database.remove = function(tableName, id) {
        database.waitForDatabase(function() {
            var transaction = database.db.transaction([ tableName ], "readwrite");
        
            var store = transaction.objectStore(tableName);
        
            var request = store.delete(id);
        
            request.onsuccess = function(event) {
                // Item deleted successfully...
            };

            request.onerror = function(event) {
                console.log('DATABASE: Error on DELETE from \'' + tableName + '\', ID = \'' + id + '\'. Event:');
                console.log(event);
            };
        });
    };

    database.get = function(tableName, id, getCallback, failCallback) {
        database.waitForDatabase(function() {
            var transaction = database.db.transaction([ tableName ], "readonly");
        
            var store = transaction.objectStore(tableName);
        
            var request = store.get(id);
        
            request.onsuccess = function(event) {
                getCallback(request.result);
            };

            request.onerror = function(event) {
                console.log('DATABASE: Error on GET from \'' + tableName + '\', ID = \'' + id + '\'. Event:');
                console.log(event);
            
                failCallback();
            };
        });
    };

    database.filter = function(tableName, indexName, valueQuery, direction, filterCallback, failCallback) {
        database.waitForDatabase(function() {
            console.log('FILTER ' + tableName + ' -- ' + indexName);
            
            var transaction = database.db.transaction([ tableName ], "readonly");

            var store = transaction.objectStore(tableName);
            var index = store.index(indexName);

            var request = null;
        
            if (valueQuery != null) {
                if (direction != null) {
                    request = index.openCursor(valueQuery, direction);
                } else {
                    request = index.openCursor(valueQuery);
                }
            } else {
                request = index.openCursor();
            }       
                
            request.onsuccess = function(event) {
                var cursor = event.target.result;

                filterCallback(cursor);
            };

            request.onerror = function(event) {
                console.log('DATABASE: Error on FILTER from \'' + tableName + '.' + indexName + '\', DIRECTION = \'' + direction + '\'. Event:');
                console.log(event);
            
                failCallback();
            };
        });
    };
    
    database.updateDailyReachout = function(callback) {
        var statusCodes = [];
        
        database.filter('clinical_status', 'updated', IDBKeyRange.lowerBound(0), "prev", function(cursor) {
            if (cursor && statusCodes.length < 2) {
                statusCodes.push(cursor.value.status_code);
                
                cursor.continue();
            } else {
                while (statusCodes.length < 2) {
                    statusCodes.push(1);
                }

                var wellnessList = [];
                var medicationList = [];
                var sleepDurationList = [];

                var sleepRoutineRanges = UserData.query('sleepRoutineRanges');

                database.filter('daily_check_in', 'created', IDBKeyRange.lowerBound(0), "prev", function(cursor) {
                    if (cursor && wellnessList.length < 7) {
                        wellnessList.push(parseInt("" + cursor.value.wellness));
                        medicationList.push(parseInt("" + cursor.value.medications));

                        var duration = parseInt("" + cursor.value.sleepDuration);
                        
                        // TODO: Code against latest goals at the time...

                        if (duration <= sleepRoutineRanges.LessSevere) {
                            sleepDurationList.push(-2);
                        } else if (duration < sleepRoutineRanges.Less && duration > sleepRoutineRanges.LessSevere) {
                            sleepDurationList.push(-1);
                        } else if (duration >= sleepRoutineRanges.Less && duration <= sleepRoutineRanges.More) {
                            sleepDurationList.push(0);
                        } else if (duration > sleepRoutineRanges.More && duration < sleepRoutineRanges.MoreSevere) {
                            sleepDurationList.push(1);
                        } else if (duration >= sleepRoutineRanges.MoreSevere) {
                            sleepDurationList.push(2);
                        }

                        cursor.continue();
                    } else {
                        while (wellnessList.length < 7) {
                            wellnessList.push(0);
                        }

                        while (medicationList.length < 7) {
                            medicationList.push(2);
                        }

                        while (sleepDurationList.length < 7) {
                            sleepDurationList.push(0);
                        }

                        var reachoutList = [];
                        var notifyList = [];

                        database.filter('clinical_reachout', 'updated', IDBKeyRange.lowerBound(0), "prev", function(cursor) {
                            if (cursor && reachoutList.length < 7) {
                                reachoutList.push(parseInt("" + cursor.value.reachout_code));
                                notifyList.push(cursor.value.notify);
                                
                                cursor.continue();
                            } else {
                                while (reachoutList.length < 7) {
                                    reachoutList.push(0);
                                }

                                while (notifyList.length < 7) {
                                    notifyList.push(false);
                                }
                                
                                database.calculateClinicalReachout(statusCodes, wellnessList, medicationList, sleepDurationList, reachoutList, notifyList, function(newReachoutItem) {
									var dbObject = {
                                        updated: Date.now(),
                                        reachout_code: newReachoutItem['reachout_code'],
                                        provider_call: newReachoutItem['provider_call'],
                                        provider_email: newReachoutItem['provider_email'],
                                        coach_email: newReachoutItem['coach_email'],
                                        message: newReachoutItem['message'],
                                        notify: newReachoutItem['notify']
                                    };
                                    
									(new PurpleRobot()).emitReading('livewell_app_expert_system_daily_reachout', dbObject).execute();

                                    database.insertWithCallback('clinical_reachout', dbObject, callback);
                                });
                            }                   
                        }, function() {
                            console.log('DATABASE: Unable to fetch last reachouts to update reachout...');
                        });
                    }
                }, function() {
                    console.log('DATABASE: Unable to fetch last daily check-ins to update reachout...');
                });
            }
        }, function() {
            console.log('DATABASE: Unable to fetch last clinical status to update reachout...');
        });
    };

    database.updateClinicalStatus = function(callback) {
        database.filter('clinical_status', 'updated', IDBKeyRange.lowerBound(0), "prev", function(cursor) {
            var lastStatusCode = 1;
        
            if (cursor != null) {
                lastStatusCode = cursor.value.status_code;
            }

            var lastSevenResponses = [];

            database.filter('daily_check_in', 'created', IDBKeyRange.lowerBound(0), "prev", function(cursor) {
				var dailyCount = 0;
	
				if (localStorage['dailyCheckInCount'] != undefined) {
					dailyCount = parseInt(localStorage['dailyCheckInCount']);
				}
				
				if (dailyCount > 7) {
					dailyCount = 7;
				}
            
                if (cursor && lastSevenResponses.length < dailyCount) {
                    lastSevenResponses.push(parseInt("" + cursor.value.wellness));
                    cursor.continue();              
                } else {
                    var newStatusCode = lastStatusCode;
                    
                    if (dailyCount >= 5) {
						if (lastStatusCode == 1) { // Well 
							var prodromalCount = 0;
					
							for (var i = 0; i < lastSevenResponses.length; i++) {
								if (Math.abs(lastSevenResponses[i]) >= 2) {
									prodromalCount += 1;
								}
							}
					
							if (prodromalCount >= 4) {
								newStatusCode = 2;
							}
						} else if (lastStatusCode == 2) { // Prodromal
							var wellCount = 0;
							var unwellCount = 0;
					
							for (var i = 0; i < lastSevenResponses.length; i++) {
								if (Math.abs(lastSevenResponses[i]) <= 1) {
									wellCount += 1;
								} else if (Math.abs(lastSevenResponses[i]) >= 3) {
									unwellCount += 1;
								}
							}
					
							if (wellCount >= 5) {
								newStatusCode = 1;
							} else if (unwellCount >= 5) {
								newStatusCode = 4;
							}
						} else if (lastStatusCode == 3) { // Recovering
							var wellCount = 0;
							var unwellCount = 0;
					
							for (var i = 0; i < lastSevenResponses.length; i++) {
								if (Math.abs(lastSevenResponses[i]) <= 1) {
									wellCount += 1;
								} else if (Math.abs(lastSevenResponses[i]) >= 3) {
									unwellCount += 1;
								}
							}
					
							if (wellCount >= 5) {
								newStatusCode = 1;
							} else if (unwellCount >= 5) {
								newStatusCode = 4;
							}
						} else if (lastStatusCode == 4) {
							var recoveringCount = 0;
					
							for (var i = 0; i < lastSevenResponses.length; i++) {
								if (Math.abs(lastSevenResponses[i]) <= 2) {
									recoveringCount += 1;
								}
							}
					
							if (recoveringCount >= 5) {
								newStatusCode = 3;
							}
						}
					}

					(new PurpleRobot()).emitReading('livewell_app_expert_system_status_code', {
						current_code: newStatusCode,
						prior_code: lastStatusCode
					}).execute();
                    
					database.insertWithCallback('clinical_status', {
						updated: Date.now(),
						status_code: newStatusCode,
						source: 'app'
					}, callback);
                }
            }, function() {
                console.log('DATABASE: Unable to fetch daily reviews to update clinical status...');
            });
        }, function() {
            console.log('DATABASE: Unable to fetch last clinical status to update clinical status...');
        });
    };

    database.updateWeeklyReachout = function(callback) {
        var phq_composites = [];
        var amrs_composites = [];
        
        database.filter('weekly_check_in', 'created', IDBKeyRange.lowerBound(0), "prev", function(cursor) {
            if (cursor && phq_composites.length < 2) {
                phq_composites.push(cursor.value.phq_composite);
                amrs_composites.push(cursor.value.amrs_composite);
                
                cursor.continue();
            } else {
                var reachout = {
                    updated: Date.now(),
                    reachout_code: 0,
                    provider_call: false,
                    provider_email: false,
                    coach_email: false,
                    message: null,
                    notify: false
                };
                
                if (amrs_composites.length == 2) {
                    if (amrs_composites[0] >= 6 && amrs_composites[1] < 6) {
                        reachout['reachout_code'] = 18;
                        reachout['message'] = 'Looks like you may be entering a manic episode. Call your psychiatrist to check in. ';
                        reachout['provider_call'] = true;
                        reachout['provider_email'] = true;
                        reachout['coach_email'] = true;
                    } else if (phq_composites[0] >= 10 && phq_composites[1] < 10) {
                        reachout['reachout_code'] = 19;
                        reachout['message'] = 'Looks like you may be entering a depressive episode. Call your psychiatrist to check in. ';
                        reachout['provider_call'] = true;
                        reachout['provider_email'] = true;
                        reachout['coach_email'] = true;
                    }
                } else if (amrs_composites.length == 1) {
                    if (amrs_composites[0] >= 6) {
                        reachout['reachout_code'] = 18;
                        reachout['message'] = 'Looks like you may be entering a manic episode. Call your psychiatrist to check in. ';
                        reachout['provider_call'] = true;
                        reachout['provider_email'] = true;
                        reachout['coach_email'] = true;
                    } else if (phq_composites[0] >= 10) {
                        reachout['reachout_code'] = 19;
                        reachout['message'] = 'Looks like you may be entering a depressive episode. Call your psychiatrist to check in. ';
                        reachout['provider_call'] = true;
                        reachout['provider_email'] = true;
                        reachout['coach_email'] = true;
                    }
                }
				
				(new PurpleRobot()).emitReading('livewell_app_expert_system_weekly_reachout', reachout).execute();

                database.insertWithCallback('clinical_weekly_reachout', reachout, callback);
            }
        }, function() {
            console.log('DATABASE: Unable to fetch last weekly check-in to update reachout...');
        });
    };

    database.calculateClinicalReachout = function(statusCodes, wellnessList, medicationList, sleepDurationList, reachoutList, notifyList, callback) {
        var wellnessFourModerateUp = 0;
        var wellnessSevenModerateUp = 0;
        var wellnessSevenModerateDown = 0;
        var wellnessSevenMildModerateUp = 0;
        var wellnessSevenMildModerateDown = 0;
        
        for (var i = 0; i < 4; i++) {
            if (wellnessList[i] == 3) {
                wellnessFourModerateUp += 1;
            }
        }

        for (var i = 0; i < 7; i++) {
            if (wellnessList[i] >= 3) {
                wellnessSevenModerateUp += 1;
            } else if (wellnessList[i] <= -3) {
                wellnessSevenModerateDown += 1;
            } else if (wellnessList[i] >= 2) {
                wellnessSevenMildModerateUp += 1;
            } else if (wellnessList[i] <= -2) {
                wellnessSevenMildModerateDown += 1;
            }               
        }
        
        var medicationFourAll = 0;

        for (var i = 0; i < 4; i++) {
            if (medicationList[i] == 2) {
                medicationFourAll += 1;
            }
        }
        
        var sleepDurationFourLessSevere = 0;
        var sleepDurationFourMoreSevere = 0;
    
        for (var i = 0; i < 4; i++) {
            if (sleepDurationList[i] == -2) {
                sleepDurationFourLessSevere += 1;
            } else if (sleepDurationList[i] == 2) {
                sleepDurationFourMoreSevere += 1;
            }
        }
        
        var reachout = {
            reachout_code: 0,
            provider_call: false,
            provider_email: false,
            coach_email: false,
            message: null,
            notify: false
        };
        
        if (wellnessList[0] == 4) { // Crisis-Up (1)
            reachout['reachout_code'] = 1;
            reachout['message'] = 'Looks like you are in a crisis. Call your psychiatrist, call 911, or go to the nearest emergency room.';
            reachout['provider_call'] = true;
            reachout['provider_email'] = true;
            reachout['coach_email'] = true;
        } else if (wellnessList[0] == -4) { // Crisis-Down (2)
            reachout['reachout_code'] = 2;
            reachout['message'] = 'Looks like you are in a crisis. Call your psychiatrist, call 911, or go to the nearest emergency room.';
            reachout['provider_call'] = true;
            reachout['provider_email'] = true;
            reachout['coach_email'] = true;
        } else if (statusCodes[0] == 4 && (statusCodes[0] == 2 || statusCodes[0] == 3)) {
            if (wellnessSevenModerateUp > wellnessSevenModerateDown) { // Clinical Status to Manic (3)
                reachout['reachout_code'] = 3;
                reachout['message'] = 'Looks like you may be entering a manic episode. Call your psychiatrist to check in.';
                reachout['provider_call'] = true;
                reachout['provider_email'] = true;
                reachout['coach_email'] = true;
            } else if (wellnessSevenModerateUp < wellnessSevenModerateDown) { // Clinical Status to Depressed (4)
                reachout['reachout_code'] = 4;
                reachout['message'] = 'Looks like you may be entering a depressive episode. Call your psychiatrist to check in.';
                reachout['provider_call'] = true;
                reachout['provider_email'] = true;
                reachout['coach_email'] = true;
            } else { // Clinical Status to Unwell (5)
                reachout['reachout_code'] = 5;
                reachout['message'] = 'Looks like you may be entering a mood episode. Call your psychiatrist to check in.';
                reachout['provider_call'] = true;
                reachout['provider_email'] = true;
                reachout['coach_email'] = true;
            }
        } else if (statusCodes[0] == 2 && statusCodes[1] == 1) {
            if (wellnessSevenMildModerateUp > wellnessSevenMildModerateDown) { // Clinical Status to Prodromal-Mania (6)
                reachout['reachout_code'] = 6;
                reachout['message'] = 'Looks like you may be having early warning signs of mania. This could put you at risk for a manic episode. Call your psychiatrist to check in.';
                reachout['provider_call'] = true;
                reachout['provider_email'] = true;
                reachout['coach_email'] = true;
            } else if (wellnessSevenMildModerateUp < wellnessSevenMildModerateDown) { // Clinical Status to Prodromal-Depression (7)
                reachout['reachout_code'] = 7;
                reachout['message'] = 'Looks like you may be having early warning signs of depression. This could put you at risk for a depressive episode. Call your psychiatrist to check in.';
                reachout['provider_call'] = true;
                reachout['provider_email'] = true;
                reachout['coach_email'] = true;
            } else { // Clinical Status to Prodromal (8)
                reachout['reachout_code'] = 8;
                reachout['message'] = 'Looks like you may be having early warning signs. This could put you at risk for a mood episode. Call your psychiatrist to check in.';
                reachout['provider_call'] = true;
                reachout['provider_email'] = true;
                reachout['coach_email'] = true;
            }
        } else if (statusCodes[0] < 4) { 
            if (wellnessList[0] == 3 && (wellnessFourModerateUp >= 3 || wellnessSevenModerateUp >= 4)) { // Worsening Symptoms-Mania (9)
                reachout['reachout_code'] = 9;
                reachout['message'] = 'Looks like you may be having worsening symptoms of mania. Call your psychiatrist to check in.';
                reachout['provider_call'] = true;
                reachout['provider_email'] = true;
                reachout['coach_email'] = true;
            } else if (wellnessList[0] == -3 && wellnessSevenModerateDown >= 4) { // Worsening Symptoms-Depression (10)
                reachout['reachout_code'] = 10;
                reachout['message'] = 'Looks like you may be having worsening symptoms of depression. Call your psychiatrist to check in.';
                reachout['provider_call'] = true;
                reachout['provider_email'] = true;
                reachout['coach_email'] = true;
            } else if (Math.abs(wellnessList[0]) == 3 && wellnessFourModerateUp >=2 && wellnessSevenModerateDown >= 2) { // Worsening Symptoms-Unwell (11)
                reachout['reachout_code'] = 11;
                reachout['message'] = 'Looks like you may be having worsening symptoms. Call your psychiatrist to check in.';
                reachout['provider_call'] = true;
                reachout['provider_email'] = true;
                reachout['coach_email'] = true;
            }
        } else if (statusCodes[0] == 1) { 
            if (Math.abs(wellnessList[0]) <= 1) {
                if (medicationList[0] < 2) {
                    if (medicationFourAll == 0) { // High Risk-Medications-Mail (12)
                        reachout['reachout_code'] = 12;
                        reachout['message'] = 'Looks like you have been missing medication doses. This could put you at risk for symptoms. Call your psychiatrist to discuss any problems you may be having.';
                        reachout['provider_call'] = true;
                        reachout['provider_email'] = true;
                        reachout['coach_email'] = true;
                    } else if (medicationFourAll == 1) { // High Risk-Medications-Call (13)
                        reachout['reachout_code'] = 13;
                        reachout['message'] = 'Looks like you have been missing medication doses. This could put you at risk for symptoms. Call your psychiatrist to discuss any problems you may be having.';
                        reachout['provider_call'] = true;
                        reachout['provider_email'] = false;
                        reachout['coach_email'] = false;
                    }
                } else if (sleepDurationList[0] == -2) {
                    if (sleepDurationFourLessSevere >= 3) { // High Risk-Sleep Less-Mail (14)
                        reachout['reachout_code'] = 14;
                        reachout['message'] = 'Looks like you have been sleeping too little. This could put you at risk for symptoms. Call your psychiatrist to discuss any problems you may be having.';
                        reachout['provider_call'] = true;
                        reachout['provider_email'] = true;
                        reachout['coach_email'] = true;
                    } else if (sleepDurationFourLessSevere == 2) { // High Risk-Sleep Less-Call (15)
                        reachout['reachout_code'] = 15;
                        reachout['message'] = 'Looks like you have been sleeping less than usual. This could put you at risk for symptoms. Call your psychiatrist to discuss any problems you may be having.';
                        reachout['provider_call'] = true;
                        reachout['provider_email'] = false;
                        reachout['coach_email'] = false;
                    }               
                } else if (sleepDurationList[0] == 2) {
                    if (sleepDurationFourMoreSevere == 4) { // High Risk-Sleep More-Mail (16)
                        reachout['reachout_code'] = 16;
                        reachout['message'] = 'Looks like you have been sleeping too much. This could put you at risk for symptoms. Call your psychiatrist to discuss any problems you may be having.';
                        reachout['provider_call'] = true;
                        reachout['provider_email'] = true;
                        reachout['coach_email'] = true;
                    } else if (sleepDurationFourMoreSevere == 3) { // High Risk-Sleep More-Call (17)
                        reachout['reachout_code'] = 17;
                        reachout['message'] = 'Looks like you have been sleeping more than usual. This could put you at risk for symptoms. Call your psychiatrist to discuss any problems you may be having.';
                        reachout['provider_call'] = true;
                        reachout['provider_email'] = false;
                        reachout['coach_email'] = false;
                    }               
                }
            }
        }
        
        // Notification / pop-ups:
        // 1-8: always show pop-up
        // 9:  Only show if show(9) < 3 in the last week.
        // 10: Only show if show(10) < 3 in the last week.
        // 11: Only show if show(9, 10, 11) < 3 in the last week.
        // 12: Only show if show(12) < 3 in the last week.
        // 13: Only show if show(12, 13) < 3 in the last week.
        // 14: Only show if show(14) < 3 in the last week.
        // 15: Only show if show(14, 15) < 3 in the last week.
        // 16: Only show if show(16) < 3 in the last week.
        // 17: Only show if show(16, 17) < 3 in the last week.
        
        if (reachout['reachout_code'] > 0 && reachout['reachout_code'] <= 8) {
            reachout['notify'] = true;
        } else if (reachout['reachout_code'] >= 9) {
        	var counts = [];
        	
        	for (var i = 0; i <= 18; i++) {
        		counts.push(0);
        	}
        	
        	for (var i = 0; i < reachoutList.length && i < notifyList.length; i++) {
        		if (notifyList[i]) {
        			counts[reachoutList[i]] += 1;
        		}
        	}
        	
        	if (reachout['reachout_code'] == 9 && counts[9] < 3) {
				reachout['notify'] = true;
			} else if (reachout['reachout_code'] == 10 && counts[10] < 3) {
				reachout['notify'] = true;
			} else if (reachout['reachout_code'] == 11 && (counts[9] + counts[10] + counts[11]) < 3) {
				reachout['notify'] = true;
			} else if (reachout['reachout_code'] == 12 && counts[12] < 3) {
				reachout['notify'] = true;
			} else if (reachout['reachout_code'] == 13 && (counts[12] + counts[13]) < 3) {
				reachout['notify'] = true;
			} else if (reachout['reachout_code'] == 14 && counts[14] < 3) {
				reachout['notify'] = true;
			} else if (reachout['reachout_code'] == 15 && (counts[14] + counts[15]) < 3) {
				reachout['notify'] = true;
			} else if (reachout['reachout_code'] == 16 && counts[16] < 3) {
				reachout['notify'] = true;
			} else if (reachout['reachout_code'] == 17 && (counts[16] + counts[17]) < 3) {
				reachout['notify'] = true;
        	}
        }
        
        callback(reachout);
    };

    database.updateDailyReview = function(callback) {
		var codes = [];

        database.filter('clinical_status', 'updated', IDBKeyRange.lowerBound(0), "prev", function(cursor) {
            if (cursor && codes.length < 2) {
                codes.push(parseInt(cursor.value.status_code));
                cursor.continue();
            } else {
                var currentStatusCode = codes[1];

                var sleepRoutineRanges = UserData.query('sleepRoutineRanges');

                var bedTimeStart = parseInt(sleepRoutineRanges.BedTimeStrt_MT);
                var bedTimeStop = parseInt(sleepRoutineRanges.BedTimeStop_MT);
                var riseTimeStart = parseInt(sleepRoutineRanges.RiseTimeStrt_MT);
                var riseTimeStop = parseInt(sleepRoutineRanges.RiseTimeStop_MT);

                if (bedTimeStart > bedTimeStop) {
                    bedTimeStop = bedTimeStop + 2400;
                }
        
                if (riseTimeStart > riseTimeStop) {
                    riseTimeStop = riseTimeStop + 2400;
                }

                var dailyWellnesses = [];
                var dailyMedications = [];
                var dailySleepDurations = [];
                var dailySleepRoutines = [];
                
                database.filter('daily_check_in', 'created', IDBKeyRange.lowerBound(0), "prev", function(cursor) {
                    if (cursor && dailyWellnesses.length < 4) {
                        dailyWellnesses.push(parseInt("" + cursor.value.wellness));
                        
                        dailyMedications.push(parseInt("" + cursor.value.medications));

                        var duration = parseInt("" + cursor.value.sleepDuration);

                        if (duration <= sleepRoutineRanges.LessSevere) {
                            dailySleepDurations.push(-2);
                        } else if (duration < sleepRoutineRanges.Less && duration >= sleepRoutineRanges.LessSevere) {
                            dailySleepDurations.push(1);
                        } else if (duration >= sleepRoutineRanges.Less && duration <= sleepRoutineRanges.More) {
                            dailySleepDurations.push(0);
                        } else if (duration > sleepRoutineRanges.More && duration <= sleepRoutineRanges.MoreSevere) {
                            dailySleepDurations.push(1);
                        } else if (duration >= sleepRoutineRanges.MoreSevere) {
                            dailySleepDurations.push(2);
                        }
                        
                        var windowsHit = 0;
                        
                        var toBed = parseInt("" + cursor.value.toBed);
                        var gotUp = parseInt("" + cursor.value.gotUp);
                        
                        if (gotUp < riseTimeStart) {
                            gotUp = gotUp + 2400;
                        }

                        if (toBed < bedTimeStart) {
                            toBed = toBed + 2400;
                        }

                        if (gotUp >= riseTimeStart && gotUp <= riseTimeStop) {
                            windowsHit += 1;
                        }

                        if (toBed >= bedTimeStart && toBed <= bedTimeStop) {
                            windowsHit += 1;
                        }
                        
                        dailySleepRoutines.push(windowsHit);
                        
                        cursor.continue();
                    } else {
                        while (dailyWellnesses.length < 4) {
                            dailyWellnesses.push(0);
                        }

                        while (dailyMedications.length < 4) {
                            dailyMedications.push(2);
                        }

                        while (dailySleepDurations.length < 4) {
                            dailySleepDurations.push(0);
                        }

                        while (dailySleepRoutines.length < 4) {
                            dailySleepRoutines.push(2);
                        }

                        database.filter('daily_review', 'started', IDBKeyRange.lowerBound(0), "prev", function(cursor) {
                            var lastCode = 26; 
                            
                            if (cursor) {
                                lastCode = cursor.value.finalCode;
                            }
                            
                            var dbObject = {
                                started: Date.now(),
                                userStarted: true,
                                initialCode: lastCode,
                                finalCode: 26 // Staying Well (26)
                            };
                            
                            if (dailyWellnesses[0] == 4) { // Crisis-Up (1)
                                dbObject['finalCode'] = 1;
                            } else if (dailyWellnesses[0] == -4) { // Crisis-Down (2)
                                dbObject['finalCode'] = 2;
                            } else if (currentStatusCode == 4) {
                                if (dailyWellnesses[0] == 3) { // Episode-Continuing-Up (3)
                                    dbObject['finalCode'] = 3;
                                } else if (dailyWellnesses[0] == -3) { // Episode-Continuing-Down (4)
                                    dbObject['finalCode'] = 4;
                                } else if (dailyWellnesses[0] == 2) { // Episode-Improving-Up (5)
                                    dbObject['finalCode'] = 5;
                                } else if (dailyWellnesses[0] == -2) { // Episode-Improving-Down (6)
                                    dbObject['finalCode'] = 6;
                                } else if (Math.abs(dailyWellnesses[0]) <= 1) { // Episode-Improving-Balanced (7)
                                    dbObject['finalCode'] = 7;
                                } 
                            } else {
                                if (dailyWellnesses[0] == 3) { // Worsening Symptoms-Up (8)
                                    dbObject['finalCode'] = 8;
                                } else if (dailyWellnesses[0] == -3) { // Worsening Symptoms-Down (9)
                                    dbObject['finalCode'] = 9;
                                } else if (currentStatusCode == 3 && dailyWellnesses[0] == 2) { // Recovering-Continuing-Up (10)
                                    dbObject['finalCode'] = 10;
                                } else if (currentStatusCode == 3 && dailyWellnesses[0] == -2) { // Recovering-Continuing-Down (11)
                                    dbObject['finalCode'] = 11;
                                } else if (currentStatusCode == 2 && dailyWellnesses[0] == 2) { // Prodormal-Continuing-Up (12)
                                    dbObject['finalCode'] = 12;
                                } else if (currentStatusCode == 2 && dailyWellnesses[0] == -2) { // Prodormal-Continuing-Down (13)
                                    dbObject['finalCode'] = 13;
                                } else if (currentStatusCode == 3 && Math.abs(dailyWellnesses[0]) <= 1) { // Recovering-Improving-Balanced (14)
                                    dbObject['finalCode'] = 14;
                                } else if (currentStatusCode == 2 && Math.abs(dailyWellnesses[0]) <= 1) { // Prodormal-Improving-Balanced (15)
                                    dbObject['finalCode'] = 15;
                                } else if (currentStatusCode == 1 && dailyWellnesses[0] == 2) { // Early Warning Signs-Up (16)
                                    dbObject['finalCode'] = 16;
                                } else if (currentStatusCode == 1 && dailyWellnesses[0] == -2) { // Early Warning Signs-Down (17)
                                    dbObject['finalCode'] = 17;
                                } else if (currentStatusCode == 1 && Math.abs(dailyWellnesses[0]) <= 1) {
                                    var medicationsPastFourAll = 0;
                                    
                                    for (var i = 0; i < dailyMedications.length; i++) {
                                        if (dailyMedications[i] == 2) {
                                            medicationsPastFourAll += 1;
                                        }
                                    }
                                    
                                    if (dailyMedications[0] < 2 && medicationsPastFourAll <= 1) { // High Risk-Medication Adherence (18)
                                        dbObject['finalCode'] = 18;
                                    } else {
                                        var moreSevere = 0;
                                        var more = 0;
                                        var baseline = 0;
                                        var less = 0;
                                        var lessSevere = 0;
                                        
                                        for (var i = 0; i < dailySleepDurations.length; i++) {
                                            switch (dailySleepDurations[i]) {
                                                case -2:
                                                    lessSevere += 1;
                                                    break;
                                                case -1:
                                                    less += 1;
                                                    break;
                                                case 0:
                                                    baseline += 1;
                                                    break;
                                                case 1:
                                                    more += 1;
                                                    break;
                                                case 2:
                                                    moreSevere += 1;
                                                    break;
                                            }
                                        }
                                        
                                        if (dailySleepDurations[0] == -2 && lessSevere >= 2) { // High Risk-Sleeping Too Little (19)
                                            dbObject['finalCode'] = 19;
                                        } else if (dailySleepDurations[0] == 2 && moreSevere >= 3) { // High Risk-Sleeping Too Much (20)
                                            dbObject['finalCode'] = 20;
                                        } else if (dailyMedications[0] < 2) { // Moderate Risk-Medication Adherence (21)
                                            dbObject['finalCode'] = 21;
                                        } else if (dailyMedications[0] == 2) {
                                            if (dailySleepDurations[0] < 0 && (lessSevere + less >= 2) && (moreSevere + more) <= 1) { // Moderate Risk-Sleeping Too Little (22)
                                                dbObject['finalCode'] = 22;
                                            } else if (dailySleepDurations[0] > 0 && (lessSevere + less) <= 1 && (moreSevere + more) >= 2) { // Moderate Risk-Sleeping Too Much (23)
                                                dbObject['finalCode'] = 23;
                                            } else if (dailySleepDurations[0] != 0 && baseline <= 2) { // Moderate Risk-Sleeping Erratically (24)
                                                dbObject['finalCode'] = 24;
                                            } else {
                                                var windowSum = 0;
                                                
                                                for (var i = 0; i < dailySleepRoutines.length; i++) {
                                                    windowSum += dailySleepRoutines[i];
                                                }

                                                if (dailySleepRoutines[0] < 2 && windowSum <= 5) { // Moderate Risk-Irregular Routine (25)
                                                    dbObject['finalCode'] = 25;
                                                }
                                            }
                                        }
                                    }
                                }
                            }

							(new PurpleRobot()).emitReading('livewell_app_expert_system_daily_review', {
								review_code: dbObject['finalCode']
							}).execute();
                            
                            database.insertWithCallback('daily_review', dbObject, function() {
                                callback(dbObject['finalCode']);
                            });
                        }, function () {
                            console.log('DATABASE: Unable to fetch last daily review to update daily review...');
                        });
                    }
                }, function() {
                    console.log('DATABASE: Unable to fetch last daily check-ins to update daily review...');
                });
            }
        }, function() {
            console.log('DATABASE: Unable to fetch clinical status to update daily review...');
        });
    };

    return database;
});
