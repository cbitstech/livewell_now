#! /bin/bash

clear

echo "building distribution directory"
grunt build --force

wait

echo 'Completed building distribution folder'

cp app/styles/bootstrap.min.css dist/styles
cp app/images/logo.png dist/images

rm -rf cordova/www
mkdir cordova/www
cp -r dist/* cordova/www/
 
cd cordova

./../node_modules/cordova/bin/cordova build android 
cd ..

echo 'App built '