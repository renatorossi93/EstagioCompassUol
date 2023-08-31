# RESUMO

***Esta é a documentação da SPRINT 3 do curso de QA da Compass.uol***

**Esse arquivo, ao final da sprint, deve conter:**
- Criação de um planejamento de testes para a aplicação do challenge desta sprint
- A especificação da análise da API
- Mapa mental utilizado para a análise da API
- Planejamento inicial para criação de testes automatizados para o challenge desta sprint

*O planejamento de testes para a aplicação deverá serfeito no início da Sprint e poderá ter modificações ao longo da mesma.*

*O planejamento deverá incluir as rotas de /usuários, /login e /produtos.*



### Primeiro planejamento de testes - Feito no dia 1 da sprint 3

User Story: como um vendedor de uma loja com cadastro já realizado, gostaria de poder me autenticar no Marketplace da ServeRest para poder cadastrar, editar, atualizar e excluir meus produtos.

Observações:
- O cadastro do usuário vendedor já está feito, agora é trataremos sobre cadastro e gerenciamento de produtos.
- Prestar atenção no termo *autenticação*, o usuário quer se autenticar antes de mais nada.
- Crud dos produtos: Cadastrar(POST), editar (PUT), atualizar (PATCH?) e excluir (DELETE). [talvez Listagem de produtos?(GET)]
- Evidenciar SEMPRE os testes

**PRIMEIROS TESTES PLANEJADOS:**

- Auntenticar, um usuário cadastrado, com Token Bearer
- Logar no Marketplace com um usuário cadastrado
- Tentar autenticar um usuário não cadastrado e retornar um status code 401 de não autorizado
- Autenticar todos os usuários cadastrados com a senha correta
- Tentar autenticar usuário cadastrado mas com senha incorreta para ver se dá erro
- Verificar se todas as autenticações geram um token bearer
- Verificar o tempo de validade de um token, não pode ser acima de 10 minutos.
- Verificar o cadastro de produtos, se dá pra cadastrar produtos sem preço, sem nome, sem quantidade...
- Verificar se as edições de produtos funcionam e estão ok
- verificar se as atualizações de produtos funcionam e estão ok
- verificar se a exclusão de produto funciona e está ok
- verificar se dá para cadastrar mais de um produto com o mesmo nome, identificação, valor, etc... e, em caso positivo, verificar se a atualização, alteração ou exclusão de um dos produtos não afeta o outro.
- Realizar testes de ciclo de usuário com início, meio e fim.