---
layout: post
title: Iniciando um blog no GitHub
tags: [github, pt-br]
---
Use jekyll, facilita a sua vida.

Estou usando o GitHub para hospedar meu blog/site, mas como ele não oferece
nenhuma engine dinâmica de blog, tipo wordpress ou alguma outra feita em php,
python, ruby..., estou gerando o site estaticamente e depois faço o upload
para o GitHub. Uso jekyll para gerar o site, criar as co-relações entre posts,
fazer a formatação, paginação, lista de tags, links e blogroll.

Jekyll é muito legal, vale a pena dar uma olhada. Com esse modelo de geração
estática é possível se fazer posts com apenas alguns passos:

    cd yournickname.github.com/site
    ./new_post.sh "Nome do post"
    vi _posts/$(date +"%Y-%m-%d")-nome-do-post.markdown
    ./build.sh; cd ..
    git add .
    git commit -a -m 'New blog post'
    git push origin master

Eu gosto dessa forma de "bloggar" pois assim evito de entrar em editores HTML
ou páginas web lentas. Faço tudo daqui do meu shell mesmo, onde me sinto mais
à vontade :)

A formatação dos textos é feita usando
[markdown](http://daringfireball.net/projects/markdown/syntax), bem mais fácil
do que HTML para postar da forma como escolhi, pelo shell.

Recomendo ler um pequeno texto que fiz informando sobre como usar o template
para jekyll que eu modifiquei:

[http://github.com/stockrt/stockrt.github.com/tree/master](http://github.com/stockrt/stockrt.github.com/tree/master)

Outra dica: No link [Projects](http://stockrt.github.com/projects) ao lado
você poderá encontrar algo útil. Se sim, me avisa.
