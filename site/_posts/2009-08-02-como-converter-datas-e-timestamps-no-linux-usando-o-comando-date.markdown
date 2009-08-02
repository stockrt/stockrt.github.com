---
layout: post
tags: [linux, pt-br]
---
## Para converter datas no shell do linux, podemos usar:

### Timestamp (seconds from the Epoch) da data atual
    $ date +"%s"
    1249184050

### Timestamp para uma determinada data
    $ date -d '2009-07-31 12:00:01' +"%s"
    1249052401

### Data a partir de um determinado timestamp
    $ python -c "import time; print time.ctime(1249052401)"
    Fri Jul 31 12:00:01 2009
