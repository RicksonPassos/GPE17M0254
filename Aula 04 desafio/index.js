const numeros = (n, pos) => {
    if (pos === 5) {
      console.log('Todos os números foram inseridos corretamente');
    }
  
    if (isNaN(n[pos])) {
      console.log(`O valor '${n[pos]}' não é numérico`);
    } else {
      console.log(n[pos]);
    }
  
    console.log(n, pos + 1);
  }
  
  const saida = prompt('Insira 5 números separados por vírgula').split(',');
  printn(saida);