# DESCRIÇÃO DA ATIVIDADE: 

Esta é a atividade relacionada ao dia 3 da sprint 3 de QA da Compass.uol e nela irei escrever uma User Story fictícia para a API ServeRest, levantando DoR e DoD além de critérios de aceite feitos juntamente com cenários baseados na técnica BDD (Behavior Driven Development).

## User Story:

**Como:** Vendedor
**Eu Quero:** Visualizar os produtos da loja
**Para:** Ver sua quantidade em estoque **e** Editar a quantidade dos produtos que eu possuir na loja

## DoR:

- A API deve estar disponibilizada

- O Ambiente de testes deve estar disponibilizado

- O vendedor deve estar cadastrado como administrador

- A loja deve possuir produtos cadastrados 

- O vendedor deve possuir produtos já cadastrados na loja

## DoD:

- Teste de login de usuário como administrador;

- Teste de produto do usuário excluído a quando não á mais quantidade nenhuma dele;

- Teste de produto do usuário com quantidade atualizada;

- Teste de produto de outro usuário com quantidade visualizada;

- Projeto do Jira sobre os testes criado, com quatro Kanban;

- Eventual bug ou melhoria descrito com resumo, resultado esperado, resultado obtido, passos para reprodução e nível de severidade, todos descritos no Jira.

## Accpectance Criteria

- O vendedor não deve editar a quantidade de produtos que não forem seus

- A quantidade de produtos devem ser editadas diretamente no campo que as exibe, alterando o valor numérico disposto no mesmo campo;

- Se o vendedor editar a quantidade de um produto para 0 o produto deve ser excluído do banco de dados da loja;

- O vendedor não deve poder editar nada além da quantidade de produtos que ele mesmo cadastrou;

- O vendedor não pode deixar o campo de quantidade de produtos em branco;

- Os testes devem estar documentados e conter evidências;

- A cobertura de testes deve se basear no Swagger da API e ir além, cobrindo cenários alternativos;

- Os testes, e seus respectivos bugs e melhorias, devem ser feitos no Postman e documentados e evidenciados no Jira.

## Cenários

***Cenário 1:***

- Logar no front da API como administrador;

- Clicar no menu "Produtos Cadastrados";

- Após obter uma lista de produtos e suas quantidades, procurar e encontrar os seus próprios produtos;

- Escolher um produto próprio;

- Alterar a quantidade do produto, para um número que não seja 0, diretamente no campo de quantidade do produto;

- Apertar Enter e esperar que a seção atualize o valor novo apareça automaticamente.

***Cenário 2:***

- Logar no front da API como administrador;

- Clicar no menu "Produtos Cadastrados";

- Após obter uma lista de produtos e suas quantidades, procurar e encontrar os seus próprios produtos;

- Escolher um produto próprio;

- Alterar a quantidade do produto, para 0, diretamente no campo de quantidade do produto;

- Apertar Enter e esperar que a seção atualize e o produto não esteja mais à mostra.

***Cenário 3:***

- Logar no front da API como administrador;

- Clicar no menu "Produtos Cadastrados";

- Após obter uma lista de produtos e suas quantidades, procurar e encontrar qualquer produto listado que não seja o próprio;

- Escolher um produto que não seja o próprio;

- Tentar alterar a quantidade do produto;

- Apertar Enter e esperar que a seção atualize e nada esteja alterado.

***Cenário 4:***

- Logar no front da API como administrador;

- Clicar no menu "Produtos Cadastrados";

- Após obter uma lista de produtos e suas quantidades, procurar e encontrar qualquer produto listado;

- Escolher um produto listado;

- Tentar alterar outras informações que não seja a quantidade de produtos;

- Apertar Enter e esperar que a seção atualize e nada esteja alterado.

***Cenário 5:***

- Logar no front da API como administrador;

- Clicar no menu "Produtos Cadastrados";

- Após obter uma lista de produtos e suas quantidades, procurar e encontrar os seus próprios produtos;

- Escolher um produto próprio;

- Alterar a quantidade do produto, deixando em branco, diretamente no campo de quantidade do produto;

- Apertar Enter e esperar que a seção atualize e nada esteja alterado.