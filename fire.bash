#! /bin/bash

clear

echo "building distribution directory"
grunt build

wait

echo 'Completed building distribution folder'
echo 'Starting server'

cp app/styles/bootstrap.min.css dist/styles
cp app/images/logo.png dist/images

cd dist
firebase init
firebase deploy

echo 'done building and deploying to firebase'