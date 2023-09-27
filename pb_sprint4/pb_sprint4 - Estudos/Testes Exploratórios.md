# RESUMO
***AQUI ESTÁ UM RESUMO DOS ESTUDOS SOBRE O CURSO DE TESTES EXPLORATÓRIOS DA UDEMY, MINISTRADA PELO PROFESSOR WAGNER COSTA, ORGANIZADO E RESUMIDO POR TÓPICOS OU ASSUNTOS***

## Automação vs Manual

- Testes manuais são lentos.

- Testes automatizados dão mais segurança e autonomia.

**Pirâmide de testes**

[Piramide de testes](assets/piramidedetestes.jpeg)

Na piramide de testes os testes manuais ficam em cima como uma nuvem pois é abstrato você saber o que você precisa para executar estes testes.


*"Se os testes forem julgados pela quantidade de vezes que são realizados, automação ganhará sempre. Se o julgamento for baseado na qualidade dos testes executados, os manuais levam alguma vantagem."* -James Wittaker

## Roteiros vs Exploratórios

- Testes baseados em roteiros também são conhecidos como "Scripted Tests".

**Testes Baseados em roteiros:**

- Executado seguindo um roteiro

- Os passos são bem definidos

- A fase deplanejamento se dá na criação dos roteiros, não durante a execução do teste.

- Leva o tempo necessário para executar todos os passos

- Previne erros

- Pode ser automatizado

- Como resultado final temos "Sucesso" ou "Falha"

**Testes Exploratórios:**

- Executado de acordo com o propósito definido

- Apenas um direcionamento inicial

- O Planejamento se dá durante a execução do teste

- Possui um limite de tempo pré-determinado

- Encontra erros

- Não pode ser automatizado (ainda)

- Como resultado final, temos:
  "Sucesso" ou "Falha";
  Dúvidas e observações Realizadas;
  Mais entendimento e ideias para outras execuções.


## Automação é nossa amiga

A automação pode facilitar a sua vida para que você possa focar em outras funcionabilidades ou outras partes do software ou até mesmo a testr outras coisas.

A automação é muito boa também para lidar com gerenciamento de massa de dados e testes de massa de dados.

*"Use automação para as atividades que o computador é bom (Tarefas repetitivas) e use humanos para o que nós somos bons(ver, pensar e lidar com o inesperado)."* -Lisa Crispim

## Gerenciamento de massa de dados

Entrada + Ação = Resultado

*Obs: Temos o resultado esperado e o resultado obtido*

É preciso levar em consideração o ambiente em que a Entrada + Ação se encontram.

Então, quando estamos lidando com gerenciamento de massa de dados temos que, além de garantir que o teste tenha uma entrada e uma ação para assegurar um resultado que esteja de acordo com o que estamos esperando, também temos que garantir que o ambiente esteja de acordo com o que estamos esperando para o teste em específico.

## Quando Parar?

Alguns fatores que possam te ajudar a saber quando é o momento de parar de testar:

- Deadlines

- Fim dos Recursos

- Cobertura de testes atingir a meta

- Quando a taxa de erros reduzir até um determinado patamar(seria o ideal)

- Fases Alpha / Beta / RC (Release Candidate)


Nossos testes são limitados por 3 características:

- Tempo
- Dinheiro
- Qualidade

Precisamos sempre escolher 2 dessas. Nunca dá para garantir os 3, um sempre será sacrificado.

Infelizmente o que mais acontece é que devemos testar  em um determinado tempo, com uma determinada quantidade de dinheiro disponível, o que nos faz sacrificar a qualidade do software.

*Mas, sempre que puder, foque na qualidade!*

*"A meta é chegar ao ponto em que tudo que não foi feito é menos importante do que as coisas que foram feitas."* -James A. Whittaker

## Por onde começar?

Cada aplicação necessita de algo específico. 

*obs: uma boa dica é começar mensurando os riscos para a aplicação funcionar, ou seja, imaginar e testar os cenários necessários que garantem que a aplicação cumpra o seu objetivo*

## Planejamento de testes

- Planeje antecipadamente

- Caso de teste

- O que, como, por que?(Histórias de usuário)

- Crie sessões com tempo pré-determinado

- Evite distrações

## Freestyle Testing

Neste tipo de teste não seguimos regras e padrões.

Ele serve para explorar a aplicação com navegação livre para descobrir as suas principais funcionalidades e o fluxo básico do sistema.

É o tipo de teste que se usa quando se está sendo apresentado pela primeira vez a uma aplicação. Fora isso, não se recomenda usar muito esta técnica.

## Estratégia baseada em cenários

Esta estratégia de testes se basea em fluxos de uso de um usuário e então estipulamos testes baseados nesses fluxos e os chamamos de cenários de testes.

É uma técnica simples mas poderosa.

## Estratégia baseada em Feedback

Essa estratégia serve para te ajudar a descobrir pontos da aplicação em que você poderá trabalhar.

- Densidade de Erros Reportados;
- Priorização do especialista;
- Criticidade de cenários;
- Cobertura.

## Estratégia baseada em Técnicas

Há cenários de testes que podemos criar baseados em algumas técnicas. Veremos essas técnicas a seguir.

*"Testar é selecionar um conjunto infinito de cenários que representem um conjunto infinito de possibilidades"* -Autor Desconhecido

## Técnica de Classe de equivalência

Essa técnica é uma das mais famosas, a ideia dela é reduzir um numero infinito de possibilidades a um conjunto finito e selecionado para que este conjunto represente essas infinitas possibilidades.

## Técnica de Valor Limite