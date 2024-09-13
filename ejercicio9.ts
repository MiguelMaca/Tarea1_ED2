//Estructura de Datos 2
//Miguel Alfonzo Macario Velasquez - 1597421
//Ejercicio 9

import { Persona } from './ejercicio8';

let persona1 = new Persona("Miguel", 21, "Quetzaltenango");

persona1.setNombre("Jose");
persona1.setEdad(20);
persona1.setCiudad("San Marcos");

console.log(persona1.getNombre(), persona1.getEdad(), "años,", persona1.getCiudad());
