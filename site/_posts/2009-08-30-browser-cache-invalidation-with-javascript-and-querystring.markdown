---
layout: post
title: Browser cache invalidation with Javascript and querystring
tags: [cache, github, en-US]
published: false
---
Some time ago I started my blog here at github and noticed that new posts
didn't come live right way I published them.
Quickly I spot the problem: They are sending
[HTTP](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.21) Cache Headers for the
index.html and all pages served by github, a 24 hour cache.

# The problem

    $ curl -I http://stockrt.github.com

    HTTP/1.1 200 OK
    Server: nginx/0.6.31
    Date: Sat, 22 Aug 2009 01:36:49 GMT
    Content-Type: text/html
    Content-Length: 66829
    Last-Modified: Sat, 22 Aug 2009 01:12:50 GMT
    Connection: keep-alive
    Expires: Sun, 23 Aug 2009 01:36:49 GMT
    Cache-Control: max-age=86400
    Accept-Ranges: bytes

So, to overcome this "problem" I made this tiny trick, and published it to
others to take advantage of it, in case your are hosting your pages behind an
web server with
[Expires](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.21) configured.

# The trick
Go and clone
[cache_invalidation](http://github.com/stockrt/cache_invalidation) and start
using the provided javascripts in your site, this way:

    <html>

    <head>
     <script src="http://your_site/javascripts/querystring.js" type="text/javascript"></script>
     <script src="http://your_site/javascripts/cache_invalidation.js" type="text/javascript"></script>
    </head>

    <body>
    </body>

    </html>

Set the desired TTL inside de cache_invalidation.js file:

    // TTL: set your cache threshold here
    var ttl = 300;  // seconds

And it is all set.

# But, why does it happen, and how it works?

It does happen because their web server ([the great nginx](http://nginx.net/))
is configured with what we used to call
[mod_expires](http://httpd.apache.org/docs/2.2/mod/mod_expires.html) in [Apache](http://httpd.apache.org). This module
activates the
[HTTP](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.21) Cache Header
[Expires](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.21).
If you look at the response headers I got before, you would see:

    Date: Sat, 22 Aug 2009 01:36:49 GMT
    Expires: Sun, 23 Aug 2009 01:36:49 GMT

and:

    Cache-Control: max-age=86400

Notice that:

    $ bc <<< 86400/3600
    24

They are saying to my browser that it should use the local copy, for the next
24 hours, when accessing this site. More precisely, when accessing index.html
of this site.
I think that, for a blog, this is a pretty big time to update the user's cache.
This cache header means that if a reader accessed you site just before your
posted something, and returned to your site after you posted, he would not see
any difference. He would only notice your new post the next day.

But, you can bypass that, just passing any query string within the site's
address to the navigation bar in your browser.
This tricks the browser to go in the source and to fetch the page, instead of
using a local copy. It would only use a local copy if you have no query string
or if you have already cached that url with that query string (say, in a
second time you visit the same query string).
Just because the browser would cache the same query string in a second access,
I made the script to vary it on each access, and also it forces a refresh when
accessing a querystring that is TTL seconds older than the current time, even
if it is already cached from a previous access, say, when clicking a bookmark.
As a front end engineer I am, I only pray to my web developer colleagues don't
find this post, ever :)
