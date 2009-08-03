#!/bin/bash

FROM_SITE=$(find . -maxdepth 1 -mindepth 1 | cut -d/ -f2-)
for E in $FROM_SITE
do
    rm -rf ../$E
done
rm -rf ../p ../page[0-9]*

jekyll ../
mv ../atom.html ../atom.xml
rm -f ../*.sh
