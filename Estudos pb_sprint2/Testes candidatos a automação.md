# TESTES CANDIDATOS À AUTOMAÇÃO

A automação de testes não deve ser aleatória. Devemos seguir alguns critérios para escolher a prioridade de quais testes vamos automatizar. O foco é o retorno de valor para o time e para o projeto. A partir do que foi apresentado nesta lição pense em como aplicar estes critérios no seu plano de testes e em outros exercícios.

***Não é todo teste que pode e deve ser automatizado***

## TESTES CANDIDATOS A AUTOMAÇÃO EM FLUXOS E NÃO EM LISTAS

### COMO A GENTE SELECIONA OS TESTS CANDIDATOS A AUTOMAÇÃO?

A primeira dica é a *comunicação*, nesse caso é a comunicação franca e honesta com o cliente. Nesta comunicação é preciso que fique muito claro *quais são as prioridades do cliente*, *quais são os fluxos mais importantes que o cliente considera que precisam ser automatizados para se obter sempre uma resposta adequada*,... Porque a automação irá sempre responder ao feedback rápido de status da aplicação, então no feedback rápido a gente precisa ter tudo aquilo que é essencial para o cliente, que ele saiba que está funcionando antes de cada entrega. 

**Isso é primordial em qualquer tipo de automação,ou seja, do conjunto de testes para a automação.**

É importante também que a gente elabore uma lista de prioridades vinculadas ao segmento e vinculada á aplicação do cliente.

Na sequência, é importante também a gente verificar os *riscos*, isto é, quais partes da aplicação tem um risco maior e, através deste risco maior, a gente pode também definir alguns cenários para fazer parte do nosso conjunto de testes automatizados. *Como assim riscos?* Se pergunte: se determinada parte da aplicação estiver com problemas e/ou não estiver funcionando, qual o impacto disso? Se o impacto for alto, sempre relacionado àquele objetivo da aplicação, este cenário tem risco elevado e deve ser um bom candidato à automação.

Continuando, tudo aquilo que você perceber que são tarefas repetitidas, que toda sprint são realizados os mesmos testes, então provavelmente estes itens também são bons candidatos para serem automatizados, pois, a automação irá evitar gastos desnecessários de esforço humano, de esforço financeiro, de recursos, sendo que é uma tarefa que é sempre repetida e a automação poderia realizar muito bem este papel.

**Outro ponto, polêmico mas que necessitamos discutir é a questão das *demandas novas*.**

Demandas novas não podem ter os seus testes automatizados sem que antes exista uma execução de teste manual.

A demanda nova levaria um tempo para ser automatizada, só que ela também precisa rapidamente que todos os stakeholders do projeto saibam que aquela demanda está funcionando, que os bugs foram removidos, para que ela possa ser disponibilizada no ambiente produtivo. 

Então, em um primeiro momento, a automação não vai conseguir fazer esse papel, o teste manual não é excluído devido a automação. Nesse caso, existem equipes de testadores manuais, analistas de testes, etc, que vão abordar e realizar esses testes manuais em demandas novas e, em um segundo momento, essas demandas novas vão  ter os cenários de teste avaliados, seja pelo  time de testes ou pelo arquiteto de automação, com o objetivo de selecionar qual cenário de teste dessas demandas novas devem ser incluídos na automação de teste. 

Aí as justificativas podem ser duas: 

- Se essa demanda nova torna-se uma prioridade, ou seja, importante para o negócio do cliente, então os cenários de teste dessa demanda nova devem fazer parte dos cenários de teste de automação.

- Se essa demanda nova,caso não esteja, pelo menos o *core* dela na automação, irá fazer com que a automação quebre. Pois, ao passo que as *sprints* vão ocorrendo a aplicação vai sendo alterada e, se a automação não tiver a devida manutenção, ela irá ser obsoleta, quebrada, não irá rodar quando a automação for executada. Então é preciso analisar se, pelo menos o core da demanda nova, muito provavelmente precisará ser incluída no conjunto de testes da automação, em um segundo momento, para que a própria automação seja atualizada.