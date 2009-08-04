---
layout: post
title: Como converter datas e timestamps no linux usando o comando date
tags: [linux, pt-br]
---
Se você chegou até aqui, anote esta dica.

Uma hora ou outra a gente sempre chega neste problema: Converter datas com
timestamp, seja de timestamp para string ou o contrário.

Pois ai vai a dica para converter datas no Linux:

### String da data atual
    $ date
    Sun Aug  2 03:13:19 2009

### Timestamp (seconds from the Epoch) da data atual
    $ date +"%s"
    1249193599

### Timestamp de uma determinada string de data
    $ date -d '2009-07-31 12:00:01' +"%s"
    1249052401

### String de data a partir de um determinado timestamp
    $ python -c "import time; print time.ctime(1249052401)"
    Fri Jul 31 12:00:01 2009
