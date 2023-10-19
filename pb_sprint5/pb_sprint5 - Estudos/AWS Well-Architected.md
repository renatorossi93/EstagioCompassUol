# ***Objetivos do curso AWS Well-Architected:***

 **Aprender:**
     - A descrever os recursos do Amazon Web Services(AWS) Well-Architected Framework.
     - Descrever os princípios gerais de desenvolvimento no ambiente de nuvem.
     - Descrever os pilares do AWS Well-Architected Framework
     - Descrever os usos comuns do AWS Well-Architected Framework.

## Resumo

 O Well-Architected Framework abrange estratégias e melhores práticas de arquitetura na nuvem.

 Ele oferece uma maneira de comparar sua arquitetura com as melhores práticas da AWS e identificar como arbordar quaisquer deficiências.

 O Well-Architeceted Framework permite que o cliente tome decisões informadas sobre sua arquitetura de um modo nativo da nuvem e compreenda o impacto das decisões de desenvolvimento.

## Princípios gerais de desenvolvimento

 Depois de usar a AWS por alguns anos, pode ser fácil ter como garantidos alguns dos princípios de desenvolvimento geral que são difíceis de alcançar em um ambiente tradicional.

 Ao pensar em princípios gerais de desenvolvimento, é interessante contrastar como você pensaria sobre isso em um ambiente tradicional:

     - Você precisaria adivinhar qunata infraestrutura seria necessária, o que muitas vezes era baseada em requisitos e demenada de negócios de alto nível e, muitas vezes, antes que uma linha de código fosse escrita.

     - Você não poderia se dar ao luxo de testar em grande escala. A duplicação completa de custos de produção seria difícil de justificar, especialmente com baixa utilização. Portanto, quando você entrasse em produção, normalmente encontraria novos tipos de problemas em alta escala.

     - Você temeria fazer uma alteração arquitetônica significativa porque não teria como testá-la corretamente. Isso impediria que você entregasse outros recursos porque seus ambientes seriam um único pipeline.

     - Os experimentos seriam provas de conceito no início. Seria difícil justificar mais tarde devido ao esforço de obter recursos para tentar coisas diferentes. Você criaria e personalizaria manualmente ,o que é difícil de reproduzir.

     - Sua arquitetura seria ultrapassada, mesmo que todo o resto tivesse progredido, como o que seus usuários estavam fazendo, os requisistos e até mesmo o modelo de negócio.

 Na nuvem, as restrições enfrentadas no ambiente tradicional foram removidads, portanto, você usa esses princípios para aproveitar isso.

 Na nuvem, os clientes podem:

     - Parar de adivinhar suas necessidades de capacidade.

     - Testar os sistemas na escala de produção.

     - Automatizar para facilitar a experimentação arquitetônica.

     - Permitir que as arquiteturas evoluam.

     - Criar arquiteturas orientadas por dados.

     - Aprimorar usando dias de testes.

## Pilares do Well-Architected

 A criação de soluções de tecnologia é muito parecida com a construção de um edifício físico. Se a base não for sólida, poderá causar problemas estruturais que minam a integridade e a função do edifício.

 Ao projetar soluções de tecnologia, se você ignorar *os cinco pilares de **excelência operacional**, **segurança**, **confiabilidade**, **eficiência de performance** e **otimização de custos***, poderá se tornar um desafio criar um sistema que forneça requisitos funcionais e atenda às suas expectativas.

 Quando você incorporar esses pilares, isso ajudará a produzir sistemas eficientes e estáveis, permitindo que você se concentre em requisitos funcionais.

 ### Pilar de Excelência Operacional:

     O Pilar de excelência operacional concentra-se em como sua organização oferece suporte para seus objetivos de negócios,a capacidade de executar e monitorar sistemas para oferecer valor empresarial e melhoria contínua de processos e procedimentos de suporte.

     Áreas de foco incluem: 
         
         - Organização: Os clientes precisam compreender as prioridades da organização deles, a estrutura organizacional e como a organização apoia os membros da equipe para que eles possam dar suporte aos resultados de negócios.

         - Preparação: Os clientes precisam projetar a arquitetura para operações.

         - Execução: Os clientes precisam saber como operar as cargas de trabalho e compreender a integridade das atividades de carga de trabalho e operações.

         - Evolução: Os clientes precisam ter um processo para a melhoria contínua de ambas as cargas de trabalho e atividades operacionais. Isso inclui implementar ciclos de acomentários, aprender com a experiência, relizar mehlorias e compartilhar o que é aprendido para beneficiar toda a organização.
    
     **Princípios de desenvolvimento de Excelência Operacional:**

         Então vamos pensar novamente nos desafios para alcançar a excelência operacional em um ambiente tradicional:

             - Dificuldade com alterações manuais.
             
             - Dificuldade com alterações em lote.

             - Raramente realizar dias de testes.

             - Sem tempo para aprender com os erros.

             - Documentação desatualizada.

         Na nuvem, as restriçõe de um ambiente tradicional são removidas.

         Os clientes podem aplicar a mesma disciplina de engenharia que eles usam para o código do aplicativo, para todo o ambiente e as atividades operacionais.

         Por meio da automação, eles podem reduzir o nível de esforço para fazer alterações e adotar um padrão de fazer alterações reversíveis incrementais frequentes, reduzindo o risco.

         Os clientes podem criar memória organizacional realizando dias de testes que simulam falhas para testar os processos de recuperação e aprender com esses exercícios e todos os eventos operacionais para melhorar as respostas deles.

 ### Pilar de Segurança:

     O pilar de segurança se concentra na capacidade de proteger informações e sistemas.

     O pilar de segurança abrange cinco áreas de atenção:

         - Quem pode fazer o que com o *Identity and Access Management*.

         - Detecção de eventos de segurança com controles de detecção.

         - Proteção de sistemas com proteção de infraestrutura.

         - Confidencialidade e integraidade dos dados.

         - Respostas a eventos de segurança.

     **Princípios de Desenvolvimento de Segurança:**

     Ao adotar esses princípios de desenvolvimento de segurança, podemos criar e operar arquiteturas nativas da nuvem. Com a segurança aplicada em todas as camadas e o rastreamento entre o uso e as alterações, você pode acionar o código para responder a eventos ou combinações de eventos.

     Você pode usar controles de acesso refinados para dizer quem pode fazer o quê e concentrar seu tempo na preparação de eventos de segurança e automação, para que ele possa ser automático, livre de erros, com versão controlada e escalável.

     Para operar sua carga de trabalho com segurança, voc~e deve aplicar as melhores práticas abrangentes a todas as áreas de segurança. Pegue os requisitos e processos que você definiu em excelência operacional em nível organizacional e de carga de trabalho e aplique-os a todas as áreas.

     Organize cargas de trabalho em contas separadas e de grupo com base na função ou em um conjunto comum de controles. Use o *AWS Organizations* e o *AWS Control Tower* para gerenciar contas e defina proteções comuns para icentivar todos a seguir as melhores práticas e automatizar muitas tarefas relacionas à conta.

 ### Pilar de Confiabilidade:

     O pilar de confiabilidade concentra-se na capacidade de recuperação de falhas e no atendimento à demanda nas seguintes áreas:

         - Elementos fundamentais baseados em requisitos de configuração e de projetos cruzados.

         - Escolhas de arquitetura que fazemos ao projetar sistemas distribuídos.

         - Como lidar com alterações.

         - Recuperação de falhas com gerenciamento de falhas.

     **Princípios de desenvolvimento de confiabilidade:**

     Confiabilidade em um ambiente tradicional tem alguns desafios, sendo eles:

         - Precisa recuperar-se manualmente de falhas.

         - Raramente se testa procedimentos de recuperação.

         - Tem vários pontos únicos de falha.

         - Precisa adivinhar a capacidade.

     Com as restrições enfrentadas no ambiente tradicional removidas, podemos usar esses princípios de desenvolvimento na nuvem para testar além da destruição e garantir que os procedimentos de recuperação sejam automáticos e bem sucedidos.

     Podemos ter vários recursos respondendo solicitações, uma vez que uma falha em qualquer componente muitas vezes tem irmãos. Nossos recursos podem intervir e absorver a carga. Além disso, podemos adicionar e remover recursos a serem alcançados para que tenhamos alta utilização e escala para atender à demanda.

 ### Pilar de Eficiência de Performance:

     O pilar de eficiência de performance gira em torno da capacidade de usar recursos de TI com eficiência. As áreas de foco são: 

         - Selecionar os tipos de recursos corretos para computação, armazenamento, banco de dados e redes.

         - Revisar a seleção à medida que a AWS continua inovando com novos tipos de recursos e funcionalidades.

         - Estar ciente da performance de seus recursos por meio de monitoramento.

         - Fazer concessões arquitetônicas para maximizar a eficiência da performance.

     **Princípios de desenvolvimento da eficiência de performance:**

     Vamos pensar sobre as restrições em um ambiente tradicional  aopensar em eficiência de performance:

         - Uso da mesma tecnologia pra tudo.

         - Somente local, global era muito difícil e caro.

         - Uso de muitos servidores com pessoas para gerenciar todos eles.

         - Difícil de experimentar.
    
     Na nuvem, pensamos em eficiência de performance de forma diferente porque não temos as restrições de um ambiente tradicional. Podemos experimentar novas tecnologias sem ter que gerenciar a configuração e começar rapidamente.

     A implantação em locais globais é um clique de um botão e não um processo legal. Podemos criar soluções que são totalmente gerenciadas para que nos concentremos no código que agrega valor.

     Experimentação é algo que fazemos continuamente para encontrar melhores maneiras de entregar resultados que encantam nossos clientes.

     Por último, devemos considerar a afinidade mecânica, certificando-nos de que compreendemos como cada componente do sistema funciona. Você não precisa saber como construir cada componente, mas essa compreensão levará a um projeto de carga de trabalho melhor.

 ### Pilar da Otimização de Custos:

     O foco dos pilares da otimização de custos é a capacidade de alcançar resultados de negócios no ponto de preço mais baixo.

     As áreas de foco incluem:

         - Gerenciamento financeiro da nuvem: Perceber o valor empresarial e o sucesso financeiro à medida que otimiza o custo e o uso.
         
         - Controlar e compreender em que o dinheiro está sendo gasto com a visibilidade de gastos

         - Selecionar tipos de recursos econômicos, como instâncias reservadas e spot.

         - Gerenciar a demanda e fornecer recursos como *Auto Scaling*, cache ou otimização de enfileiramento.

         - Otimizar ao longo do tempo aproveitando os novos serviços ou recursos.

     **Princípios de desenvolvimento do pilar da otimização de custos**

     Desafios nos princípios de otimização de custos no ambiente tradicional:

         - Centralizar o custo.

         - Empregar pessoas para manter servidores.

         - Pagar adiantado com uma forma intensiva de CAPEX.

         - Nenhum benefício de economias de escala.

         - Despesas em operações de datacenter

     Princípios de otimização de custos no ambiente de NUVEM>

     Na nuvem, a otimização de custos não tem as restrições de ambientes tradicionais. Trabalhe ativamente entre equipes para melhorar a capacidade da sua organização de otimizar as cargas de trabalho.

     Você paga somente pelos recursos computacionais que consumir e aumente ou diminua o uso de acordo com os requisitos de negócios, ao invés de usar previsões elaboradas. Ao usar a computação em nuvem, você pode obter um custo variável menor do que o que poderia por conta própria, porque a AWS pode alcançar economias de escala mais altas. A AWS realizao trabalho pesado de racks, empilhamento e capacitação de servidores para que você possa se concentrar em seus clientes e projetos de negócios em vez de se concentrar na infraestrutura de TI. A nuvem facilita a identificaçãoi precisa do uso e dos custos dos sistemas, que, por sua vez, permite a transparência dos custos de TI para proprietários de negócios individuais.

     Na nuvem, os serviços gerenciados eliminam a carga operacional da manutenção de servidores para tarefas como envio de e-mails ou gerenciamento de bancos de dados.
     
      
## Perguntas sobre o Well-Architected

 Cada pilar tem um conjunto de perguntas, com a ajuda, para fornecer contexto. Também inclui respostas de melhores práticas com as quais vimos clientes serem bem-sucedidos.

 As resostas não são diretas. A resposta para a pergunta pode ser válida devido ao contexto da carga de trabalho. Você ainda precisará aplicar o que sabe sobre arquiteturas.

## Usos comuns do Well-Architected Framework

 Os usos comuns do Well-Architected incluem:

     - Instruir as equipes sobre como criar arquiteturas nativas da nuvem.

     - Criar um backlog de melhorias para diminuir a dívida técnica e o risco.

     - Incorporar em painéis de governança os outros processo internos como mecanismo de bloqueio antes do lançamento.

     - Comparar capacidade e/ou maturidade de equipes e produtos diferentes.

 Ao adquirir uma nova organização, você pode usar o processo para ver em qual estado sua arquitetura atual está.

## Pontos principais do Well-Architected Framework
 
 O Well-Architected Framework permite que o cliente tome decisões informadas sobre a arquitetura de um modo nativo da nuvem e compreenda o impacto das decisões de desenvolvimento.

 As perguntas são apenas um ponto de partida; você deve pensar ativamente sobre "e se" e cenários de falha ao revisar arquiteturas. Você pode ter que considerar perguntas adicionais de acompanhamento, porque nem sempre há um simples binário sim ou não.

