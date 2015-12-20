#! /bin/bash

clear

echo "building distribution directory"
./node_modules/grunt-cli/bin/grunt build --force

wait

echo 'Completed building distribution folder'
echo 'Starting server'

cp app/styles/bootstrap.min.css dist/styles
cp app/images/logo.png dist/images

# mkdir dist/scripts/vendor
# cp app/scripts/vendor/cordova.js dist/scripts/vendor/cordova.js
# cp app/scripts/vendor/cordova.android.js dist/scripts/vendor/cordova.android.js

rm -rf cordova/www
mkdir cordova/www
cp -r dist/* cordova/www/