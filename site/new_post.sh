#!/bin/bash

if [[ ! -n $1 ]]
then
    echo "Usage: $0 \"Post Title\""
    exit 1
fi

D=$(date +"%Y-%m-%d")
T=$(sed 's/ /-/g' <<< $1)

echo '---
layout: post
tags: [github, pt-br]
---
your text here' >> "_posts/${D}-${T}.markdown"
echo "\"_posts/${D}-${T}.markdown\" created"
