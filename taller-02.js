function findMax(numeros){
    let max = numeros[0];
    for (let i = 1; i != numeros.length; i++) {
        if (numeros[i] > max) {
            max = numeros[i];
        }
    }
    return max;
}

function includes(numeros, inc){
    for (let i = 0; i != numeros.length; i++) {
        if(numeros[i] == inc){
            return true;
        }
    }
    return false;
}

function sum(numeros){
    let sumtotal = 0;
    for (let i = 0; i != numeros.length; i++) {
       sumtotal += numeros[i];
    }
    return sumtotal;
}

function missingNumbers(numeros){
    const missing = [];
    let max = findMax(numeros);
    let min = findMin(numeros);
    index = 0;
    for (let i = min+1; i != max; i++) {
        if (includes(numeros, i) == false) {
            missing[index] = i;
            index +=1
        }
    }
    return missing;
}

//Función auxiliar para missingNumbers
function findMin(numeros){
    let min = numeros[0];
    for (let i = 1; i != numeros.length; i++) {
        if (numeros[i] < min) {
            min = numeros[i];
        }
    }
    return min;
}