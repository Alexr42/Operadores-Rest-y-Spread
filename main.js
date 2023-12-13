//1-. Escribe una función llamada sumEveryOther que pueda recibir cualquier cantidad de números y devuelva la suma de todos los argumentos.

const sumEveryOther = (...numeros) => {


    /*for (let i = 0; i < numeros.length; i++) {
        suma += numeros[i];
    };*/
    let resultado = numeros.reduce((a, b)=> a + b );

    return resultado;
};

console.log("ej1", sumEveryOther(5, 7, 87, 43));

//2-. Escribe una función llamada addOnlyNums que pueda recibir cualquier número de argumentos (incluyendo números y strings) y retorne la suma solo de los números.

const addOnlyNums = (...argumentos) => {


    let sumaNumeros = 0;

    argumentos.forEach((item) => {
        //console.log(typeof item)
        
        /*if (typeof item === "number") {
            sumaNumeros += item;
        };*/
        
       if (!isNaN(item)){
        sumaNumeros += Number(item);
       };
    });
    return sumaNumeros;
};

console.log("ej2", addOnlyNums("as", 24, false, "cuatro", "6", "tres", 2, "25"));


//3-. Escribe una función llamada countTheArgs que pueda recibir cualquier número de argumentos y devuelva un número que indique cuántos argumentos ha recibido.

const countTheArgs = (...argumento) => {
    return argumento.length;
};

console.log("ej3", countTheArgs("aunt", 234, true, "casa"));
//4-. Escribe una función llamada combineTwoArrays que reciba dos array cómo argumentos y devuelva solo un array que combine los dos (usando spread operator).

const combineTwoArrays = (...arrayGrande) => {
    return arrayGrande;
}

console.log("ej4", combineTwoArrays(...[1, 2, 3], ...[4, 5, 6]));


//5-. Escriba una función llamada onlyUniques que acepte cualquier número de argumentos y devuelva un array de elementos únicos, sin repetidos.

const onlyUniques = (...array) => {
    return array.filter((argumento, indice) => 
        array.indexOf(argumento) === indice
    );
};

console.log("ej5", onlyUniques(3, ...[1, 3], 2, "tres", 5, "cuatro", 3, "tres", 1, 2,  4, ...[6, 3, 3]));

//6-.Escriba una función llamada combineAllArrays que pueda recibir cualquier cantidad de arrays como argumentos y los combine todos en un solo array.

const combineAllArrays = (...combinaArray) => {
    
    return combinaArray.flat(Infinity);

};

console.log("ej6", combineAllArrays([1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11], [12, 13], [14, 15], [16, [17, 18, 30]]));

//7-.Escriba una función llamada sumAndSquare que reciba cualquier número de argumentos, los eleve al cuadrado y devuelva la suma de todos los valores cuadrados.

const sumAndSquare = (...sumaAlCuadrado) => {

    //return sumaAlCuadrado.flat(Infinity);

    let alCuadrado = 0

    sumaAlCuadrado.forEach((item) => {
       if (!isNaN(item)){
        alCuadrado += Number(Math.pow(item, 2));
       };
    });

    return alCuadrado;
    
}

console.log("ej7", sumAndSquare(1, 2, 4, "as", 4, "5", ...["6", 8]))