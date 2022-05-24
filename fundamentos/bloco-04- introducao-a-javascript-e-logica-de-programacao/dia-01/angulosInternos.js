function graus(angX, angY,angZ) {
    let triangulo;
    if (angX + angY + angZ === 180) {
    triangulo = true;
    }
    else {
        triangulo = false
    }
    return triangulo;
}