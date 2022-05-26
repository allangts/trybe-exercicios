// altera texto do primeiro paragrafo
function changeTextParagraph () {
    let paragrafo = document.getElementsByTagName('p')[0];
    paragrafo.innerText = 'msous e heda dmd msotelclado me mosue tela';
}
changeTextParagraph();
// altera cor do quadrado vermelho para amarelo
function changeColor () {
    let colorClass = document.getElementsByClassName('main-content')[0];
    colorClass.style.backgroundColor = 'rgb(76,164,109)';
}
changeColor ();
// altera cor do quadrado vermelho para branco
function squareRed () {
    let squareRedColor = document.getElementsByClassName('center-content')[0];
    squareRedColor.style.backgroundColor = 'rgb(300,300,300)';
}
squareRed();
//corrige texto h1
function correctText () {
    let textH1 = document.getElementsByTagName('h1')[0];
    textH1.innerText = 'Exercício 5.1 - JavaScript';
}
correctText();
//deixar o paragrafo maiúsculo
function upperCase() {
    let paragraph = document.getElementsByTagName('p')[0];
    paragraph.innerText =  paragraph.innerText.toUpperCase();
}
upperCase ();
//exibir contents all tags p no console
function consoleP () {
    let tagP = document.getElementsByTagName('p');
    for (let index = 0; index < tagP.length; index +=1) {
        console.log(tagP[index].innerHTML); 
    }    
}
consoleP();