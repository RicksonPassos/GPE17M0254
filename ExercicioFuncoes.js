const calculadora = {
    somar: (n1,n2) => {
        return n1 + n2;
    },
    subtrair: (n1,n2) =>{
        return n1-n2;
    },
    multiplicar: (n1,n2) => {
        return n1*n2;
    },
    dividir: (n1, n2) => {
        return n1/n2;
    },
    fatorial: (n) => {
        let calc = [];
        while(n > 0){
            calc.push(n);
            n--;
        }
        let fator = calc.join("*");
        console.log(`!${n} = ${fator}`);
    }
}

calculadora.fatorial(5);