let soma = 0;
function somar(numbers) {
    for(let index = 0; index < numbers.length; index +=1) {
    soma += numbers[index];
    }
    let vinte;
    if(( soma / numbers.length) > 20) {
        vinte = 'valor maior que 20'
    }
    else {
        vinte = 'valor menor que 20'
    }
    return vinte;
}