#!/bin/bash

BD=$(dirname $0)
D=$(date +"%Y-%m-%d")

cd $BD
sed -i -e '/^published: false$/d' _posts/${D}*
./build.sh ok
cd ..
git add .
git commit -a -m 'Publishing new posts for today'
git push origin master
