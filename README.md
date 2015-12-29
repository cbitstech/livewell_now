livewell_now
============

Build and Install Process
-------------------------
1. Install Node.JS from http://nodejs.org/download/
2. Clone the repo
3. Run `npm install`
4. Run `npm install grunt-cli yo angular-generator`
5. Run `bower install`
6. Run `. build_local.bash` to serve locally
7. Run `. build_dist.bash` to make a distributable version, zip the "dist" folder and update to the build.phonegap.com site previously configured


To seed the application:
------------------------
1. Visit the `/localStorageBackupRestore` route in the application
2. Copy and paste the contents of the `backup` file from the root of this repository into the text box
3. Restore using the restore button
