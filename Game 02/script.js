function jogar() {

    let idade = prompt("Quantos anos você tem?")
    
    if (idade < 18) {
        alert("Você não pode jogar!")
    }
    
    if (idade >= 18) {
        escolhaJogador = prompt ("Digite 1 - Pedra, Digite 2 - Papel ou Digite 3 - Tesoura")
        escolhaComputador = Math.floor(Math.random() * 3) + 1;
        
        //Jogador Pedra, Computador Pedra => Empate
        //Jogador Tesoura, Computador Tesoura => Empate
        //Jogador Papel, Computador Papel => Empate
        
        if (escolhaJogador == escolhaComputador) {
            alert("Empate!")
        }
        
        //Jogador Pedra, Computador Papel => Computador vence
        if (escolhaJogador == 1) {
            if (escolhaComputador == 2) {
                alert("Computador Venceu, escolheu papel!")
            }
            //Jogador Pedra, Computador Tesoura => Jogador vence
            if (escolhaComputador == 3) {
                alert("Jogador Venceu, computador tesoura!")
            }
        }
        
        //Jogador Papel, Computador Pedra => Jogador vence
        if(escolhaJogador == 2) {
            if (escolhaComputador == 1) {
                alert("Jogador Venceu, computador pedra!")
            }
            //Jogador Papel, Computador Tesoura => Computador vence
            if (escolhaComputador == 3) {
                alert("Computador Venceu, escolheu tesoura!")
            }
        }
        
        //Jogador Tesoura, Computador Pedra => Computador vence
        if (escolhaJogador == 3) {
            if (escolhaComputador == 1) {
                alert("Computador venceu, escolheu pedra!")
            }
            //Jogador Tesoura, Computador Papel => Jogador vence
            if (escolhaComputador == 2) {
                alert("Jogador Venceu, computador papel!")
            }
        }
        alert("A escolha do computador foi: " + escolhaComputador)
    }
}