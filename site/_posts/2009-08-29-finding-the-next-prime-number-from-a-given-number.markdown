---
layout: post
title: Finding the next prime number from a given number
tags: [linux, en-US]
---
Finding the next prime number online is useful if you do not have time to
calculate it but need a good seed for your hash.

    export start_number=250000
    curl -s "http://www.numberempire.com/primenumbers.php?action=next&number=${start_number}" | sed -n -e 's#.*The smallest prime greater than.*<font color=.*>\(.*\)</font></div></td></tr><tr>.*#\1#p'

This can be good the help you finding which number to use when
[tuning](http://varnish.projects.linpro.no/wiki/Performance)
[Varnish](http://varnish.projects.linpro.no) for better
[performance](http://varnish.projects.linpro.no/wiki/Performance) with the
classic hash algorithm, avoiding bucket collision when having a big number of
objects, making hash lookups faster.
