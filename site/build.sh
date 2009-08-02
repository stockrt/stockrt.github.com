#!/bin/bash

rm -rf ../p ../page[0-9]* ../tags
jekyll ../
mv ../atom.html ../atom.xml
rm -f ../*.sh
