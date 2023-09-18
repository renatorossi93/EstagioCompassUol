# PLANO DE TESTES DO CHALLENGE DA SPRINT 3 

## RESUMO:

Foi requisitado pelo PO um planejamento de testes em uma seção de produtos e de login de uma APIRest chamada ServeRest. Cabe ao QA planejar e executar todos os testes relacionados possíveis e solicitados.

## Pessoas Envolvidas (StakeHolders):

Apenas o testador (QA) e o avaliador dos testes estarão envolvidos, em um primeiro momento, neste projeto.

## Funcionalidades ou Módulos a serem testados:

Serão testados os módulos de Login e Produtos da API em um primeiro momento.

## Local dos testes:

Os testes serão realizados na residência do testador (QA) em modelo Home-Office.

## Recursos e Ferramentas necessárias:

- Conexão com Internet;
- Computador ou aparelho similar;
- API designada;
- Softwares de planejamento de teste, tais como: Jira e GitLab;
- Softwares de execução de teste, tais como: Postman.

## Critérios Usados:

- Crie requisições Get, Post, Put e Delete para validar o retorno das rotas da API;

- Crie cenários de testes abrangendo as User Stories, bem como suas DoR, DoD e Acceptance Criterias;

- Crie cenários de testes alternativos relacionados às histórias de usuário;

- Crie um ou vários mapas mentais relacionados a este plano de tetes;

- Crie testes por meio de requisições através do Postman;

- Catalogue e documente os testes no Jira Software utilizando o auxílio do plugin QAlity.

## Riscos:

Caso o testador não possa realizar suas atividades, seja por quaisquer motivos, é necessário que o avaliador (Rafael Vescio) saiba disso o quanto antes para que seja definido o que fazer em seguida.
A interpretação dos dados e criação do relatório é uma tarefa do testador (QA). Caso essa tarefa seja atribuída erroneamente a qualquer outra pessoa, é necessário que o avaliador (Rafael Vescio) saiba disso o quanto antes para que seja definido o que fazer em seguida.

## Como os resultados do teste serão divulgados:

Os resultados dos testes, junto a todas as informações requisitadas sobre seu planejamento e execução, devem ser apresentados em cerca de 3 minutos durante o challenge da sprint 3, conforme definido e avisado pelo organizador e Scrum Master Rafael Vescio.

## Cronograma:

O cronograma de planejamento e execução de testes deve seguir o cronograma da sprint 3, com duração de 10 dias.

## Suíte e Casos de teste:

### Testes de Validação das Rotas da API:

***[API]LOGIN***

- Realizar Login;
- Email e/ou Senha Inválidos.

***[API]Produtos***

- Lista de Produtos;
- Produto Encontrado;
- Produto não encontrado;
- Cadastro de Produto;
- Cadastro com Sucesso por GET;
- Já Existe Produto com este Nome;
- Token Ausente, Inválido ou Expirado (POST,PUT,DELETE);
- Rota Exclusiva para Administradores (POST,PUT,DELETE);
- Edição de Produto;
- Produto Alterado com Sucesso;
- Produto Cadastrado com Sucesso por PUT;
- Exclusão de Produto;
- Produto Excluído com Sucesso;
- Nenhum Produto Excluído;
- Produto faz parte de Carrinho.

### Testes de Histórias de Usuários:

***[API]Login***

- Autenticação com Token Bearer;
- Validade do Token Bearer deve ser de até 10 minutos;
- Tentativa de autenticação com usuários não cadastrados;
- Tentativa de autenticação com usuários com senha inválida;
- Retorno de Status Code 401 - Unauthorized em caso de não autenticação;
- Autenticação com sucesso de usuários cadastrados corretamente;
- Evidenciar os testes;
- Cenários alternativos de testes;
- Automação de testes.

***[API]Produtos***

- Tentativa de cadastrar produtos com nomes já existentes;
- Tentativa de excluir produtos que estejam dentro de carrinhos;
- Cadastro de um novo produto usando PUT na tentativa de editar um produto com ID de produto que não esteja cadastrada ainda;
- Tentativa de cadastrar um novo produto usando PUT com nome já existente;
- Evidenciar os testes;
- Cenários alternativos de testes;
- Automação de testes.

### Cenários Alternativos de testes:

***[API]Login***

- tentativa de login e autenticação com usuário com administrador = false;

***[API]Produtos***

- Cadastro de produto com sucesso;
- Tentativa de cadastro de produto sem preço;
- Tentativa de cadastro de produto sem nome;
- Tentativa de cadastro de produto  sem quantidade;
- Tentativa de cadastro de produto com nome, preço e/ou quantidade utilizando caracteres especiais;

**CICLO DE TESTE DE USUÁRIO**

- 1 Login com autenticação,
- 2 Cadastro de produto,
- 3 Listagem de produto,
- 4 Alteração de preço de produto,
- 5 Exclusão de produto.

## Testes Candidatos à Automação:

- Login com autenticação,
- Cadastro de produto,
- Listagem de produto,
- Alteração de preço de produto,
- Exclusão de produto.


## OBSERVAÇÃO:

***TODOS OS TESTES PODEM SER ACOMPANHADOS E VISTOS NO PROJETO DO JIRA QACOMPASS USANDO O SEGUINTE LINK:*** https://renatorossi93.atlassian.net/jira/software/projects/QAC/boards/5/timeline