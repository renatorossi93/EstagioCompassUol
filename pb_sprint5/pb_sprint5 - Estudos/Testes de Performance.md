# Primeiros Passos em Testes de Performance

## Conceitos de Performance:

 ### O que é Teste de Performance?

 Um teste não funcional

 Com *base* em:
   - Quantidade de usuários simultâneos ou quantidade de registros concorrentes;
   - Tempo de resposta ou tempo de processoamento.

 O *objetivo* do teste de performance é medir a aplicação em:
   - Desempenho;
   - Capacidade;
   - Confiabilidade;
   - Disponibilidade;
   - Escalabilidade;
   - Resiliência.

 O teste de performance possui algumas *sub-características*, sendo  elas:
   - Comportamento do Tempo;
   - Capacidade
   - Utilização de recursos como: Consumo de memória, consumo de CPU e espaço em Disco.

 No teste de performance nós fazemos algumas *experimentações* com o foco em:
   - Eliminar obstáculos de desempenho;
   - Entender melhores configurações;
   - Entender necessidades de hardware para atender os requisitos de performance.

 Os *princípios* do teste de performance são:
   - Alinhar as expectativas de todos os envolvidos na aplicação(Stakeholders);
   - Entender os reprodutiveis, ou seja, a massa de dados;
   - Apresentar resultados compreensíveis;
   - Testar em ambientes similares aos de produção.

 ### Quais são os tipos de Testes de Performance?

     Nós podemos ter alguns tipos de testes de performance, sendo eles:

  **Teste de Carga ou Volume:**

     Tem o objetivo de Avaliar a aplicação quando o sistema é submetido a aumento de carga como, por exemplo: Níveis crescentes de cargas, usuários simultâneos(threads) e quantidade de registros.

  **Teste de Capacidade:**

     Tem o objetivo de Avaliar e descobrir o limite de aplicação, podendo realizar testes de carga ou volume também, mas, com o objetivo de encontrar o limite que a aplicação consegue alcançar ou que o critério de aceite estipular em um determinado tempo ou período.

   **Teste de Escalabilidade:**

     Tem o objetivo de avaliar a capacidade do sistema de expandir em horários de pico de uso, por exemplo.

   **Teste de Stress:**

     O objetivo deste tipo de teste é avaliar o comportamento da aplicação com cargas próximas ou superiores ao limite.

   **Teste de pico:**

     O objetivo do teste de pico é avaliar o comportamento da aplicação após rajadas repentinas de acesso, por exemplo, para que possamos medir a estabilidade e a disponibilidade da aplicação.

   **Teste de Resistência:**

     Tem o objetivo de avaliar o comportamento da aplicação com o maior volume em períodos mais longos e também de: avaliar a degradação da performance de hardware ou da aplicação em si, avaliar as falhas que a aplicação podem gerar nesse processo, e avaliar as interrupções com isso também.

   **Teste de Concorrência:**

     Tem o objetivo de avaliar impactos na aplicação em execuções simultâneas,em um mesmo registro por exemplo.

   **Ramp-up:**

     Não exatamente é um tipo de teste de performance, mas é uma maneira de se executar esses testes mais habilmente, fazendo os testes pensando em etapas(steps), subindo gradativamente a carga, facilitando a encontrar momentos de ruptura da aplicação.

 ### Quais métricas podemos utilizar nos Testes de Performance?

   - **Tempo de Resposta:** Média, porcentagem, mínimo e máximo;
 
   - **Throughput:** Quantidade de registros, transações por segundos e diferenças entre Threads x Throughput;

   - **Latência:** Atraso, em tempo, que uma solicitação leva para ser transferida de um ponto a outro;

   - **Bytes:** Enviados e recebidos;

   - **Utilização de recursos:** Porcentagem de consumo de memória ou de consumo de CPU.

 ### Quais são as falhas comuns encontradas nos Testes de Performance?

   - Resposta lenta sob todos os níveis de carga;
   - Resposta lenta sob níveis de carga moderada e pesada;
   - Resposta degradada ao longo do tempo;
   - Tratamento idadequado de erros sob carga pesada ou acima do limite.

 ### Quais são as Skills necessárias para se trabalhar com Testes de Performance?

   **Hard Skills:**
     - Conceitos de Bancos de Dados;
     - Conceitos de Performance e Teste de Performance;
     - Aprofundamento em Arquitetura de Software;
     - Análise de métricas para construção de relatórios;
     - Conhecimento em alguma linguagem de programação para fazer scripts;
     - Monitoramento de hardware, de banco de dados e de aplicações.

   **Soft Skills:**
     - Comunicação;
     - Flexibilidade;
     - Resiliência;
     - Cooperação.

 ### Processos dos Testes de Performance

   **Maiores Desafios e Dúvidas:**
     - Como encontrar as métricas? Mapear padrões de acordo com perfil da aplicação.
     - Como entender as métricas com análise de dados? Métricas coletadas em produção.

   **Sugestões de Implementação:**
     *Pré-Requisitos:*
         - Priorizar funcionalidades;
         - Definir métricas;
         - Pensar em questões de ambiente, de infraestrutura e de distribuição de massa de dados;
         - Pensar em ferramentas, tanto para execução quanto para monitoramento.
     *Estrutura:*
         - Shift Left Testing de Performance;
         - Entendimento da demanda;
         - Criação de Scripts;
         - Execução do teste;
         - Análise  dos insumos coletados no teste.
         
## Testes de Performance de API:

 ### Por que eu deveria testar a performance da minha API?
     A ideia desta pergunta é trabalharmos com 3 pilares para o teste de qualquer API: O que? Quando? e Por que?

   **O que?**    
      O que são requisitos não funcionais?
         Requisitos não funcionais são requisitos relacionados ao uso da aplicação e não interferem diretamente no desenvolvimento do sistema.
         
         Então, um requisito funcional é bem mais difícil de prever, além de estar muito mais "linkado" ao comportamento da api, da forma como ela será consumida.

         Por isso, é importante entendermos algumas questões:
            - Como a API será usada?
            - Como a API se comporta com aumento de carga?
            - A API tem integrações ou não?
            - A API tem concorrência?
   
   **Quando?**
      Quando devemos testar performance?
        
         - Quando faremos uma alteração ou melhoria em uma API que já é conhecida que trabalha com volume;
         
         - Quando estamos desenvolvendo uma nova API desenvolvida com projeção de volume;
         
         - Quando a API possui processamentos com volume que: possuem grade de fechamento, trabalha com janelas específicas e/ou que os processamentos possuem prazo de expiração;
         
         - Quando a API tem concorrência, seja ela de muitos usuários simultâneos ou de muitos requests;

         - Quando a API tem alguma previsão de aumento de acesso;

         - Quando queremos garantir se o auto-scaling da API está funcionando como esperado;

      Devemos levantar essas questões sempre levando em consideração  a *criticidade*, os *riscos* e o *contexto* em que a API está inserida.

   **Por  que?** 
      Pense nesses dois "Por que?":
         Por que teria problemas em negligenciar requisitos de performance?
             - Por falta de direcionamento para o desenvolvimento com: Implementações erradas, erros na modelagem de banco de dados, decisões erradas de infra-estrutura...

             - Por falta de visibilidade do impacto do negócio com: erros em janelas de processamento e riscos de perdas de cliente e/ou receita com indisponibilidade, alto tempo de resposta e alta taxa de erro.

         Por  que eu deveria testar a performance da minha API?
             - 1 Prevenção de problemas;
             - 2 Direcionamento da melhor arquitetura para atender as necessidades de negócio;
             - 3 Evitar retrabalhos;
             - 4 Zelar pela reputação da aplicação;
             - 5 Não causar danos aos clientes/usuários;
             - 6 Garantir responsbilidade legal.