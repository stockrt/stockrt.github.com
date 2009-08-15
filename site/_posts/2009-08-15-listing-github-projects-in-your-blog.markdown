---
layout: post
title: Listing GitHub projects in your blog
tags: [github, en-US]
---
So I needed to list my GitHub projects in a fancy way in my blog, in the
sidebar, all dynamically done. So, I searched a little around and found how.
There are two major badges to do it, here I will describe them:

## Dr Nic's github-badges
This is my choice. [drnic's github-badges](http://drnic.github.com/github-badges)
is flexible on configuration and also have some code of myself in it.
Here is how to configure it:

    <div id="github-badge"></div>
    <script type="text/javascript" charset="utf-8">
      GITHUB_USERNAME="stockrt";
    </script>
    <script src="http://drnic.github.com/github-badges/dist/github-badge-launcher.js" type="text/javascript"></script>

This is the complete list of options available:

    GITHUB_USERNAME = "stockrt";
    GITHUB_LIST_LENGTH = 10;
    GITHUB_HEAD = "div"; // e.g. change to "h2" for wordpress sidebars
    GITHUB_THEME = "white"; // try 'black'
    GITHUB_TITLE = "My projects";
    GITHUB_SHOW_ALL = "Show all";
    GITHUB_SHOW_FORK = 1;

## subtleGradient's mootools-github-badge:
This is also pretty neat, [subtleGradient's mootools-github-badge](http://github.com/subtleGradient/mootools-github-badge)
has a great visual effect when it is building the project's list, using a
delayed composal. See this [running example](http://subtlegradient.github.com/mootools-github-badge).
Here is how to configure it:

    <div id="github-badge"></div>
    <script src="http://ajax.googleapis.com/ajax/libs/mootools/1.2.1/mootools.js" type="text/javascript"> </script>
    <script src="http://projects.subtlegradient.com/mootools-subtle-templates/Source/Plugins/SubtleTemplate.js" type="text/javascript"> </script>
    <script src="http://subtlegradient.github.com/mootools-github-badge/mootools-github-badge.js" type="text/javascript"> </script>
    <script type="text/javascript" charset="utf-8">
      new SubtleTemplate.GitHubBadge.Basic({ username:'stockrt' });
    </script>

## Using jekyll and scribbish from [stockrt's site source](http://github.com/stockrt/stockrt.github.com/tree/master/site)
If you are using my template to generated a [scribbish styled static site with
jekyll](http://stockrt.github.com/p/iniciando-um-blog-no-github), all you need
to do to activate the use of drnic's github-badge is to configure this
parameters in config.yml:

    github_badge:
        enable: true
        username: stockrt
        length: 8
        head: div
        #head: h2
        theme: white
        #theme: black
        title: My Projects
        showall: Show all
        showfork: 0
        #showfork: 1
