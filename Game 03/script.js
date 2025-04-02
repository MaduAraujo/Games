function jogar() {
    
    let venceu = false;
    let rodada = 1;

    while (rodada <= 3) {
      console.log("Rodada:", rodada);

      let escolhaJogador = prompt("Nível " + rodada + ", escolha um vidro (1, 2 ou 3):");

      // Bloqueando a possibilidade de "roubar"
      if (escolhaJogador === null || escolhaJogador === "" || isNaN(escolhaJogador) || parseInt(escolhaJogador) < 1 || parseInt(escolhaJogador) > 3) {
        alert("Escolha inválida! Digite um número entre 1 e 3.");
        continue; // Volta para o início do loop para o jogador tentar novamente
      }

      let pisoQuebrado = Math.floor(Math.random() * 3) + 1;

      if (parseInt(escolhaJogador) === pisoQuebrado) {
        // Escolheu o vidro que estava quebrado
        alert("O vidro quebrou! Fim do jogo.");
        rodada = 1000; // Força a saída do loop
      } else {
        alert("Passou! O piso quebrado estava na ponte: " + pisoQuebrado);
      }
      rodada = rodada + 1;
    }

    if (rodada === 4) {
      alert("Parabéns! Você Ganhou.");
      venceu = true;
    } else {
      venceu = false;
    }

    console.log("Jogador venceu:", venceu);
  }