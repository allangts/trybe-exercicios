//BUSCANDO ELEMENTOS

//Acesse o elemento elementoOndeVoceEsta.
const elementoOndeVoceEsta= document.getElementById('elementoOndeVoceEsta');
// console.log(elementoOndeVoceEsta);

//Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
const paiElementoOndeVoceEsta = elementoOndeVoceEsta.parentElement
paiElementoOndeVoceEsta.style.color = 'rgb(0,100,0)'

//Acesse o primeiroFilhoDoFilho e adicione um texto a ele.
const primeiroFilhoDoFilho = elementoOndeVoceEsta.firstElementChild
primeiroFilhoDoFilho.innerText = 'Hoje, não me procure.';

//Acesse o primeiroFilho a partir de pai.
const paiPrimeiroFilho = pai.firstElementChild;
// console.log(paiPrimeiroFilho);

//Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.
const primeiroFilho = elementoOndeVoceEsta.previousElementSibling;
// console.log(primeiroFilho);

//Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.
const atencao = elementoOndeVoceEsta.nextSibling
// console.log(atencao);

//Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta
const terceiroFilho = elementoOndeVoceEsta.nextElementSibling;
// console.log(terceiroFilho);

//Agora acesse o terceiroFilho a partir de pai.
const terceiroFilho2 = pai.lastElementChild.previousElementSibling;
// console.log(terceiroFilho2);

//CRIANDO ELEMENTOS

//Crie um irmão para elementoOndeVoceEsta.

const paiTag = document.querySelector('#pai');
let frutas = ['caju', 'maçã','banana']; 

for ( let index = 0; index < frutas.length; index +=1) {
    let nomesFrutas = frutas[index];

    let frutasList = document.createElement('p');
    frutasList.innerText = nomesFrutas;
    
    paiTag.appendChild(frutasList);
}

//Crie um filho para elementoOndeVoceEsta.
let osCincoElementos = ['fogo', 'água', 'terra', 'relâmpago', 'vento'];

for ( let index = 0; index < osCincoElementos.length; index +=1) {
    let nomesCincoElementos = osCincoElementos[index];
    
    let cincoElementosList = document.createElement('p');
    cincoElementosList.innerText = nomesCincoElementos;
    
    elementoOndeVoceEsta.appendChild(cincoElementosList);

}

//Crie um filho para primeiroFilhoDoFilho
let agua = ['sólido', 'líquido', 'gasoso'];

for ( let index = 0; index < agua.length; index +=1) {
    let estadosAgua = agua[index];

    
    let estadosAguaList = document.createElement('li'); 
    estadosAguaList.innerText = estadosAgua;
    estadosAguaList.id = 'estadosAguaList';
    
    primeiroFilhoDoFilho.appendChild(estadosAguaList);
}

//A partir desse filho criado, acesse terceiroFilho.
const terceiroFilho3 = document.getElementById('estadosAguaList').parentElement.parentElement.nextElementSibling;
console.log(terceiroFilho3);

//Remova todos os elementos filhos de paiDoPai exceto pai, elementoOndeVoceEsta e primeiroFilhoDoFilho.

const pai = document.getElementById('pai');



for ( let index = 0; index < pai.childNodes.length; index +=1) {
    const criancaAtual = pai.childNodes[index];
    
    if(criancaAtual.id !== 'elementoOndeVoceEsta') {
        criancaAtual.remove();
        
    }
}
const segundoEUltimoFilhoDoFilho = document.getElementById('segundoEUltimoFilhoDoFilho');
    segundoEUltimoFilhoDoFilho.remove();