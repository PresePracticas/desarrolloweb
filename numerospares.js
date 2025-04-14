// Consignas:
// 1 - Sumar pares:
// Crear una variable global que inicie en 0
// Crear una funcion que reciba un numero como parametro. La funcion debe:
// - Recorrer todos los numeros desde el 0 hasta el numero recibido por la funcion.
// - Sumar solo los numeros pares
// - Guardar el resultado de la suma en la variable global.
// 2 - Promedio de notas
// Crear una funcion que reciba 5 notas numericas como parametro. La funcion debe:
// - Calcular el promedio de notas.
// - Mostar un mensaje segun corresponda. Promedio menor a 6 ("Deaprobo"), Mayor a 6 ("Aprobo") y mayor de 8 ("Promociono")
// Imprimir por consola el promedio, el mensaje correspondinete y la nota mas baja y alta

var sumaglobal = 0 ;

function sumar(num){
    let index, suma=0;
    for(index=0; index<=num; index++){
        if(index%2==0)
        {
            suma=suma+index
        }

    }
    sumaglobal = suma
 

}

function notamax(nota1, nota2, nota3, nota4, nota5) {
    let max = nota1; 
    if (nota2 > max) max = nota2;
    if (nota3 > max) max = nota3;
    if (nota4 > max) max = nota4;
    if (nota5 > max) max = nota5;
    return max; 
}


function notamin(nota1, nota2, nota3, nota4, nota5) {
    let min = nota1;
    if (nota2 < min) min = nota2;
    if (nota3 < min) min = nota3;
    if (nota4 < min) min = nota4;
    if (nota5 < min) min = nota5;
    return min; 
}


function promedio(nota1, nota2, nota3, nota4, nota5) {

    let promedio = (nota1 + nota2 + nota3 + nota4 + nota5) / 5;
    let max = notamax(nota1, nota2, nota3, nota4, nota5);
    let min = notamin(nota1, nota2, nota3, nota4, nota5);


    console.log("promedio:", promedio);
    
    if (promedio > 8) {
        console.log("promociono");
    } else if (promedio >= 6) {
        console.log("aprobo");
    } else {
        console.log("desaprobo");
    }


    console.log("mas alta:", max);
    console.log("mas baja:", min);
}


promedio(9, 7, 8, 6, 5);  

