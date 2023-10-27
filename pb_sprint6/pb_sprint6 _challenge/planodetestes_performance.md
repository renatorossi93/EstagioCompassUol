***PLANO DE TESTES DE PERFORMANCE DA API DE E-COMMERCE SERVEREST PARA A APRESENTAÇÃO DA SPRINT 6 NO PB DA COMPASS.UOL***

# SOBRE A REALIZAÇÃO DOS TESTES

 ## RECURSOS NECESSÁRIOS

 Será necessário ter uma máquina, seja um computador ou notebook, com Linux/Mac/Windows instalado e, também, instalados na máquina o editor de código VSCode ou similar, o Node.JS, o K6 e o pacote chocolatey. 
 ## PASSO A PASSO DE INSTALAÇÃO
*em breve*

# SOBRE OS TESTES
 
 Serão realizados testes de performance a fim de simular a medição do  desempenho da API REST ServeRest, portanto, os testes serão realizados localmente através da porta localhost:3000.

 O objetivo é aprender mais sobre testes de performance e sobre o K6.

 Os  testes irão simular, separadamente, as rotas /usuarios, /login e /produtos e, em conjunto, um fluxo de VUs que atravesse por cada uma dessas 3 rotas.

 ## SMOKE TESTS OU TESTES DE FUMAÇA / CARGA MÍNIMA

 Será realizado um teste de carga mínima com *2 VUs na rota login e no fluxo de testes*, a fim de se obter informações como: Se os scripts de testes estão sendo executados sem erros, conhecer as métricas de linha de base do sistema e se o ambiente do sistema está disponível.

 ## LOAD TESTS OU TESTES DE CARGA MÉDIA

 Será realizado um teste de carga média com *500 VUs na rota usuario e no fluxo de testes*, a fim de se obter informações como: Como está o desempenho em uma carga típica e identificar se há sinais de degradação durante *ramp-up*.

 ## STRESS TESTS OU TESTES DE ESTRESSE
 
 Será realizado um teste de estresse, com carga de *800 VUs na rota produtos e no fluxo de testes*, a fim de se obter informações como: Como está o desempenho em uma carga alta, como um dia de black friday, por um longo período de tempo e verificar se há degradação durante as fases de *ramp-up* e *ramp-down*.

 ## SPIKE TESTS OU TESTES DE PICO

 Será realizado um teste de pico, com a carga de *2000 VUs no fluxo de testes*, a fim de se obter informações como: Como se comporta o desempenho em um súbito aumento de carga para níveis extremamente altos e verificar se há problemas e degradação durante esse curto espaço de tempo.
