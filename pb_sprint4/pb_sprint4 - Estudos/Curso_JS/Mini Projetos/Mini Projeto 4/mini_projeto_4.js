// Exercício: Criar um Medidor de velocidade:

// Velocidade máxima até 70kmph
// A cada 5km acima do limite + 1 ponto na carteira de punição
// Math.Floor()
// Caso os pontos sejam maior do que 12 => "Carteira Suspensa"
verificarVelocidade(130);

function verificarVelocidade(velocidade) {
    const velocidadeMaxima = 70;
    const kmPorPonto = 5;

    if(velocidade <= velocidadeMaxima)
     console.log('Siga bem');
    else{
        const pontos = Math.Floor(((velocidade - velocidadeMaxima) / kmPorPonto));
        if (pontos >= 12)
         console.log('Carteira Suspensa!');
        else
         console.log('Pontos', pontos);
    }
    
}