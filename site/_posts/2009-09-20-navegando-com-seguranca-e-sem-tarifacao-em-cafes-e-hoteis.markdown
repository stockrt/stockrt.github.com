---
layout: post
title: Navegando com seguranca e sem tarifacao em cafes e hoteis
tags: [linux, misc, pt-BR]
keywords: linux, shell, ssh, encryption, tunnel, proxy
published: true
---
Quando estiver pensando em se hospedar em um hotel, ou utilizar redes de
cafés, pergunte primeiro o quanto custa o minuto ou diária de acesso à
internet.

Normalmente o custo é alto. Se este for o caso, opte pela conexão tarifada
por minuto, e use o seguinte truque para economizar alguns trocados:

1. Logue no sistema do hotel normalmente, optanto pela menor tarifa para
pouco tempo de utilização;
2. Execute um dos comandos abaixo, ssh ou putty;
3. Faça logoff do sistema de tarifação;
4. Configure seu browser e demais aplicativos para usar proxy SOCKS 5 na
porta local escolhida.

### Usando linux
Se estiver usando linux no seu notebook, você poderá fazer o seguinte:

    ssh -D 9999 user@servidor

### Usando windows
Se estiver no windows, utilize o putty:

    putty.exe -D 9999 user@servidor

Nota: Você precisa, claro, ter um "servidor" rodando um sshd e uma conta nele :)
Talvez o seu linux que fica rodando no desktop, em casa? Ou aquele
servidor da faculdade/trabalho?

Outra dica é configurar o putty para manter a sessão sempre aberta, com
keepalive (Category / Connection / Seconds between keepalives / 5) ou manter
a sessão ativa deixando um comando qualquer rodando no shell, que gere
tráfego no terminal:

    while true; do date; sleep 5; done

### Depois de criado o proxy dinâmico
Agora você pode fazer logoff do sistema de internet tarifado e então apontar
o firefox, ou qualquer outra aplicação (uma nova sessão de ssh, por exemplo),
para o proxy dinâmico local, que agora ouve na porta local 9999.

[Outros](http://vectrosecurity.com/content/view/67/26) [posts](http://www.nardol.org/2009/3/9/maceio-took-some-days-off)
também descrevem essa técnica.

Com essas medidas você pode economizar no acesso, além de garantir uma
navegação muito mais segura na internet, pois tudo será tunelado e codificado
pelo ssh.

Enjoy the hacking.
