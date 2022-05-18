const numberA = 9;
const numberB = 10;
const numberC = 8;

if(numberA > numberB && numberA > numberC){
    console.log('O número',numberA, 'é o maior.');
}
else if(numberB > numberA && numberB > numberC){
    console.log('O número',numberB, 'é o maior.');
}
else if(numberC > numberA && numberC > numberB){
    console.log('O número',numberC, 'é o maior.');
}
else{
    console.log('Há valores idênticos!');
}