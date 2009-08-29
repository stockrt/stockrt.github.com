---
layout: post
title: sed quick tips
tags: [linux, en-US]
---
## The basic one, substitution
You already know this one:

    sed -i 's/old text/new text/g' file.txt

## Deleting all lines containing an specific text

    sed -i -e '/this line will disapear/d' file.txt

## Deleting blank lines

    sed -i -e '/^$/d' file.txt

## Filtering text between delimiters
All matching text into the first defined group "()" will be printed:

    curl -s -L http://www.terra.com.br | sed -n -e 's#.*\(http://.*\.\(js\|css\)\).*#\1#p'

## Printing only from a given line number to another
Prints from line 20 to line 30:

    sed -n 20,30p file.txt

Do you know some trick that is worth sharing? Please post it as a comment!
