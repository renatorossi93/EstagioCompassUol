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

A teoria para essa regra é que o maior ponto onde a gente terá problemas é nessa fronteira de valor limite.

## Transição de Estados

Essa técnica serve para tentarmos entender que ação leva a determinado estado.

## Tabela de Decisão

A tabela de decisão vai ajudar a gente quando a gente quiser combinar várias regras em um ponto só, ou seja, combinar as regras e, a partir das possibilidades que podem acontecer com elas, a gente mapeia os resultados.

existem ferramentas para tabela de decisão caso essas regras combinadas se tornem muito grandes.

## Array Ortogonal (PairWise)

Quando a quantidade de valores de variáveis de uma tabela de decisão ficar muito grande, podemos tentar diminuí-la usando Pairwise ou Array Ortogonal. 

Pairwise parte da premissa que boa parte dos erros surgem a partir de uma só variável ou dos pares de relacionamento entre elas, ou seja, de uma combinação de variáveis.

Por isso essa tecnica surge buscando dar o mínimo de cenários a serem testados mas cobrindo o máximo possível de possibilidades de erros.

## Personas

Persona é uma ferramente que vai te ajudar a conscientemente adotar hábitos e pensamentos de outras pessoas.

Uma estratégia interessante seria tentar mapear o tipo de usuário que a aplicação vai possuir, o perfil desses usuários e, a partir daí, criar uma persona para cada um desses tipos e então começar a pensar como que cada um desses tipos iria utilizar a aplicação.

Como criar uma persona:

- Dar um nome de fácil relação com o perfil;
- Criar um breve background;
- Levantar um conjunto de características;
- Anexar uma fotografia ajuda a fixar melhor;
- Mapear os hábitos e necessidades da persona e como ela poderia interagir com o sistema.

### Exemplo de Persona 01

- Lee Trabalho Duro;

- Filho de pai coreano com mãe brasileira que vive no brasil e fez curso de datilografia, windows word e excel;

- Lee é muito bom de digitação, recebe por produtividade e cada segundo para ele é uma oportunidade de ganhar dinheiro;

- (fotografia aleatória de um asiático típico que represente o Lee);

- Lee sempre vai procurar o caminho mais curto para finalizar uma tarefa, seja utilizando atalhos, como teclas de atalhos de uma ferramenta, preenchendo formulários apenas com o mínimo necessário de informações. Por causa de tais hábitos, Lee as vezes comete erros triviais como esquecer de preencher algum campo ou preencher algo sem levar muito em consideração a máscara, colocar um campo errado que era um telefone mas colocar o cep e, também, Lee fica impaciente se a aplicação não responder rápido, inclusive fazendo novas requisições.

### Exemplo de Persona 02

- Francisco Hipster

- Francisco gosta de ser diferente de todos, quando algo que ele goste entra na moda ele abandona de imediato. Frequenta lugares assim que inauguram pois ainda são desconhecidos para depois falar que já foi melhor;

- (Fotografia de um homem barbudo com roupas xadrez e touca);

- Ele vai começar a utilizar novas funcionalidades assim que estão disponíveis e também vai explorar todos os caminhos de um fluxo só para decidir qual é o predileto. Ele frequentemente usa áreas da aplicação que não são populares. Ele também vai oferecer dados de entrada diferentes de outros usuários e também vai acessar a aplicação de algum browser ou sistema operacional pouco popular.

### Exemplo de Persona 03

- Valentina Zennial 

- Valentina é uma jovem da geração Z que nasceu no mundo digital então  tem facilidade com tudo relacionado a isto e prefere que as coisas sejam rápidas e ágeis, Valentina não vai perder mais de 5 minutos em alguma coisa;

- (fotografia de uma adolescente com cabelo colorido, piercing em algum luga do rosto e roupas largas e espalhafatosas);

- Valentina vai se interessar pelos recursos mais visuais da aplicação; vai querer que qualquer formulário que tenha que preencher tenha opções mais diversificadas como opção de identidades fluidas e não binárias; Ela por ser nativa digital, vai aprender as funcionalidades da aplicação muito mais rápido e, devido a isso, espera que as funcionalidades acompanhem o ritmo dela, respondendo-a rapidamente e de maneira fluida. Valentina se entedia facilmente se tem que lidar com partes da aplicação que não são visualmente complexas e interessantes e que não sejam instanâneas e/ou rápidas e ágeis.

## Soap Opera Testing

Soap Opera testing é sobre criar cenários de testes como se fossem novelas (soap operas) ou seja, com várias situações conectadas umas as outras de maneiras inesperadas e que não estejam exatamente em ordem cronológica direta.

*"Assim como novelas, esses testes são exagerados em termos de atividades e condensados em termos de tempo"* -Hans Buwalda

Então nesta técnica nós vamos tentar criar uma linha narrativa que vai exercitar o máximo de fluxos possíveis.

Dicas para testes de Soap Opera

- Testes devem ser engraçados porém agressivos;
- Escreva cenários improváveis mas possíveis;
- Escreva cenários exagerados e condensados;
- Possui fase de design e execução separadas.

*"Um cliente, chamado Marick, aluga um carro para uma viagem de três dias. Durante o Aluguel, ele pede para estender o prazo de entrega em mais uma semana (Essa ação rende para ele vários pontos de fidelidade que levam ele para o nível de cliente VIP). Alguns dias depois, ele liga para informar que o carro foi roubado. Ele insiste que é cliente VIP (mesmo não sendo no momento do aluguel e solicita um dos venefícios de sua nova categoria, que é um carro reserva). Um carro reserva é entrege para ele. Dois dias depois, ele liga para informar que o carro roubado foi encontrado. Na verdade, ele apenas tinha esquecido o local onde o carro estava estacionado. Então ele solicitou que um dos carros fossem recolhidos. Só mais um detalhe: A forma que ele encontrou o primeiro carro foi durante uma manobra no mesmo estacionamento, onde ele acabou batendo no primeiro carro."* -Brian Marick

## Turismo

No livro "Exploratoy Software Testing" o autor: James A. Whittaker compara testes exploratórios a viagens.

Segundo o autor, testes exploratórios sem uma boa estratégia é como um turista vagando pela cidade atrás de boas atrações.

As técnicas são baseadas no conceito de "Tours" e, generalizando, procusa-se aconselhar testadores a explorar uma aplicação da mesma forma como um guia turístico cria roteiros para os turistas conhecerem.

Neste paralelo, James A Whittakerdivide a "cidade" que a gente vai visitar, ou seja, os testes exploratórios, em cinco regiões:

- Business District;
- Historical District;
- Entertainment District;
- Tourist District;
- Hotel District.

### Business District

Esse distrito seria a região da aplicação onde o dinheiro realmente corre.

Então nessa região nós temos 6 tipos de rotas:

- **Guidebook Tour:** Nos testes, um ótimo guia é o manual da aplicação. Quando o manual descreve uma funcionalidade e como ela deve funcionar o testador já sabe exatamente o que testar e como a aplicação deve se comportar. Defeitos encontrados nessa rota geralmente possuem prioridade alta para correção porém normalmente são os caminhos cobertos por automação.

- **Money Tour:** Nos testes, a gente precisa tentar identificar a razão principal pelo qual os usuários utilizam a aplicação, porque se esta funcionalidade principal parar de funcionar, ninguém mais via querer utilizar a aplicação, então seguir o caminho do dinheiro é uma forma de garantir que o coração da aplicação está funcionando.

- **Landmark Tour:** Nos testes escolha pontos da aplicação que você deseja visitar e monte uma rota que passe por todos eles. Mantenha um registro dos pontos visitados para ter uma noção de quais já foram cobertos por esse passeio. Aqui a gente pode até casar esses testes com a técnica de Soap Opera.

- **FedEx Tour:** Nos testes, considere os pacotes do FedEx(correios) como dados da aplicação, então vamos tentar identificar entradas que são armazenadas no sistema e procure segui-las pelo software. Por exemplo: Quando o endereço é fornecido em um formulário de compras, o mesmo deve estar correto nos dados de entrega, no endereço de cobrança, nos relatórios... Enfim, em todo ponto que precisar do endereço.

- **After-Hours Tour:** Nos testes, nos horários em que as funcionalidades não são utilizadas em larga escala, algumas outras funcionalidades podem ser acionadas. Aqui neste ponto podemos tentar executar tarefas "beta" que são agendadas para rodar durante a noite ou fazer backup e arquivamento, etc. Depende do que a aplicação precisa e se ela tem realmente esse tipo de necessidade. Outro ponto, també, é que você pode encontrar alguns problemas somente durante a noite por questão de fuso horário, por exemplo.

- **Garbage Collector's Tour:** Nos testes, quando queremos verificar as interfaces, nós visitamos tela por tela, mensagem por mensagem, assim como  um coletor. Sempre buscando a menor rota possível e nunca parando em algum outro detalhe do teste. Outro ponto é que, por esse cenário de teste ser muito geral, esse tipo de teste geralmente também vem atrelado a alguma meta específica, tipo: olhar todos os itens de menu, olhar todas as mensagens de erro de um determinado módulo ou as caixas de diálogo que aparecem em determinadas condições. Porém, sempre procurando o menor caminho para passar por cada uma delas.

### Historical District

A região histórica é aquela que cuida de código legado e de funcionalidades que já existiam previamente. 

Neste bairro temos 3 formas de exploração possíveis, segundo o autor:

- **Bad Neighborhood Tour:** No software também temos áreas não recomendadas, pois estão infestadas de bugs, a diferença para um turista é que, enquanto ele é orientado a evitar essas áreas, o testador é orientado a ficar o maior tempo possível nelas. Por aqui podemos usar a estratégia baseada em Feedback.

- **Museum Tour:** O museu expõe antiguidades. Nos testes estas antiguidades são os códigos legados que, após a saída dos desenvolvedores originais dos códigos, eles geralmente ficam com a sua documentação defasada. Estes códigos são difíceis de entender, manter e até mesmo de se criar testes para eles. Então os testadores devem identificar esses blocos de código ou módulos que existem e dar atenção às funcionalidades que exercitam esses códigos.

- **Prior Version Tour:** Os testadores devem tentar garantir também que uma funcionalidade, apesar que tenha sido atualizada, não tenha perdido a sua essência. Então, se possível, temos que tentar garantir que as execuções que conseguiamos fazer em uma versão anterior, também consigam ser feitas em uma nova versão.

### Entertainment District

A região do entreterimento também se divide em 3 seções de exploração possíveis:

- **Supporting Actor Tour:** Nos testes, iremos focar nas funcionalidades que dividem a tela com as principais funcionalidades da aplicação. Tudo o que a gente coloca na mesma tela de uma rota principal, temos que tentar garantir que também não irão dar problemas, pois, uma vez que eu tenha colocado aquela funcionalidade junto com uma funcionalidade principal, a probabilidade de que ela vai ser utilizada aumenta e se, ela tiver problemas, então estaremos aumentando a quantidade de problemas que se possa ter durante o uso da aplicação.

- **Back Alley Tour:** Nos testes, visite aquelas funcionalidades que raramente alguém vai utilizar.

- **All-Nighter Tour:** Nos testes, poderiamos manter a aplicação rodando e aberta, por exemplo, a noite inteira, para ver como ela faz o gerenciamento de memória, gerenciamento de recursos, gerenciamento de sessão... Ver como a aplicação está se comportando no dia seguinte, se ainda tem sessão, se ela ainda está logado, como a aplicação irá se comportar assim que você voltar, etc.

### Tourist District

Aqui também temos 3 rotas distintas:

- **Collector's Tour:** Nos testes, tente mapear todas as funcinalidades e vá catalogando cada funcionalidade visitada a medica que as visitas vão ocorrendo.

- **Lonely Businessman Tour:** Nos testes, procure as personalidades que estão mais distantes do ponto inicial da aplicação. Qual funcionalidade necessita de mais cliques para chegar nela? Você pode ir aplicando também o *Garbage Collector's Tour* durante o caminho para ela.

- **Supermodel Tour:** Aqui você deve ser superficial, não tente aprofundar muito nos testes. O importante aqui é a apresentação e as primeiras impressões, então, foque apenas nas interfaces, em testar se as interfaces estão boas, rápidas, visualmente aprasíveis, etc.

### Hotel District

Na região hoteleira nós temos 2 rotas a serem feitas:

- **Rained-Out Tour:** Nos testes, o foco seria em iniciar operações e cancelá-las logo em seguida, por exemplo, podemos fazer uma busca pesada e parar no meio dela e, ficar disparando e cancelando essa operação para ver se a aplicação vai reagir bem, se ela não irá quebrar depois de algumas tentativas e se não surgirá nenhum outro efeito colateral.

- **Couch Potato Tour:** Nos testes, tente passar pelas funcionalidades sempre com valores defaut. Se existe alguma informação obrigatória, faça o mínimo necessário. O que conseguimos com isso? Conseguimos validar a questão da obrigatoriedade de campos, se o formulário irá aceitar ou não algo incompleto, por exemplo. O interessante desta técnica é que, além de testar a validação, a gente vai testar também as decisões que o sistema fez em nosso lugar, já que, por exemplo, uma vez que eu não preencher, o sistema terá que definir esses valores automaticamente para mim e então podemos chegar se esses valores são exatamente os que estavam especificados.

## Outras Estratégias válidas de se conhecer:

Cada assunto desses é um mundo mas aqui vamos listá-los brevemente para interesse futuro:

- **Shoe Test:**  Apertar várias teclas de uma só vez.

- **Null, Zero, Vazio:** Preencher campos com Null, 0  ou deixá-los vazios.

- **Get one | Take One:** Abra duas instâncias de um recurso e veja se uma atrapalha a outra.

- **Bookmark:** Em aplicações web, tente acessar urls diretamente para ver como elas se comportam.

- **Sabotage:** Entenda o funcionamento da aplicação, entenda suas dependencias e tente retirá-las para ver como a aplicação se comporta.

- **Ferramentas de Desenvolvedor:** Use as ferramentas de desenvolvedor que os browsers possuem para te ajudar a testar aplicações web.

- **Requisições:** Faça avaliações das requisições que a aplicação está fazendo em uma API, utilizando, por exemplo, as ferramentas de desenvolvedor.

- **Responsividade e Acessibilidade:** Faça testes de responsividade e acessbilidade de aplicações visando que elas poderão ser acessadas por pessoas com complicações e/ou dificuldades não vistas usualmente nos usuários comuns.

- **Segurança:** Teste e tente burlar regras de segurança de uma aplicação para ver como ela se comportará e o quão bem protegida ela está de ataques de segurança de terceiros.

- **Banco de Dados:** Também podemos extrair cenários de testes utilizando banco de dados, as vezes, mesmo quando não temos acesso ao banco de dados. Você pode extrair cenários de um banco de dados de diversas formas, extraindo limites de cada campode um BD, por exemplo.