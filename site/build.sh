#!/bin/bash

WD=$(basename $(pwd))
if [[ "$WD" != "site" ]]
then
    echo "You must be in the \"site\" directory to run $0"
    exit 1
fi

FROM_SITE=$(find . -maxdepth 1 -mindepth 1 | cut -d/ -f2-)
for E in $FROM_SITE
do
    echo "About to delete: ../$E"
done
echo "About to delete: ../*.sh"
echo "About to move: ../atom.html to ../atom.xml"
echo "Continue? (enter)"
read x

for E in $FROM_SITE
do
    rm -rf ../$E
done
rm -rf ../p ../page[0-9]*

jekyll ../

mv ../atom.html ../atom.xml
rm -f ../*.sh
