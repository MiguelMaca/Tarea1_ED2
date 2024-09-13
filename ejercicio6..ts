//Estructura de Datos 2
//Miguel Alfonzo Macario Velasquez - 1597421
//Ejercicio 6

let numbers: number[] = [1, 2, 3, 4, 5];
let sum: number = 0;

for (let num of numbers) {
    console.log(num);
    sum += num;
}

console.log("Suma de todos los elementos:", sum);
