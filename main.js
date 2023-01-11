//Ejercicio 1
console.log("\n-------------------------------\nEjercicio 1\n-------------------------------\n");

/*
    Crea una función que imprima todos los números primos entre el 1 y el 100.
        Después, tendrá que imprimir la suma de todos esos
*/

let primos = () => {
    let primo = true;   //Inicialmente suponemos que es primo. Si no lo es, lo pondremos en falso.
    let sumPrimo = 0;

    for(let i = 2; i <= 100; i++){
        for(let j = 2; j < i; j++){
            if(i % j == 0){     //Comprobamos si da resto = 0, si es asi, no es primo y nos salimos del bucle.
                primo = false;
                break;
            }
        }
        
        if(primo){      //Al ser primo lo imprimimos y sumamos
            console.log(i + ' es un numero primo');
            sumPrimo += i;
        } else {
            primo = true;        //Reseteamos en caso de que no haya sido primo
        }

        
    }
    
    return(sumPrimo);
}

console.log("La suma de los primos es: " + primos());

//Ejercicio 2
console.log("\n-------------------------------\nEjercicio 2\n-------------------------------\n");

/*
    Crea una función que reciba 2 arrays de números y devuelva uno unificado,
    sumando los números de la misma posición.
    Los arrays pueden tener diferente longitud.

    Elemplo: 
      Entrada: [1,4,5,7] [2,1,5,1,1]
      Salida: [3,5,10,8,1]
*/
let array1 = [1,4,5,7];
let array2 = [2,1,5,1,1];

let sumArray = (array1, array2) => {
    let arrayLength;
    let arraySum = [];

    (array1.length >= array2.length) ? arrayLength = array1.length : arrayLength = array2.length;

    for(let i = 0; i < arrayLength; i++){
        if(array1[i] == undefined){
            array1[i] = 0;
        }
        if(array2[i] == undefined){
            array2[i] = 0;
        }
        arraySum.push(array1[i] + array2[i]);
    }
    
    return (arraySum);
}

console.log(sumArray(array1, array2));

//Ejercicio 3
console.log("\n-------------------------------\nEjercicio 3\n-------------------------------\n");

/*
    Un palíndromo es una palabra que se deletrea de la misma manera en ambos sentidos.
    Crea una función que reciba una palabra y devuelva true o false si es o no palíndromo.

    Ejemplo:
        Entrada: 'oso'
        Salida: true
*/

let word = "oso";

let palindrome = (word) => {
    return (word == word.split("").reverse().join("")) ? true : false;
}

console.log(palindrome(word));

//Ejercicio 4
console.log("\n-------------------------------\nEjercicio 4\n-------------------------------\n");

/*
    Crea una función que reciba un array de personas y devuelva un string con las personas separadas
    por el símbolo recibido en el segundo argumento.

    Ejemplo:
        Entrada: (['Pedro', 'Gon', 'Luis', 'Fran'], '/')
        Salida: 'Pedro/Gon/Luis/Fran'
*/

let people = ['Pedro', 'Gon', 'Luis', 'Fran'];
let spacer = "/";

let peopleList = (people, spacer) => {
    let peopleSorted = "";

    for(let n of people){
        peopleSorted += n + spacer;
    }

    return(peopleSorted.slice(0, peopleSorted.length - 1));
}

console.log(peopleList(people, spacer));

//Ejercicio 5
console.log("\n-------------------------------\nEjercicio 5\n-------------------------------\n");

/*
    Crea una función que reciba un array de objetos persona y devuelva un array con el nombre de las personas
    cuyo id coincida con la posición del array en el que se encuentra.


    Ejemplo:
        Entrada: [{id:2, name:'Pedro'},{id:1, name:'Juan'},{id:5, name:'Luis'},{id:3, name:'Gon'},{id:4, name:'Fran'} ]
        Salida: ['Juan','Gon','Fran']
*/

let personas = [{id:2, 
                name:'Pedro'},
                {id:1, 
                name:'Juan'},
                {id:5, 
                name:'Luis'},
                {id:3, 
                name:'Gon'},
                {id:4, 
                name:'Fran'} ];


let nombres = (personas) => {
    let sortedPeople = [];

    for(let n in personas){
        
        (n == personas[n].id) ? sortedPeople.push(personas[n].name) : null;
    }

    return(sortedPeople);
}

console.log(nombres(personas));
