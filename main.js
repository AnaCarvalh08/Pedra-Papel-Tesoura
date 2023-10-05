function jogadaIA(){
    const escolhas = ['pedra', 'papel', 'tesoura'];
    //console.log(escolhas);
    const escolhaAleatoria = Math.floor(Math.random() * escolhas.length);
    //console.log(escolhaAleatoria);
    //console.log(escolhas[0]);

    return escolhas [escolhaAleatoria];
}
jogadaIA()
// Array é uma lista
// Cada valor do Array tem uma posição
// nomes que você pode ver nos códigos:
// posição // índice / /index
// todo array começa da posição 0
// length = comprimento do array 

function jogar (escolhaDoJogador){
    console.log(escolhaDoJogador);
    const escolhaIA = jogadaIA();
    console.log(escolhaIA);
    const resultado = determinaVencedor (escolhaDoJogador, escolhaIA);
    document.getElementById("resultado").textContent = `Você escolheu ${escolhaDoJogador}, o computador escolheu ${escolhaIA}. ${resultado}`;
}

function determinaVencedor(escolhaDoJogador, escolhaIA){
    if (escolhaDoJogador === escolhaIA){
        return "Empate!";
    }

    else if ( (escolhaDoJogador === 'pedra' && escolhaIA === 'tesoura') ||
              (escolhaDoJogador === 'papel' && escolhaIA === 'pedra')  ||
              (escolhaDoJogador === 'tesoura' && escolhaIA === 'papel') ){
        return "Você venceu!"
    }
    else{
        return "O computador venceu"
    }

}