#!/bin/bash

#rm -rf ../blog/*
#jekyll ../blog
jekyll ../
mv ../atom.html ../atom.xml
rm -f ../build.sh
