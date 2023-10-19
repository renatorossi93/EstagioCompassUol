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

     1 - Aumetne ainda mais a atividade do script em um ramp-up mais lento até que ele atinja um número acima da média de usuários ou taxa de transferência.

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

 O teste de imersão difere de um teste de carga médi na duração od teste. Em um teste de imersão, a duração da carga de pico (geralmente uma quantidade média) se estende por várias horas e até dias. Embora a duração seja consiederavelmente maior, os períodos de ramp-up e ramp-down de um teste de imersão são os mesmos de um teste de carga média. 

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

 ### Spike Test



 ### Breakpoint Test