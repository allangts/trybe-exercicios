function triangulo(angX, angY,angZ) {
    let graus;
    if (angX + angY + angZ === 180) {
    graus = true;
    }
    else {
        graus = false
    }
    return graus;
}