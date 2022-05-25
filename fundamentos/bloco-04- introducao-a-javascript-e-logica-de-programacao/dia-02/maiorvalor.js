function highestCount(numbers) {
    
    let maiorNumero = numbers[0];
    let contarMaiorNumero = 0;
    
    for ( let index = 0; index < numbers.length; index +=1) {
        if (maiorNumero < numbers[index]) {
            maiorNumero = numbers[index];
        };
    };
    return maiorNumero;
};