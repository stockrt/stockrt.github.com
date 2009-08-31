---
layout: post
title: git branch in your shell prompt
tags: [git, en-US]
---
Every time (every few minutes?) I was looking at my git versioned projects
(all my projects?) I encounter myself in doubt:

Am I at the branch I think I am?

And there was I, issuing a "git branch" command to check it...

That is enough! I said.

Looking at the [github guides](http://github.com/guides) I found [this tip](http://github.com/guides/put-your-git-branch-name-in-your-shell-prompt)
very interesting, so I decided to bettered it, and to publish as a tip here.

It will show in your prompt which is your current branch, when your current
work directory is a git initialized one.

To use it, just place this line inside your ~/.bashrc or into
/etc/profile.d/git-branch.sh or /etc/bashrc or even /etc/profile, the choice
is yours:

    # git branch
    parse_git_branch() {
        git branch 2> /dev/null | sed -e '/^[^*]/d' -e 's/* \(.*\)/(\1) /'
    }
    PS1="\$(parse_git_branch)$PS1"

This will give you a prompt like this one:

    stockrt@jackbauer ~ $ cd Dropbox/stockrt/git/stockrt.github.com
    (master) stockrt@jackbauer ~/Dropbox/stockrt/git/stockrt.github.com $

Here you can see a "normal" prompt and then, when I enter one of my git
versioned directories, a "git branchned" prompt.

Way cool.
