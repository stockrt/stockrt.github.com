#!/bin/bash

if [[ ! -n $1 ]]
then
    echo "Usage: $0 \"Post title\""
    exit 1
fi

WD=$(basename $(pwd))
if [[ "$WD" != "site" ]]
then
    echo "You must be in the \"site\" directory to run $0"
    exit 1
fi

D=$(date +"%Y-%m-%d")
To="$1"
Tl=$(echo $To | sed 's/ /-/g' | tr '[A-Z]' '[a-z]')
P="_posts/${D}-${Tl}.markdown"

if [[ -e "$P" ]]
then
    echo "Already exists: \"$P\" _not_ created"
    exit 1
fi

echo "---
layout: post
title: $To
tags: [github, pt-br]
---
your text here" >> "$P"
echo "Created: \"$P\""
