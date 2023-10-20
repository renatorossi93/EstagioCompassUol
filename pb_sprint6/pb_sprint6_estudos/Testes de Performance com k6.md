***Aqui estarão os estudos relacionados a todo o conteúdo de k6 em testes de performance da sprint 6 da PB Compass Uol.***

# Curso Performance Test - Primeiros passos com K6

 ## Tipos de teste de Performance (carga) segundo a documentação do k6

 ### Smoke Test (Teste de Fumaça)

 Os smoke tests tem uma carga mínima. Execute-os para verificar se o sistema funciona bem sob carga mínima e para coletar uma linha de base de valores de performance.

 Este tipo de teste consiste em rodar testes com algumas VUs - mais de 5VUs podem ser consideradas um teste de mini-carga.

 Da mesma forma, o teste deve ser executado por um curto período, ou com um número baixo de iterações ou com uma duração de segundos a alguns minutos no máximo.

 Em algumas conversas, smoke tests também podem ser chamados de *shakeout tests*.

 **Quando executar um Smoke test?**

 As equipes devem executar smoke testes, ou testes de fumaça, sempre que um script de teste for criado ou atualizado. O smoke test também deve ser feito sempre que o código do aplicativo relevante for atualizado.

 É uma boa prática executar um smoke test como primeiro passo, com os seguintes objetivos:

     - Verifique se o script de teste não tem erros.

     - Verifique se o sistema não lança erros (relacionados a performance ou ao sistema) quando está sob carga mínima.

     - Reúna métricas de linha de base de performance da resposta do seu sistema sob carga minima.

     - Com lógica simples, para servir como um teste sintético para monitorar a performance e a disponibilidade dos ambientes de produção.

 **Considerações**

 Ao preparar um teste de fumaça (Smoke Test), considere o seguinte:

     - Sempre que você criar ou atualizar um script, execute um smoke test. Como os smoke tests verificam scripts de teste, tente executar um sempre que criar ou atualizar um script. Evite executar outros tipos de teste com scripts não testados.

     - Mantenha a taxa de transferência pequena e a duração curta. Configure seu script de teste para ser executado por um pequeno número de VUs(de 2 a 20) com poucas iterações ou durações breves(30 segundos a 3 minutos).

 **Análise dos resultados**

 O Smoke test inicialmente valida que seu script seja executado sem erros. Se algum erro relacionado ao script aparecer, corrija o script antes de tentar testes mais extensos.

 Por outro lado, se você notar um desempenho ruim com esses números baixos de VU, relate, corrija seu ambiente e tente novamente com um smoke test antes de quaisquer outros testes.

 Uma vez que seu smoke test mostre zero erros e os resultados de desempenho parecem aceitáveis, você pode prosseguir para outros tipos de teste.

 
 ### Load Test (Teste de Carga)

 Um teste de carga média avalia o desempenho do sistema sob carga títica. A carga típica pode ser um dia normal na produção ou um momento médio.

 Os testes de carga média simulam o número de usuários simultâneos e solicitações por segundo que refletem comportamentos médios no ambiente de produção. Esse tipo de teste normalmente aumenta a taxa de transferência ou VUs gradualmente e mantém essa carga média por algum tempo. Dependendo das características do sistema, o teste pode parar repentinamente ou ter um curto período de *ramp-down*.

 Como "Load test"ou "Teste de Carga" pode se referir a todos os teipos de testes que simulam tráfego, este guia usa o nome de *teste de carga média* para evitar confusão. Em algumas conversas de teste, esse teste também pode ser chamado de teste diário ou teste de volume.

 **Quando executar um teste de carga média (Average-Load Test)**

 O teste de carga média ajuda a entender se um sistema atende às metas de performance em um dia típico(carga comum). *Dia típico* aqui significa quando um número médio de usuários acessa o aplicativo ao mesmo tempo, fazendo um trabalho normal, médio.

 Você deve executar um teste de carga média para:

     - Avaliar o desempenho do seu sistema sob uma carga típica.

     - Identificar sinais de degradação precoce durante o *ramp-up* ou períodos de carga total.

     - Assegurar que o sistema ainda atenda aos padrões de performance após as alterações do sistema. (Código e infraestrutura).

 **Considerações**

 Ao preparar um teste de carga média, consiedere o seguinte:

     - Conheça o número específico de usuários e a txa de transferência típica por processo no sistema. Para encontrar isso, examine APMs ou ferramentas analíticas que fornecem informações do ambiente de produção. Se você não puder acessar essas ferramentas, a empresa deve fornecer essas estimativas.

     - Aumente gradualmente a carga para a média de destino. Ou seja, use um período de ramp-up. Esse período costuma durar entre 5% e 15% da duração total do teste. Um período de ramp-up tem muitos usos essenciais:

         - Ele dá ao seu sistema tempo para aquecer ou dimensionar automaticamente para lidar com o tráfego.

         - Ele permite comparar os tempos de resposta entre os estágios de baixa carga e de carga média.

         - Se  você executar testes usando nosso serviço de nuvem(k6 cloud), um ramp up permite que os alertas de performance automatizados entendam o comportamento esperado do seu sistema.
     
     - Mantenha a média por um período maior do que o ramp-up. Procure uma duração média pelo menos cinco vezes maior do que o ramp-up para avaliar a tendência de performance durante um período de tempo significativo.

     - Considere um período de ramp-down. O ramp-down é quando a atividade do usuário virtual diminui gradualmente. O ramp-down geralmente dura tanto quanto o ramp-up ou um pouco menos.

 **Teste de carga média em K6**

 O objetivo de um teste de carga média é simular a quantidade média de atividade em um dia típico de produção. O padrão segue esta sequência:

     1 - Aumentea atividade do script até que ele atinja o número desejado de usuários e taxa de transferência.

     2 - Mantenha essa carga por um tempo.

     3 - Dependendo do caso de teste, pare o teste ou deixe-o descer gradualmente.

 **Análise dos resultados**

 Um resultado inicial para o teste de carga média aparece durante o período de ramp-up para descobrir se o tempo de resposta diminui à medida que a carga aumenta. Alguns sistemas podem até falhar durante o período de ramp-up.

 O teste valida se o desempenho do sistema e o consumo de recursos permanecem estáveis durante o período de carga total, pois alguns sistemas podem apresentar comportamento errático nesse período.

 Depois de saber que seu sistema funciona bem  e sobrevivea uma carga típica, talvez seja necessário empurrá-lo ainda mais para determinar como ele se comporta em condições acima da média. Algumas dessas condições acima da média são conhecidas como *Testes de Estresse(Stress Tests)*. 
 
 ### Stress Test (Teste de Estresse)

 O Stress test avalia a performance do sistema quando as cargas são mais pesadas do que o normal.

 O padrão de carga de um teste de estresse assemelha-se ao de um teste de carga média. A principal diferença é a maior carga. Para dar conta de uma carga maior, o período de ramp-up leva mais tempo proporcionalmente ao aumento da carga. Da mesma forma, depois que o teste atinge a carga desejada, ele pode durar um pouco mais do que no teste de carga média.

 Em algumas conversas de teste, os testes de estresse também podem ser chamados de testes de hora de pico(hush-our test), surto(surge test) ou escala(scale test).

 **Quando realizar um teste de estrese**

 Testes de estresse verificam a estabilidade e confiabilidade do sistema em condições de uso intenso. Os sistemas podem receber cargas de trabalho mais altas do que o normal em momentos incomuns, como prazos de processo, dias de pagamento, horas de ponta, finais de semana de trabalho e muitos outros comportamentos que podem causar tráfego frequente acima da média.

 **Considerações**

 Ao executar um teste de estresse, considere o seguinte:

     - A carga deve ser maior do que a que o sistema experimenta em média: Alguns testadores podem ter metas padrão para testes de estresse - Digamos, umaumento sobre a carga média de 50% ou 100% - Não há uma porcentagem fixa.

     A carga simulada em teste de estresse depende das situações estressantes a que o sistema pode estar sujeito. Às vezes, isso pode ser apenas alguns pontos percentuais acima dessa média. Outras vezes, pode ser de 50% a 100% maior, como mencionado. Algumas situações de estresse podem ser duas, triplas ou até ordens de grandeza maiores.

     Defina a carga de acordo com os padrões de carga de risco que o sistema pode receber.

     - Execute stress tests somente depois de executar testes de carga média:

     Identifique problemas de desempenho em testes de carga média antes de tentar qualquer coisa mais desafiadora. Essa sequência é essencial.

     - Reutilize o script de teste de carga média:

     Modifique os parâmetros para ter maior carga ou VUs

     - Espere um desempenhopior em comparação com a carga média:

     Esse teste determina o quanto a performance se degrada com a carga extra e se o sistema sobrevive a ela. Um sistema de bom desempenho deve responder com tempos de resposta consistentes ao lidar com uma carga de trbalhgo constantepor um período prolongado.

 **Teste de Estresse em  K6**

 A carga em um teste de estresse se assemelha à carga em um teste de carga média. A diferença é que ele atinge um nível maior de carga.

     1 - Aumente ainda mais a atividade do script em um ramp-up mais lento até que ele atinja um número acima da média de usuários ou taxa de transferência.

     2 - Mantenha essa carga por um tempo.

     3 - Dependendo do caso de teste, pare ou diminua gradualmente.

 **Análise dos resultados**

 Como o teste de carga média, um resultado inicial para o teste de estresse aparece durante o período de ramp-up para identificar a degradação do tempo de resposta à medida que a carga aumenta mais do que a utilização média. Comumente, a performance se degrada, e até mesmo a estabilidade do sistema trava à medida que empurramos o sistema mais longe do que o teste de carga média,

 Durante o período de carga total, a verificação é vital se o desempenho do sistema e o consumo de recursos permanecerem estáveis com uma carga mais alta.

 Agora que você sabe que seu sistema pode lidar com eventos de carga pendentes, as equipes geralmente verificam se o sistema funciona bem durante longos períodos. Ou seja, eles executam um *Teste de Imersão (Soak Test)*.

 ### Soak Test (Teste de Imersão)

O Soak Test é outra variação do teste de carga. Focaliza períodos prolongados, analisando o seguinte:

     - A degradação da performance do sistema e o consumo de recursos durante longos períodos.

     - Disponibilidade e estabilidade do sistema durante períodos prolongados.

 O teste de imersão difere de um teste de carga médi na duração do teste. Em um teste de imersão, a duração da carga de pico (geralmente uma quantidade média) se estende por várias horas e até dias. Embora a duração seja consiederavelmente maior, os períodos de ramp-up e ramp-down de um teste de imersão são os mesmos de um teste de carga média. 

 Em algumas conversas de testes um teste de imersão (soak test) pode ser chamado de teste de resistência (endurance/stamina test) ou teste de carga alta constant (constant high-load test).

 **Quando realizar um soak test**

 A maioria dos sistemas deve permanecer ligada e continuar funcionadno por dias, semans e meses sem intervenção. Este teste verifica a estabilidade e confiabilidade do sistema durante longos períodos de uso.

 Esse tipo de teste verifica se há defeitos comuns de desempenho que aparecem somente após o uso prolongado. Esses problemas incluem degradação do tempo de resposta, vazamentos de memória ou outros recursos, saturação de dados e esgotamento do armazenamento. 

 **Considerações**

 Quando você se preparar par aexecutar um teste de imersão, considere o seguinte:

     - Condigure a duração para ser consideravelmente maior do que qualquer outro teste.

     Alguns valores típicos são 3, 4, 8, 12, 24 e 48 a 72 horas.

     - Se possível reutilize o script de teste de carga

     Alterando apenas as durações de pico para aos valores acima mencionados.

     - Não execute testes de imersão antes de executar testes de fumaça (smoke tests) e testes de carga (load tests).

     Cada teste descobre problemasdiferentes. Executar isso primeiro pode causar confusão e desperdício de recursos.

     - Monitore os recursos de back-end e a eficiência do código. 

     Como estamos verificando a degradação do sistema, o monitoramento dos recursos de back-end e da eficiência do código é altamente recomendado. De todos os tipos de teste, o monitoramento de  back-end é especialmente importante para soak tests.

 **Soak tests em K6**

 O soak test, ou teste de imersão, é quase o mesmo que o teste de carga média. A única diferença é o aumento da duração do platô de carga, durando horas ao invés de alguns minutos como nos testes de carga.

     1 - Aumente a carga até que ela atinja um número médio de usuários ou taxa de transferência.

     2 - Mantenha essa carga por um tempo consideravelmente maior.

     3 - Finalmente, dependendo do caso de  teste, pare ou diminua gradualmente.

 **Análise dos resultados**

 Se executarmos esse teste após os tipos anteriores, devemos ter um sistema com bom desempenho em cenários anteriores. Neste teste, monitore as alterações em qualquer métrica de desempenho com o passar do tempo. Tente correlacionar qualquer impacto com alterações de medição back-end que indiquem degradação ao longo do tempo. Tais mudanças pode mser degradações graduais, como mencionado, e mudanças repentinas (melhorais também) no tempo de resposta e recursos de hardware de back-end. Os recursos de back-end para verificar são o consumo de RAM, CPU, rede de crescimento dos recursos de nuvem, entre outros.

 O resultado esperado é que o desempenho e a utilização de recursos do back-end permaneçam estáveis ou dentro das variações esperadas.

 Depois de executar todos os tipos de teste anteriores, você sabe que seu sistema funciona bem em muitas cargas diferentes: pequena, média, alta e estendida.

 ### Spike Test (Teste de Pico)

 Um spike test verifica se o sistema sobrevive e funciona sob súbita e massiva corrida de utilização. 

 Os spike tests, em português, testes de pico, são úteis quando o sistema pode experimentar eventos de tráfego repentino e massivo. Exemplos de tais eventos incluem vendas de ingressos (ex: Shows), lançamentos de produtos (ex: Videogames), anúncios de transmissão (ex: Eventos de esportes), prazos de processo (ex: Declaração de impostos) e vendas sazonais  (ex: Black Friday). Além disso, os picos de tráfego podem ser causados por eventos mais frequentes, como horários de pico, uma tarefa específica ou um caso de uso.

 O Teste de pico aumenta para cargas extremamente altas em um tempo de ramp-up muito curto ou inexistente. Normalmente, ele não tem período de platô ou é muito breve, já que usuários reais geralmente não ficam por aí dazendo etapas extras nessas situações. Da mesma forma, a rampa é muito rápida ou inexistente, deixando o processo iterar apenas uma vez.

 Esse teste pode incluir processos diferentes dos tipos de testes anteriores, já que os picos geralmente não fazem parte de um dia médio em produção. Também pode exigir adicionar, remover ou modificar processos no script que não estavam nos testes de carga média.

 Ocasionalmente, as equipes devem reformular o sistema para permitir ou priorizar recursos para os processos de alta demanda durante o evento.

 **Quando realizar um teste de pico**

 Este teste deve ser executado quando o sistema espera receber uma súbita onda de atividade.

 Quando o sistema espera esse tiipo de comportamento, o spike test ajuda a identificar como o sistema se comportará e se sobreviveerá à súbita corrida de carga. A carga está consideravelmente acima da média e pode se concentrar em um conjunto diferente de processos do que os outros tipos de teste.

 **Considerações**

 Ao se preparar para um teste de pico, considere o seguinte:

     - Concentre-se nos principais processos neste tipo de teste:

     Avalie se o pico de tráfego aciona processos iguais ou diferentes dos outros tipos de teste. Crie a lógica de teste de acordo.

     - O teste muitas vezes não termina:

     Eerros são comuns nesses cenários.

     - Correr, sintonizar, repetir:

     Quando seu sistema está em risco de eventos de pico, a equipe deve executar um spike test e ajustar o sistema várias vezes.

     - Monitorar:

     O monitoramento de back-end é essencial para os resultados bem-sucedidos desse teste.

 **Spike test em k6**

 Os principais diferenciais do spike test  são a simulação de cargas súbitas e muito altas. Não tem uma duração de platô (carga total) ou geralmente é breve.

 Às vezes, o teste pode exigir um platô de carga por um tempo. Se o platô é necessário, geralmente é curto. Uma rampa também pode ser rápida ou desnecessária, pois o objetivo é aumentar repentinamente a carga do sistema.

 Em um teste de pico, a carga aumenta rapidamente para um nível extremo. O período de ramp-down segue quando o teste atinge o máximo, retornando a 0 rapidamente.

 Um teste de pico recebe seu nome da forma de sua carga quando representado graficamente.

 **Análise dos resultados**

 Algumas métricas de desempenho a serem avaliadas em testes de pico incluem velocidades de pod, tempos de recuperação após a corrida de carga, tempo para voltar ao normal ou o comportamento em processos cruciais do sistema durante a sobrecarga.

 Descobrir como o sistema responde (se sobreviver) à pressa repentina ajuda a otimizá-lo para garantir que ele possa funcionar durante um evento real. Em alguns eventos, a carga é tão alta que todo o sistema pode ter que ser otimizado para lidar com os processos-chave. Nesses casos, repita o teste até que a confiança do sistema seja alta.

 ### Breakpoint Test (Testes de Ponto de Interrupção)

 O breakpoint test visa encontrar limites do sistema. As razões pelas quais você pode querer saber os limites incluem: 

      - Ajustar ou cuidar dos pontos fracos do sistema para realocar esses limites mais altos em níveis mais altos.

      - Para ajudar a planejar as etapas de correção nesses casos e se preparar para quando o sistema se aproximar desses limites.

 Em outras palavras, saber onde e como um sistema começa a falhar ajuda a se preparar para tais limites.

 Um ponto de interrupção aumenta para números irrealisticamente altos. Esse teste geralmente precisa ser interrompido manualmente ou automaticamente quando os limites começam a falhar. Quando esses problemas aparecem, o sistema atingiu seus limites.

 O teste de ponto de interrupção é outro tipo de teste sem consenso claro de nomeação. Em algumas conversas de teste, também é conhecido como teste de capacidade(capacity test), carga pontual(point load testing) e limite(limit testing).

 **Quando executar um teste de ponto de interrupção**

 As equipes executam umteste de ponto de interrupção sempre que precism conhecer os diversos limites de seu sistema. Algumas condições que podem justificar um teste de ponto de interrupção incluem o seguinte:

     - A necessidade de saber se a carga do sistema espera crescer continuamente.

     - Se o consumo atual de recursos for considerado alto.

     - Após alterações significativas na base de código ou na infraestrutura.

 A frequência com que executar esse tipo de teste depende do risco de atingir os limites do sistema e do número de alterações nos componentes de infraestrutura de provisionamento.

 Depois que breakpoint for executado e os limites do sistema tiverem sido identificados, você poderá repetir o teste após o exercício de ajuste para validar como ele afetou os limites. Repita o ciclo de ajuste até que a equipe esteja satisfeita.

 **Considerações**

 - Evite testes de ponto de interrupção em ambientes de nuvem elástica:

 O ambiente elástico pode crescer à medida que o teste avança, encontrando apenas o limite da fatura da sua conta na nuvem. *Se esse teste for executado em um ambiente de nuvem, é altamente recomendável desativar a elasticidade em todos os componentes afetados.*

 - Aumente a carga gradualmente:

 Um aumento repentino pode tornar difícil identificar por que e quando o sistema começa a falhar.

 - A falga do sistema pode significar coisas diferetnes para equipes diferentes:

 Talvez você queira identificar cada um dos seguintes pontos de falha:

     - Desempenho degradado. Os tempos de respoosta aumentaram e a experiência do usuário diminuiu.

     - Desempenho problemático. Os tempos de resposta chegam a um ponto em que a experiência do usuário se degrada severamente.

     - Timeouts. Os  processo estão falhando devido a tempos de resposta extremamente altos.

     - Erros. O sistema começa a responder com códigos de erro HTTP.

     - Falha do sistema. O sistema entrou em colapso.

 - Você pode repetir esse teste várias vezes

 Repetir após cada ajuste pode permitir que você empurre o sistema ainda mais.

 - Execute breakpoints tests somente quando o sistema for conhecido por executar em todos os outros tipos de teste.

 O breakpoint test pode ir longe se o sistema tiver um desempenho ruim com os tipos de teste anteriores.

 **Teste de breakpoint em k6**

 O teste de breakpoint é simples. A carga lentamente aumenta até um nível consideravelmente alto. Não tem platô, rampa ou outros degraus. E geralmente falha antes de chegar ao ponto indicado.

 k6 oferece duas maneiras de aumentar a atividade: aumentando VUs ou aumentando a taxa de transferência (modelos abertos e fachados). Diferente de outros tipos de teste de carga, que devem ser interrompidos quando o sistema se degrada até um determinado ponto, a carga do breakpoint aumenta mesmo quando o sistema começa a se degradar. Isso o torna recomendável usar ramping-arrival-rate para um teste de breakpoint.

 O teste continua aumentando a carga ou VUs até atingir o ponto de interrupção definido ou os limites do sistema, momento em que o teste pára ou é abortado.

O teste deve ser interrompido antes de concluir a execução agendada. Você pode parar o teste manualmente ou com um limite:

     - Para interromper o k6 manualmente na CLI, precione ctrl+C em Linux ou Windows, e comando. em Mac.

     - Para interromper o teste usando um limite, você deve definir abortOnFail como verdade. Para obter detalhes consulte o Limiares.

 **Análise dos resultados**

 Um teste de breakpoint deve causar falha no sistema. O teste ajuda a identificar os pontos de falha do nosso sistema e como o sistema se comporta quando atinge seus limites.

 Uma vez identificados os limites do sistema, a equipe tem duas opções: aceitá-los ou ajustar o sistema.

 Se a decisão for aceitar os limites, os resultados dos testes ajudam as equipes a se prepararem e agirem quando o sistema estiver se aproximando desses limites.

 Essas ações podem ser:

     - Evitar atingir tais limites.

     - Aumentar os recusos do sistema.

     - Implementar ações corretivas para o comportamento do sistema em seu limite.

     - Ajustar o sistema para ampliar seus limites.

 Se a ação tomada for ajustar o sistema, ajuste e repita o teste de ponto de interrupção para descobrir onde e se os limites do sistema foram movidos.

 Uma equipe deve determinar o número de repetições do teste de breakpoint, o quanto o sistema pode ser ajustado e até que ponto seus limites podem ser ajustados após cada exercício.