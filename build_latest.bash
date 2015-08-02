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
