function convertidorTemp(c) {
    let f = (c * 9/5) + 32;
    return f;
}

function resolvedor(a, b, c, positivo) {
    let discriminante = b * b - 4 * a * c;
    if (discriminante < 0) {
        return null;
    }
    let raizDiscriminante = Math.sqrt(discriminante);
    if (positivo) {
        return (-b + raizDiscriminante) / (2 * a);
    } else {
        return (-b - raizDiscriminante) / (2 * a);
    }
}

function mejorParidad(num) {
    if (num % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

function peorParidad(num) {
    if (num === 1) {
        return false;
    } else if (num === 2) {
        return true; 
    } else if (num === 3) {
        return false;
    } else if (num === 4) {
        return true; 
    } else if (num === 5) {
        return false; 
    } else if (num === 6) {
        return true; 
    } else if (num === 7) {
        return false; 
    } else if (num === 8) {
        return true; 
    } else if (num === 9) {
        return false; 
    } else if (num === 10) {
        return true;
    } else {
        return null;
    }
}


