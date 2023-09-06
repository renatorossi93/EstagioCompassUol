# Testes Baseados em Riscos

Os riscos estão presentes em diversas áreas de conhecimento, porém eles têm um significado distinto em cada contexto.

No contexto de engenharia de software, os riscos podem estar relacionados diretamente ao gerenciamento do projeto como um todo ou voltados estritamente para o uso da aplicação, focando nas possíveis experiências negativas que serão percebidas pelos usuários do produto. É aí que entra a abordagem de testes baseada em riscos!

Segundo um artigo da ReQtest, essa técnica checa a probabilidade de ocorrência de falhas na aplicação, utilizando casos de teste previamente criados para prever o impacto do que foi desenvolvido nos negócios do cliente. Além disso, partes críticas da aplicação são priorizadas, onde a probabilidade de ocorrer falhas é maior e onde também deve ser investido esforço na correção de bugs críticos.

### Aplicação dos testes baseados em riscos no contexto ágil

Em um artigo da InfoQ, Ben Linders relata a experiência de Csaba Szökőcs na implementação de testes baseados em riscos em um time ágil que utiliza o Scrum.

Csaba afirma que os times tentaram coletar os riscos de cada história antes do planejamento da sprint e que isso os ajudou a como pensar em testar as atividades antes que as histórias fossem implementadas. Depois de coletados, dois profissionais priorizam os riscos através da relação probabilidade x impacto e todos os pontos críticos com alta exposição devem ser tratados de alguma forma.

Esse tipo de teste normalmente é adotado quando se tem um curto espaço de tempo para testar e é feito por equipes de teste para encontrar os casos mais críticos que precisam ser testados, onde os testadores executam testes separados e independentes baseados nos riscos identificados para quase todas as histórias de usuários.

Abaixo, o depoimento de Csaba em uma entrevista com o InfoQ, onde ele comenta sobre a coleta dos riscos:

 Coletamos os riscos no contexto da história do usuário respondendo à pergunta: “O que pode dar errado nesta história?”.

 Além disso, tentamos imaginar que o novo recurso já em funcionamento e pensamos em diferentes cenários, como será usado da maneira correta e como será mal utilizado. Nós tentamos combinar o novo recurso com outros recursos existentes, respondendo à pergunta: “Pode dar errado de alguma forma?

### Prós e contras da adoção dos testes baseados em riscos

Henriette Harmse lista algumas vantagens e desvantagens da adoção desta técnica:

***Vantagens:***

- Os itens mais críticos são desenvolvidos e testados primeiro, o que reduz o risco geral no projeto;

- Se o prazo for apertado existe uma diretriz para guiar o que deve ser testado e o que não deve ser testado;

- A qualquer momento, pode-se inficar novos riscos no projeto. Dessa forma os riscos podem ser priorizados novamente, levando em conta os itens mais críticos que ainda não foram testados;

- Os riscos identificados são uma informação valiosa para todos os envolvidos no projeto e podem ser utilizadas em negociações.

***Desvantagens:***

- Com essa abordagem, partes do sistema não serão testadas intencionalmente;

- Os valores atribuídos aos riscos podem ser subjetivos, por isso é necessário discutir com o time os valores propostos;

- Pode aumentar a carga de documentação.

### Riscos x Incertezas

James Thomas, em seu artigo publicado no Ministry of Testing, traz uma reflexão sobre relação entre risco e incerteza na aplicação da abordagem de testes baseados em riscos e todo o conteúdo dessa seção é baseado nesse artigo.

 Segundo Frank Knight:

 Riscos: são reservados para cenários em que podem ser medidos quantitativamente, geralmente usando a probabilidade;

 Incerteza: situações que não são quantificáveis ou medidas, com as ferramentas que o time tem atualmente.

Sabendo das diferenças, podemos construir uma matriz que traz a relação entre esses dois conceitos, conforme a figura abaixo:

[riscosxincertezas](assets/image-9.jpeg)

James afirma que os riscos estão associados ao primeiro quadrante (known known), onde todo o time está ciente do problema e entende todas as suas nuances a ponto de medi-lo quantitativamente.

Em todos os outros quadrantes, há um nível de incerteza que pode ser desvendado com as atividades de testes e análise mais aprofundada da situação. A ideia é transformar todos os níveis de incerteza em algo sabido e mensurável!

***Conclusão:***

Os testes baseados em riscos ajudam a priorizar esforços em histórias e partes críticas da aplicação e existem diversas formas de como colocar essa técnica em prática.

Traçando um bom planejamento de como adotar essa estratégia em seu time irá te ajudar na antecipação de diversas situações que só seriam perceptíveis no ambiente de produção, o que causa uma experiência negativa do produto para o usuário final.

### Matriz de riscos

A Matriz de Riscos ou Matriz de Probabilidade e Impacto é uma ferramenta de gerenciamento de riscos que permite de forma visual identificar quais são os riscos que devem receber mais atenção. Por se tratar de uma ferramenta para priorização de riscos, ela pode ser aplicada na etapa de avaliação de riscos. Dessa forma, a identificação dos riscos é uma etapa que deve ser feita antes da aplicação da ferramenta.

O grande diferencial da Matriz de Riscos é a facilidade que ela proporciona para visualizar informações sobre um determinado conjunto de riscos. Por se tratar de uma ferramenta gráfica, se torna fácil identificar quais riscos irão afetar menos ou mais a organização, possibilitando a tomada de decisões e a realização de medidas preventivas para tratar esses riscos.

A matriz de risco consiste em uma matriz (tabela) orientada por duas dimensões: probabilidade e impacto. Por meio dessas duas dimensões, é possível calcular e visualizar a classificação do risco, que consiste na avaliação do impacto versus a probabilidade.

O resultado da classificação do risco, indica em qual célula da matriz o risco se encaixa. Como pode ser visto na Figura 1, há cores diferenciadas entre as células e essas cores indicam o quão alta é a classificação do risco, ou seja, o quão crítico um determinado risco é.

Por exemplo, os riscos que resultaram em uma classificação alta (cor vermelha na matriz) devem receber maior atenção do que os riscos classificados como moderados ou médios (cor amarela na matriz) e, consequentemente, os riscos classificados como baixo (cor verde na matriz) podem ter menor atenção que os moderados e altos.

[matrizderisco](assets/image-10.png)

Visto que as duas dimensões de uma Matriz de Riscos são compostas pela probabilidade e impacto, a seguir é apresentado de forma mais detalhada a definição dessas duas variáveis.

### Probabilidade

A probabilidade (eixo vertical) consiste na medição de o quão provável é a ocorrência do risco. Em outras palavras, na probabilidade deve-se analisar o quão fácil ou difícil é que determinado risco aconteça, por exemplo, medir o quão provável é que chova hoje? A probabilidade deve ser medida em níveis, por exemplo: muito baixo, baixo, moderado, alto e muito alto. Essas probabilidades também podem ser convertidas em números (porcentagens) para facilitar o entendimento, sendo:

- muito baixo = 1 a 10%;
- baixo = 11% a 30%;
- moderado = 31% a 50%;
- alto = 51% a 70%;
- muito alto = 71% a 90%.

### Impacto

O impacto (eixo horizontal) se refere às consequências do risco caso ele vier a ocorrer, ou seja, quais serão os prejuízos ou danos causados caso o risco incida de fato. O impacto pode ser negativo por exemplo, prejuízo financeiro, perda de clientes, dano à equipamento, etc; ou ainda, positivo, como novas oportunidades de negócio, utilização de uma nova tecnologia, redução de taxas ou impostos, etc.  O impacto também é medido em níveis, por exemplo: muito baixo, baixo, moderado, alto e muito alto.

### Quando utilizar a Matriz de Riscos?

O risco é o efeito da incerteza sobre um determinado objetivo ou evento.  Como o próprio nome da ferramenta indica, a Matriz de Riscos deve ser utilizada na avaliação de qualquer risco, desde riscos organizacionais de processos até riscos de um projeto, por exemplo. Em cenários com grandes quantidades de riscos identificados, a Matriz de Riscos é uma ferramenta eficaz para direcionar o trabalho, ou seja, para ajudar a saber por quais riscos começar a tratativa.

Um ponto importante e que vale ser relembrado é que um risco pode ser tanto uma ameaça quanto uma oportunidade. Uma ameaça é um risco “ruim”, uma fonte de perdas, ou seja, é um risco que, se incidir, gera danos negativos à organização ou projeto. Já uma oportunidade é um risco “bom”, uma fonte de ganhos que a organização pode ter para melhorar seus resultados (impacto positivo). Diante desse cenário, pode-se utilizar a Matriz de Riscos para avaliar ameaças e oportunidades, para tal basta expandir a matriz de risco.

### Como fazer uma Matriz de riscos?

A Matriz de Riscos deve ser uma ferramenta inserida no processo de gestão de riscos da organização. O primeiro passo para utilizar essa ferramenta consiste em criar uma matriz adaptada de acordo com o contexto da empresa. Ou seja, definir e descrever quais são os critérios que deverão classificar a probabilidade e o impacto do risco para processos ou projetos.

Por exemplo, suponha que uma empresa utilize 5 níveis de probabilidade e impacto para a avaliação de riscos. Para isso, os critérios e a descrição desses critérios para probabilidade e impacto foram definidos no processo de gestão de risco da seguinte forma:

[probabilidadeximpacto-matrizderisco](assets/image-11.jpeg)

Após a definição dos critérios de probabilidade e impacto, é o momento definir qual ferramenta você utilizará para apoiar o processo de avaliação dos riscos. Podem ser utilizadas planilhas eletrônicas, folhas de papel, ou até mesmo um software para gestão de riscos que possua e automatize a ferramenta.

Em seguida, é necessário realizar a identificação dos riscos e, na sequência, para cada risco identificado, analisar a sua probabilidade e impacto de acordo com os critérios definidos. Vale frisar que é muito importante que a avaliação da probabilidade e impacto seja feita pelas pessoas certas.

O conhecimento sobre o risco identificado é fundamental para que a avaliação seja realista e precisa. Além disso, a avaliação do risco pode ser feita por um time ao invés de apenas por uma pessoa. As discussões geradas ajudarão a entender e esclarecer qual é o nível real de impacto e probabilidade do risco sob avaliação.

Uma dica para estimular a reflexão nesse momento é fazer perguntas como: “O quanto sabemos sobre esse risco? Já lidamos com ele antes? Temos algum fato ou dado sobre o risco (por exemplo, incidências, indicadores, etc.)?”. Essas perguntas não ajudarão somente a avaliação de impacto e probabilidade, mas também na definição de ações de tratativa do risco.

Ao determinar a probabilidade e impacto do risco, esses valores devem ser inseridos na linha e coluna correspondente ao resultado obtido, gerando assim a classificação do risco. De acordo com a classificação do risco será possível definir se ele deve ser tratado ou não como prioridade.

### Análise de riscos com PRISMA

Quando estiver se perguntando ***"Por onde começar a testar?"***, talvez a melhor resposta que você irá encontrar seja: ***Identifique os riscos!***

Se você quer ser mais eficiente quanto ao lugar onde você começa a testar, você precisa entender que seus testes precisam começar a partir das partes mais importantes para a sua aplicação ou para o seu negócio. 

E, a partir daí, você identifica os maiores riscos que podem acontecer com essas partes mais importantes da sua aplicação e, então começar os seus testes. É imprescindível, também, saber entender e definir quais riscos são mais importantes, maiores, mais fáceis de acontecer, enfim, prioritários!

No entanto, de nada adianta fazer isso se vc não anotá-los! Após identificar os pontos importantes da aplicação e identificar os riscos desses pontos, é extremamente importante que se anote isso, se cataloge isso pq se não será inútil.

Todos esses entendimentos são importantes, mas, mais importante é possuir um método, pois ele vai te ajudar a pensar e agir asimm e a pensar e agir assim **melhor!**. 

O método ensinado apresentado aqui será o PRISMA.

### ANOTAÇÕES sobre riscos em teste de software com PRISMA.

***Lembre-se:***&

- Preciso identificar os possíveis problemas e discuti-los com o Dev e PO do meu time para consolidá-los.

- Não há zero defeitos, logo. é importante que eu teste o que é mais importante para encontrar problemas que poderiam afetar o negócio.

- É de extrema importância que você estude e tenha referências para saber onde você precisa ir e saber também quando você conseguiu superar a barra do conhecimento.

- Ler mais sobre "*Good Enough Quality*" proposta por *James Bach*

***Good Enough (Bach, 97):***

- Tenho benefícios.

- Há bugs críticos.

- Os benefícios de entregar agora são maiores do que esperar para corrigir os bugs?

- Será pior se eu entregar o software depois?

***PRISMA:***

- Identificar riscos técnicos(probabilidade) e de negócios(impacto) com nível alto.

- Lista de riscos sendo identificados.

- Identificamos os riscos e alinhamos entre Négócios, Tecnologia e Testes.

-  Uma vez que você fez isso e conversou com as outras pessoas envolvidas no desenolvimento do produto, você acaba maximizando a comunicação da equipe e alinhando o entendimento do grupo.

- O PRISMA tem um processo: 
 1 - Planejamento; 
 2 - Kick-Off;
 3 - Preparação Individual;
 4 - Pontuação;
 5 - Estimativa em Consenso;
 6 - Escolha da Abordagem de Testes.

