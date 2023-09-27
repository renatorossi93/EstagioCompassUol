function VerificarEntrada(){
    NomeConvidade = document.getElementById('nome').value;
    ConvidadosRenato = ['Mayara', 'Marina', 'Athena', 'Sabrina', 'Henrique']
    if (ConvidadosRenato.includes(NomeConvidado)){
        document.getElementById('PermissaoDeEntrada').innerText = 'Você Pode Entrar!'
    }
    else {
        document.getElementById('PermissaoDeEntrada').innerText = 'Você não pode entrar!'
    }
}