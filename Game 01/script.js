function formatarMoeda(valor) {
    // Formata o valor para o formato "1.000.000,00"
    return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }).replace('R$', '');
  }
  
  function converterMoedas() {
    const valorWons = parseFloat(prompt("Digite um valor em Wons:"));
  
    if (isNaN(valorWons)) {
      alert("Por favor, digite um valor válido.");
      return;
    }
  
    const taxaWonReal = 0.0039; // Taxa de câmbio 31/03/2025
    const taxaWonDolar = 0.00073; // Taxa de câmbio 31/03/2025
    const taxaWonEuro = 0.00067;  // Taxa de câmbio 31/03/2025
  
    const valorReal = valorWons * taxaWonReal;
    const valorDolar = valorWons * taxaWonDolar;
    const valorEuro = valorWons * taxaWonEuro;
  
    alert(
      "Conversão:\n" +
      "Real: R$ " + formatarMoeda(valorReal) + "\n" +
      "Dólar: US$ " + formatarMoeda(valorDolar) + "\n" +
      "Euro: € " + formatarMoeda(valorEuro)
    );
  }
  
  converterMoedas();