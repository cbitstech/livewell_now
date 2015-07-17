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
cp -r dist/* cordova/www/
cd cordova
cordova build android --release
cd platforms/android/ant-build

jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore LiveWell.keystore CordovaApp-release-unsigned.apk LiveWell

echo 'type the keystore password'

zipalign -f -v 4 CordovaApp-release-unsigned.apk LiveWell.apk

cd ..
cd ..
cd ..
cd ..
