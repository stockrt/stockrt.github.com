#!/bin/bash

BD=$(dirname $0)
D=$(date +"%Y-%m-%d")

cd $BD
egrep '^published: false$' _posts/${D}* > /dev/null 2>&1 \
    && export PUB=1 \
    || export PUB=0
if [[ "$PUB" == 1 ]]
then
    sed -i -e '/^published: false$/d' _posts/${D}*
    ./build.sh ok
    cd ..
    git add .
    git commit -a -m 'Publishing new posts for today'
    git push origin master
fi
