function iniciarJogo() {
    // Inicialização das variáveis
    let personagens = [];
    let viloes = [];
    let forcaPersonagens = 0;
    let forcaViloes = 0;

    // Lista de vilões possíveis
    const viloesPossiveis = [
        "Darth Vader",
        "Thanos",
        "Coringa",
        "Lord Voldemort",
        "Cruella de Vil",
        "Bellatrix Lestrange",
        "Victoria",
        "Dolores Umbridge",
    ];

    // Escolha dos personagens pelo usuário
    for (let i = 0; i < 3; i++) {
        let escolhaPersonagem = prompt("Digite o nome do seu personagem " + (i + 1) + ":");
        personagens.push(escolhaPersonagem);
        // Calcula a força do personagem
        forcaPersonagens += Math.floor(Math.random() * 10) + 1;
    }

    // Geração do time de vilões
    for (let i = 0; i < 3; i++) {
        let indiceAleatorio = Math.floor(Math.random() * viloesPossiveis.length);
        viloes.push(viloesPossiveis[indiceAleatorio]);
        // Calcula a força do vilão
        forcaViloes += Math.floor(Math.random() * 10) + 1;
    }

    // Determinação do vencedor
    let mensagemResultado = "";
    if (forcaPersonagens > forcaViloes) {
        mensagemResultado = "Seu time é muito forte! Você ganhou a disputa. Sua força foi " + forcaPersonagens + ".";
    } else if (forcaPersonagens < forcaViloes) {
        mensagemResultado = "Seu time é fraco! O computador ganhou a disputa com força de " + forcaViloes + ".";
    } else {
        mensagemResultado = "Os dois times têm a mesma força! Vocês empataram.";
    }

    // Exibição do resultado
    alert(mensagemResultado);

    // Exibição dos times no console (para fins de depuração)
    console.log("Seu time:", personagens, "Força:", forcaPersonagens);
    console.log("Time dos vilões:", viloes, "Força:", forcaViloes);
}