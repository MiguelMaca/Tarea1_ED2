//Estructura de Datos 2
//Miguel Alfonzo Macario Velasquez - 1597421
//Ejercicio 7

function factorial(n: number): number {
    if (n == 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

console.log("Factorial de 7:", factorial(7));
