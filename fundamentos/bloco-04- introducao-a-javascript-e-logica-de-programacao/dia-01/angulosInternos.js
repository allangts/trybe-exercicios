const numberA = 60;
const numberB = 60;
const numberC = 60;


if(numberA >= 0 && numberB >= 0 && numberC >= 0 && numberA + numberB + numberC == 180){
    console.log(true);
}
else{
    console.log(false);
    console.log('A soma dos ângulos não teve 180 como resultado ou algum ângulo recebeu um valor negativo.');
}