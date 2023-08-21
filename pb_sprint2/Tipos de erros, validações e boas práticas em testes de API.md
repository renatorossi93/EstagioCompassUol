## QUAIS VALIDAÇÕES DEVO REALIZAR EM UMA API:

O primeiro endpoint que nós iremos ver é sobre *status*, ou seja, como validar o status de uma API.

É simples, você pega uma url da API e acrescenta /status para obter uma resposta do status desta url ou desta API. Também podemos fazer isso através do *Postman* usando get + url/status.

## BOAS PRÁTICAS PARA TESTAR APIs:

O primeiro passo é a gente entender o projeto. A partir disso, eu sei o que é o meu projeto, qual o seu objetivo, então eu consigo escolher ferramentas e tecnologias que serão utilizadas na criação do teste. Eu consigo, também, saber qual é o fluxo, quais as integrações, etc, que todo o meu sistema vai ter.

Outro ponto importante é a documentação, essa documentação da API está pronta? Está completa? pois a documentação será a referância que iremos usar para avaliar se os métodos estão corretos, quais são os endpoints, quais as respostas eu preciso ter.

### Validação da API:

Com a documentação pronta, eu preciso saber como eu vou validar, planejar os cenários de testes, escolher a validação, etc. Por exemplo, que tipo de teste eu vou aplicar?! Então eu posso aplicar um teste funcional, baseado nos requisitos do projeto, eu posso fazer um teste não funcional baseada na performance da minha API, e/ou fazer testes estruturais na arquitetura da API. Então eu irei avaliar, também, se a documentação está correta, se o status code está sendo retornado de forma correta, se o header (cabeçalho) está correto, se o body (corpo) está correto, então  temos que validar a API como um todo, realizar também testes de usabilidade, etc.

### Segurança da API:

Outro ponto muitoimportante é a segurança da api e o teste de segurança da API não deve, de forma alguma, ser deixado de lado e subestimado. 

Para lidar com reservas em uma API, por exemplo, você precisará de autenticação, isto é, criar um token de acesso.

## COMO FAZER TESTES FUNCIONAIS EM API REST:

Quando falamos em testes funcionais, a primeira coisa que deve vir a sua mente são as regras de negócios. Nas regras de negócios virão informações relevantes que não constarão em um swagger ou documentação de uma API.

***Então testes funcionais é validar a função do software***

Então, quando falamos de função normalmente a gente tem os dados de entrada, o processamento, e os dados de saída recebidos na resposta.

Então testes funcionais são testes que validam a função, não importando se o teste é feito a nível de interface de usuário, a nível de API ou a nível de código.

***Teste de software não é só sobre a abordagem empírica dos testes, também é sobre a abordagem sistemática, ou seja, o uso de técnicas de teste formais para identificar o que testar.***

Então veja como se usa uma técnica, talvez a técnica mais simples de aplicar dentro da área de teste de software para você perceber que estamos deixando um ou mais testes a não serem executados aqui neste exemplo:

RN (Regra de negócio): Apenas administradores podem registrar novas viagens.

Olhando para esta regra de negócio eu preciso fazer um exercício mental para identificar, por exemplo:
- quais são as entradas dentro deste requisito. Neste caso, a entrada é: **Credencial**, e dentro desta entrada nós temos EXPLICITAMENTE a credencial de *administrador* e a de *usuário*. Mas aí a técnica deve entrar em ação, "e o que mais?" você tem que pensar. Então começamos a raciocinar e encontrar outras credenciais. Por exemplo, neste caso há também a credencial *inválida*, há também a credencial *expirada*.

Então, baseada nessa regra de negócio, após conseguir raciocinar sistemáticamente e encontrar as  ENTRADAS deste requisito, você visualizar melhor o que é preciso  ser feito. Pense assim: Qual o requisito? "Apenas administradores podem registrar novas viagens" Então todas as entradas deste requisito são:
- Administrador = Registrar
- Usuário = Não registrar
- Invalida = Não registrar
- Expirada = Não  registrar

A partir deste pensamento, descobrimos QUATRO TESTES a serem executados. Então, com base nesta técnica de raciocínio sistemático, você econtrou todos os testes de um determinado requisito a serem executados e, então, poderá partir para fazê-los.

## TIPOS DE ERRO (BACKEND):

Existem alguns tipos de erro em relação a:

- **Gravidade.** O nível de gravidade ajuda a identificar quanto ou que tipo de dano pode ser causado pelo defeito: Perigoso, destrutível, degradado, sem solução alternativa, afetando mas existe solução alternativa, sem impacto, etc.

- **Prioridade.** Significa quão rápido ou quão perfeitamente um  bug é erradicado. Se um programa tiver um erro a prioridade será removê-lo o mais rápido possível. Então, a prioridade do defeito é decidida pelo gerente do programa ou pelo líder do projeto. A prioridade é regida pela importância do requisito.

- **Risco.** É qualquer evento improvável e incerto com impacto positivo ou negativo no sucesso do projeto. Primeiro os fatores são identificados e, em seguida, suas categorias são criadas com base na probabilidade e no impacto. A análise de risco é usada para filtrar e analisar o risco com base no impacto no seu negócio. Uma matriz de análise de risco é criada para definir a probabilidade x impacto de risco.

Então. Sempre que um defeito for identificado a gente deve reportar ele para a área responsável com as informações básicas: qual a sua categoria, severidade, prioridade e sempre descrever o bug.

- **Erros causados por documentação.** Uma documentação mal escrita, requisitos que geram dúvidas, um mocap da tela não feito corretamente, etc.

Então, por exemplo, se tivermos um Swagger errado na nossa API, isto irá prejudicar os nossos testes, causando falhas no teste.

- **Erros causados por massa de dados.** A massa de dados é usada para avaliar e validar a aceitabilidade dos limites operacionais. Então, quando você não tem esses limites bem definidos, isto acarreta em problemas. Sendo assim, é preciso identificar isto desde o início, saber os limites do nosso sistema e validá-los.