let soma = 0;
function somar(numbers) {
    for(let index = 0; index < numbers.length; index +=1) {
    soma += numbers[index];
    }
return soma / numbers.length;
}

console.log(somar([5, 9, 3, 19, 70, 8, 100, 2, 35, 27]));