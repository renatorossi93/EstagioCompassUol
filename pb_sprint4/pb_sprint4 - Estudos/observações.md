***Nestes aprendizados e exercícios de testes eu posso ter obtido um ou mais problemas. Estarei listando quais e como os resolvi a título de de informação e documentação.***

### 1 - Erro de execução de teste infinito

Ao tentar executar um dos testes proposto na vídeoaula do curso de Javascript, acabei tendo problemas com um teste que ficava executando infinitamente, onde o terminal imrimia infinitamente o número 5 quebrando o meu navegador caso eu tente visualizar o teste direto por ele através do terminal do navegador (apertando F12).
Claramente era um erro de código, mas eu revisei e o comparei com o código do vídeo e não encontrava onde errei.

Então pedi ajuda ao Chat GPT da OpenAI para encontrar uma solução.

O Chat GPT não encontrou nada de errado com o meu código e, após eu passar um verdadeiro "pente fino" na revisão do mesmo, eu descobri o que estava ocorrendo. Ao final de uma operação While eu deveria finalizar a execução da mesma com "i--;" para que o console.log parasse de imprimir infinitamente. 

Dito e feito! Erro corrigido com sucesso.  Após corrigir o erro eu expliquei ao  Chat GPT o que ocorreu e só assim ele percebeu o mesmo erro.

### 2 - Ambiente não reconhecia Mocha e Chai configurados

Apesar de ter instalado o mocha e o chai corretamente e ter conseguido realizar os primeiros  testes conforme as vídeoaulas ensinavam, quando posteriormente eu vim realizar novos e os mesmos testes, encontrei problemas de execução. 

Recorri ao Chat GPT da OpenAI para entender melhor o que estava ocorrendo e encontrar a solução.

Descobri que era um problema onde o PowerShell do Windows bloqueava o ambiente de rodar o Mocha pois a biblioteca do Mocha não estava assinada digitalmente e o meu Windows estava projetado para não executar scripts sem assinatura digital. 

Resolvi o problema executando o PowerShell como administrador e altrerando a política de execução do Windows de "AllSigned" para "RemoteSigned", permitindo então que o ambiente do Mocha seja executado corretamente. Parei também de usar um plugin de execução de código através do "output" do VSCode e passei a executar os códigos diretamente no terminal usando o comando npm test. O plugin em questão que eu estava usando era o "Code Runner".

Aqui está o link da minha "conversa" com o Chat GPT onde ele me ajuda a resolver as duas questões:

[Conversa com chat gpt para erros 1 e 2](https://chat.openai.com/c/f570e4fd-9444-4faf-8b33-f6d62bc2c740)