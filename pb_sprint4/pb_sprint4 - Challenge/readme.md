## Challenge da Sprint 4

**Necessário:**

- Exercícios de JS, Mocha e Chai;
- User stories da rota /Carrinhos;
- Plano de testes da rota /Carrinhos;
- Resumo sobre Testes Exploratórios em formato .md para apresentação;
- Aplicar conhecimento de testes exploratórios nos endpoints analisados durante as sprints anteriores (sprints 2 e 3) e na sprint atual (sprint 4), obviamente;
- Testes realizados no Postman, com automação de preferência utilizando mocha e chai e testes catalogados e documentados no Jira.

**Recomendado:**

- Boa organização de pastas e arquivos e código;
- Métodos robustos na classe Calculadora.js;
- Arquivos de  teste com testes eficientes;
- Nome das variáveis e métodos;
- Informar as referências, seja da internet, da ajuda de um colega ou mesmo da utilização de uma IA.

# PLANO DE TESTES DA SPRINT 4!

**Este é o plano de testes da rota /carrinhos da API REST ServeRest**

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

### Cenários de teste:

**CT01:** 
Dado: que eu esteja logado e autenticado corretamente
Quando: eu estiver consultando os carrinhos já montados no postman
Então: a requisição deve me retornar uma lista de carrinhos com as informações dos produtos de cada carrinho (idProduto, quantidade, precoUnitário, precoTotal, quantidadeTotal) e com a ID de cada usuário usuário que montou um carrinho (idUsuario) além do ID de cada carrinho (id).
Status: Passou?/Falhou?/Bloqueado?

**CT02:** 
Dado: que eu esteja logado e autenticado corretamente
Quando: eu estiver montando um carrinho para mim
Então: o carrinho que eu estou montando deve estar vinculado  eu ID do usuário que estiver logado.
Status:

**CT03:** 
Dado: que eu esteja logado e autenticado corretamente
Quando: eu estiver tentando montar um segundo carrinho
Então: o teste deverá me dar uma negativa, me impedindo de finalizar o cadastro de um novo carrinho e me informando que deve haver apenas 1 carrinho por usuário.
Status: 

**CT04:** 
Dado: que eu esteja logado e autenticado e tenha cadastrado um carrinho com produtos dentro
Quando: eu estiver consuntando a lista de produtos
Então: a lista deve me mostrar que os produtos adicionados ao carrinho devem estar com a quantidade reduzida baseada na quantidade de produtos que foi adicionada ao carrinho
Status:

**CT05:** 
Dado: que eu esteja logado e autenticado 
Quando:  eu estiver buscando um carrinho montado em específico por ID
Então: o teste deve me retornar o carrinho o qual eu especifiquei pela ID
Status:

**CT06:**
Dado: que eu, enquanto logado e autenticado, tenha montado um carrinho
Quando: quando eu completar a compra dos produtos do carrinho
Então: o carrinho deverá ser excluído do banco de dados da API
Status:

**CT07:**
Dado: que eu esteja logado e autenticado
Quando: eu concluir a compra dos produtos do carrinho e ele estiver sido  excluído
Então: o carrinho excluído deverá estar vinculado ao usuário do token utilizado.
Status:

**CT08:**
Dado: que eu, logado e autenticado,  tenha montado um carrinho
Quando: eu cancelar a compra do carrinho
Então: o carrinho deverá ser excluído  
Status:

**CT09:**
Dado: que eu, logado e autenticado e com carrinho já montado
Quando: cancelar a compra do carrinho e ele for excluído
Então: os produtos que estavam listados no carrinho deverão ter sua quantidade retornada ao valor que era antes dos produtos serem adicionados ao carrinho.
Status:

**CT10:**
Dado: que eu, logado e autenticado, e com o carrinho já montado e com sua compra cancelada
Quando: tiver excluído o carrinho por ter cancelado a compra
Então: o carrinho excluído deverá também estar vinculado ao usuário do token utilizado
Status:

### Cenários Alternativos de testes:

**CA01:**
Dado:
Quando: 
Então:
Status:

**CA02:**
Dado:
Quando: 
Então:
Status:

**CA03:**
Dado:
Quando: 
Então:
Status:

**CA04:**
Dado:
Quando: 
Então:
Status:

**CA05:**
Dado:
Quando: 
Então:
Status:

### Automação de Testes:



### Observação:


