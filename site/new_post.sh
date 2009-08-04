#!/bin/bash

if [[ ! -n $1 ]]
then
    echo "Usage: $0 \"Post title\""
    exit 1
fi

D=$(date +"%Y-%m-%d")
To=$1
Tl=$(echo $To | sed 's/ /-/g' | tr '[A-Z]' '[a-z]')

if [[ -e "_posts/${D}-${Tl}.markdown" ]]
then
    echo "ERR: Post \"_posts/${D}-${Tl}.markdown\" already exists"
    exit 1
fi

echo "---
layout: post
title: $To
tags: [github, pt-br]
---
your text here" >> "_posts/${D}-${Tl}.markdown"
echo "Post \"_posts/${D}-${Tl}.markdown\" created"
