---
layout: post
title: Traduzindo com pytranslate diretamente do Google
tags: [python, pt-BR]
keywords: pytranslate, python, google
published: true
---
Resolvi traduzir alguns textos em lote, e para isso utilizei esse módulo
chamado pytranslate.

Ele é um wrapper para o Google Translate e permite que você traduza textos com
facilidade. O retorno dele sempre será a sentença completa (frase) traduzida.

### Utilização:

    import translate

    print translate.translate('hello', sl='english', tl='portuguese')
    print translate.translate('hello', sl='auto', tl='portuguese')
    print translate.translate('hallo', sl='auto', tl='portuguese')
    print translate.translate('hallo', sl='auto', tl='french')
    print translate.translate('Bonjour', sl='auto', tl='dutch')

### A instalação é simples:

    wget http://github.com/stockrt/pytranslate/tarball/master -O pytranslate.tar.gz
    tar xzvf pytranslate.tar.gz
    cd stockrt-pytranslate*
    ./setup.py install

Você pode obter o código dele [aqui](http://github.com/stockrt/pytranslate)
