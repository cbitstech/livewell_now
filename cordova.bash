#! /bin/bash

clear

echo "building distribution directory"
grunt build

wait

echo 'Completed building distribution folder'
echo 'Starting server'

cp app/styles/bootstrap.min.css dist/styles
cp app/images/logo.png dist/images

rm -rf cordova/www
mkdir cordova/www
cp dist/. cordova/www/
cd cordova
cordova run android
cd ..

echo 'done building and deploying to phone'