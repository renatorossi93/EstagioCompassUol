# Plano de testes Atualizado com Testes de Performance

### RESUMO:

Foi requisitado pelo PO um planejamento de testes em uma rota de Carrinhos de uma APIRest chamada ServeRest. Cabe ao QA planejar e executar todos os testes relacionados possíveis e solicitados e também planejar, desenvolver e executar novos testes.

### Pessoas Envolvidas (StakeHolders):

Apenas o testador (QA) e o avaliador dos testes estarão envolvidos, em um primeiro momento, neste projeto.

Funcionalidades ou Módulos a serem testados:
Será testado a rota de Carrinho da API em um primeiro momento.

### Local dos testes:

Os testes serão realizados na residência do testador (QA) em modelo Home-Office.

### Recursos e Ferramentas necessárias:

Conexão com Internet;
Computador ou aparelho similar;
API designada;
Softwares de planejamento de teste, tais como: Jira e GitLab;
Softwares de execução de teste, tais como: Postman, NoneJS, Mocha e Chai.

### Critérios Usados:

Crie requisições (Get, Post, Put e Delete) para validar o retorno da rota da API;


Crie uma User Story da rota de carrinho e desenvolva cenários de testes abrangendo essa User Story, bem como sua DoR, DoD e Acceptance Criteria;


Crie cenários de testes alternativos relacionados à história de usuário;


Crie um mapa mental relacionado a este plano de tetes;


Crie testes por meio de requisições através do Postman;

Automatize os testes no Postman usando JS, Mocha e Chai;

Catalogue e documente os testes no Jira Software utilizando o auxílio do plugin QAlity.

### Riscos:

Caso o testador não possa realizar suas atividades, seja por quaisquer motivos, é necessário que o avaliador (Rafael Vescio) saiba disso o quanto antes para que seja definido o que fazer em seguida.

A interpretação dos dados e criação do relatório é uma tarefa do testador(QA). 

Caso essa tarefa seja atribuída erroneamente a qualquer outra pessoa, é necessário que o avaliador (Rafael Vescio) saiba disso o quanto antes para que seja definido o que fazer em seguida.

### Como os resultados do teste serão divulgados:

Os resultados dos testes, junto a todas as informações requisitadas sobre seu planejamento e execução, devem ser apresentados em cerca de 3 minutos durante o challenge da sprint 4, conforme definido e avisado pelo organizador e Scrum Master Rafael Vescio.

### Cronograma:

O cronograma de planejamento e execução de testes deve seguir o cronograma da sprint 4, com duração de 10 dias úteis.

# USER STORY

***US 004: [API] CARRINHO***

**Como:** Como um cliente de uma loja com cadastro já realizado e com login já autenticado...

**Quero:** ...Quero poder visualizar carrinhos montados, criar um carrinho para mim e excluir o meu carrinho...

**Para:** ...Para efetuar ou não a compra dos produtos do carrinho.

**DoR:** 
- Banco de dados e infraestrutura para desenvolvimento disponibilizados;
- API de usuários implementada;
- API de login implementada;
- API de produtos implementada;
- Ambiente de testes disponibilizado.

**DoD:**
- CRUD da rota de carrinhos implementado (Listar, Cadastrar, Buscar carrinho por ID, Excluir carrinho e Excluir carrinho e retornar produtos para estoque);
- Plano e análise de  testes cobrindo a rota de carrinhos;
- Automação de testes baseado na análise realizada; 

**Acceptance Criteria:**
- Carrinhos retornados devem ser únicos por usuário;
- O carrinho deve ser vinculado ao usuário do token enviado no header *Authorization*;
- Deve ser possível cadastrar apenas 1 carrinho por usuário;
- Ao cadastrar carrinho com sucesso deve ser feito a redução da quantidade no cadastro de cada produto inserido no carrinho;
- Deve ser possível buscar um carrinho por ID;
- Deve ser possível excluir carrinho ao concluir a compra;
- O carrinho excluído deverá estar vinculado ao usuário do *token* utilizado;
- Deverá ser possível excluir carrinho ao cancelar a compra;
- O estoque de produtos de um carrinho excluído ao cancelar a compra deverá ser reabastecido;
- O carrinho excluído ao cancelar a compra também deverá estar vinculado ao usuário do *token* utilizado.

### CT - Cenários de teste:

***LC - LISTA DE CARRINHOS***
**LC-CT01: LISTAR CARRINHOS** 
Dado: que eu esteja logado
Quando: eu estiver requisitando uma lista de todos os carrinhos cadastrados
Então: a API deve me retornar um status [200] com uma listas de todos os carrinhos cadastrados no momento com as informações: quantidade(de carrinhos no total), carrinhos, produtos, idProduto, quantidade(daquele produto), precoUnitario, precoTotal, quantidadeTotal, idUsuario e id(de cada carrinho).

***CC - CADASTRO DE CARRINHOS***
**CC-CT01: CADASTRAR CARRINHO COM SUCESSO** 
Dado: que eu esteja logado e autenticado corretamente
Quando:eu  estiver cadastrando um carrinho pela primeira vez
Então: a API deve me retornar um status [201] e uma mensagem de cadastro bem sucedido junto com uma id do carrinho criado.

**CC-CT02: CADASTRAR UM SEGUNDO CARRINHO** 
Dado: que eu esteja logado e autenticado corretamente
Quando: eu estiver cadastrando um carrinho pela segunda vez com o primeiro ainda aberto
Então: a API deve me retornar uma negativa de status [400] com uma mensagem de que não é permitido ter mais de 1 carrinho 

**CC-CT03: CADASTRAR UM CARRINHO COM PRODUTO INEXISTENTE** 
Dado: que eu esteja logado e autenticado corretamente
Quando: eu estiver cadastrando um carrinho com um produto inexistente
Então: a API deve me retornar uma negativa de status [400] com uma mensagem de produto não encontrado.

**CC-CT04: CADASTRAR UM CARRINHO COM PRODUTO COM QUANTIDADE MAIOR DO QUE O DISPONÍVEL** 
Dado: que eu esteja logado e autenticado corretamente
Quando: eu estiver cadastrando um carrinho com um produto incluso em que a quantidade adicionada ao carrinho seja maior do que a quantidade disponível do produto
Então: a API deve me retornar uma negativa de status [400] com uma mensagem de produto não possui quantidade suficiente.

**CC-CT05: CADASTRAR UM CARRINHO COM PRODUTO DUPLICADO** 
Dado: que eu esteja logado e autenticado corretamente
Quando: eu estiver cadastrando um carrinho com produto duplicado, ou seja, duas vezes o mesmo produto adicionado
Então: a API deve me retornar uma negativa de status [400] com uma mensagem de que não é possível ter um produto duplicado.

**CC-CT06: CADASTRAR UM CARRINHO APÓS TER PASSADO MAIS DE 10 MINUTOS AUTENTICADO** 
Dado: que eu esteja logado e autenticado corretamente
Quando: eu estiver cadastrando um carrinho após ter logado e autenticado há mais de 10 minutos
Então: a API deve me retornar uma negativa de status [401] com uma mensagem de token ausente, inválido ou expirado.

**CC-CT07: PRODUTOS ADICIONADOS AO CARRINHO DIMINUÍRAM QUANTIDADE** 
Dado: que eu esteja logado
Quando: eu tiver cadastrado um carrinho com produtos dentro
Então: os produtos do carrinho deverão ter sua quantidade diminuída na lista de produtos de acordo com a quantidade adicionada ao carrinho previamente cadastrado.

***BC - BUSCA DE CARRINHO POR ID***
**BC-CT01: LISTAR CARRINHO POR ID COM SUCESSO** 
Dado: que eu esteja logado e com um carrinho cadastrado
Quando: eu estiver buscando especificamente por este carrinho cadastrado através da ID dele
Então: a API deve me retornar um status [200] com informações do carrinho em questão, sendo elas: produtos, idProduto, quantidade(do produto), precoUnitario, precoTotal, quantidadeTotal, idUsuario e id(do carrinho).

**BC-CT02: LISTAR CARRINHO POR ID COM CARRINHO NÃO ENCONTRADO** 
Dado: que eu esteja logado e com um carrinho cadastrado
Quando: eu estiver buscando especificamente por este carrinho cadastrado através da ID inexistente
Então: a API deve me retornar um status [400] com uma mensagem de que o carrinho não foi encontrado.

**BC-CT03: LISTAR CARRINHO POR ID COM UMA ID DE UM CARRINHO JÁ EXCLUÍDO** 
Dado: que eu esteja logado e com um carrinho cadastrado
Quando: eu estiver buscando por carrinho cadastrado através da ID dele só que após este carrinho já tiver sido excluído
Então: a API deve me retornar um status [400] com uma mensagem de carrinho não encontrado.

***EC - EXCLUSÃO DE CARRINHO***
**EC-CT01: EXCLUIR CARRINHO AO CONCLUIR COMPRA COM SUCESSO**
Dado: que eu, enquanto logado e autenticado, tenha montado um carrinho
Quando: eu tiver concluído a compra dos produtos do carrinho
Então: a API deve excluir o carrinho e me retornar um status [200] com a mensagem de registro excluído com sucesso.

**EC-CT02: EXCLUIR CARRINHO AO CONCLUIR COMPRA APÓS ESPERAR MAIS DE 10 MINUTOS**
Dado: que eu, enquanto logado e autenticado, tenha montado um carrinho
Quando: eu estiver tentando concluir a compra e excluir o carrinho,após 10 minutos de ter montado o carrinho
Então: a API deve me retornar um status [401] com uma mensagem de token de acesso ausente, inválido ou expirado.

**EC-CT03: EXCLUIR CARRINHO AO CANCELAR COMPRA COM SUCESSO**
Dado: que eu, logado e autenticado,  tenha montado um carrinho
Quando: eu tiver cancelado a compra dos produtos do carrinho
Então: a API deve excluir o carrinho e me retornar um status [200] com a mensagem de registro excluído com sucesso.

**EC-CT04: EXCLUIR CARRINHO AO CANCELAR COMPRA APÓS MAIS DE 10 MINUTOS**
Dado: que eu, logado e autenticado,  tenha montado um carrinho
Quando: eu tiver cancelado a compra dos produtos do carrinho após ter se passado mais de 10 minutos do cadastro do carrinho
Então: a API deve retornar um status code [401] com a mensagem de token de acesso ausente, inválido ou expirado.

**EC-CT05: PRODUTOS RETORNADOS AO EXCLUIR CARRINHO CANCELANDO A COMPRA**
Dado: que eu, logado e com carrinho já montado
Quando: eu tiver cancelado a compra dos produtos do carrinho e o mesmo estiver excluído
Então: a API deve retornar as quantidades, antes cadastradas no carrinho, de volta aos seus produtos listados na rota de produtos da API.

**EC-CT06: PRODUTOS COM QUANTIDADE MENOR AO EXCLUIR CARRINHO CONCLUINDO A COMPRA**
Dado: que eu, logado e com carrinho já montado
Quando: eu tiver concluído a compra do carrinho e o mesmo estiver excluído
Então: a API não deve retornar as quantidades, antes cadastradas no carrinho, de volta aos seus produtos listados na rota de produtos da API.

### Automação dos Testes:

Foram formados scripts de automação para todos os Cenários de testes, sendo eles:

*para tempo de resposta menor que 250ms:*

pm.test("Tempo de resposta menor que 250ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(250);
});

*para validar se o corpo da resposta é um JSON:*

pm.test("Corpo da resposta é um JSON", function () {
    pm.expect(pm.response).to.be.json;
});

*para validar se a requisição em questão foi bem ou mal sucedida:*

//Exemplo em questão é um get bem sucedido, mas o script foi alterado para também validar POST e Delete, tanto bem quanto mal sucedidos.

pm.test("GET bem sucedido", function () {
    pm.expect(pm.response.code).to.be.equal(200);
});

*parar validar se o corpo da resposta contém a string, ou seja, a mensagem esperada:*

//Exemplo em questão é para validar se a mensagem esperada é de um cadastro realizado com sucesso.

pm.test("Corpo contém string", function () {
    pm.expect(pm.response.text()).to.include("Cadastro realizado com sucesso");
});

### Observações:

Para esta Challenge obtive ajudas, sendo elas:
 
- Com problema de gitignore de **Marcelo** e **Raphael**;

- Com ideias de testes para calculadora.js de **Marcelo**;

- Com ideias para cenários de testes da challenge de **Marcelo** e **Alisson**;

- Com automação de token de autorização de **Raphael**;

-  Com ajuda de comando para calcular raiz quadrada usando JS com [pesquisa do Google](https://www.google.com/search?q=como+calcular+de+forma+simples+a+raiz+quadrada+com+JS%3F&sca_esv=569245889&sxsrf=AM9HkKkaf6fD7IBJGiNE0_-oo6wT_G5Oeg%3A1695930045150&ei=vdYVZdbYCKPm1sQPgMmQiAE&ved=0ahUKEwiWq57fh86BAxUjs5UCHYAkBBEQ4dUDCBA&uact=5&oq=como+calcular+de+forma+simples+a+raiz+quadrada+com+JS%3F&gs_lp=Egxnd3Mtd2l6LXNlcnAiNmNvbW8gY2FsY3VsYXIgZGUgZm9ybWEgc2ltcGxlcyBhIHJhaXogcXVhZHJhZGEgY29tIEpTPzIFECEYoAEyCBAhGBYYHhgdSIFHUIsIWLlFcAR4AZABAZgB3gGgAc8sqgEGMC4zOC4xuAEDyAEA-AEBwgIHECMYsAMYJ8ICChAAGEcY1gQYsAPCAgQQIxgnwgIHECMYigUYJ8ICDRAAGIoFGLEDGIMBGEPCAgcQABiKBRhDwgILEC4YgAQYsQMYgwHCAhEQLhiABBixAxiDARjHARjRA8ICCxAAGIAEGLEDGIMBwgIHEC4YigUYJ8ICBxAuGIoFGEPCAgoQLhiKBRixAxhDwgIFEAAYgATCAggQABiKBRiSA8ICDhAAGIAEGLEDGIMBGMkDwgILEAAYigUYsQMYgwHCAggQABiABBixA8ICBhAAGBYYHuIDBBgAIEGIBgGQBgk&sclient=gws-wiz-serp);

- Com ajuda sobre ideias de cenários de testes com [Na prática - Como criar cenários de testes? Dia a dia de um Analista de testes/QA](https://www.youtube.com/watch?v=d3L78k3drkY).

- E com ajuda sobre automação de testes no postman com a *seção 5 - Escrevendo testes no Postman* do curso da Udemy chamado [Automação de testes de API com Postman + Projeto de testes](https://compassuol.udemy.com/course/automacao-de-testes-de-api-com-postman-projeto-de-testes/learn/lecture/21146240#overview).



## CASOS DE TESTES DE PERFORMANCE (CTP):

***CTP-01***
Dado: que eu tenha todas as rotas de testes configuradas no JMeter
Quando: eu for testar as rotas
Então: o tempo limite de resposta deve sempre ser de até 200ms

***CTP-02***
Dado: que eu tenha todas as rotas de testes configuradas no JMeter
Quando: eu for testar o pico de usuários simuntâneos na API
Então: é esperado que as rotas aguentem entre 500 e 800 usuários sem apresentar problemas

***CTP-03***
Dado: que eu tenha as rotas de testes configuradas no JMeter
Quando: eu estiver testando a carga de cadastros de usuários
Então: a API deve ser capaz de processar pelo menos 100 cadastros simultâneos por segundo

***CTP-04***
Dado: que eu tenha as rotas de testes configuradas no JMeter
Quando: eu estiver testando a carga de registros de itens em carrinho
Então: a API deve ser capaz de registrar ao menos 100 solicitações por segundo

***CTP-05***
Dado: que eu tenha as rotas de testes configuradas no JMeter
Quando: eu estiver testando a carga de requisições de finalizações de compra
Então: a API deve ser capaz de processar ao menos 100 finalizações por segundo

***CTP-06***
Dado: que eu tenha as rotas de testes configuradas no JMeter
Quando: eu estiver testando a carga de requisições de finalizações de compra
Então: o tempo limite de retorno da requisição de sucesso ao finalziar uma compra deve ser de até 350ms

***CTP-07***
Dado: que eu tenha as rotas de testes configuradas no JMeter
Quando: eu estiver testando a performance das rotas da API
Então: a latência que deve ser adotada como referência é a informação que consta na coluna 90% line e não a média, pois, é um parâmetro que melhor ajuda a analisar o tempo de latência das requisições.


*OBS: Com os testes de performance, obtive auxílio dos colegas Paulo e Raphael.*