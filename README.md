# Taller Práctico: Introducción a JavaScript

Este taller te permitirá reforzar los conceptos vistos sobre JavaScript. Completa cada sección siguiendo las consignas, escribiendo y ejecutando código en el navegador (usando la consola) o en un archivo `.html` vinculado con `.js`.

---

## Parte 1: Explorando JavaScript

### 1.1 ¿Qué es JavaScript y en qué se diferencia de HTML y CSS?

JavaScript es un lenguaje de programación que permite hacer páginas web interactivas.  
- **HTML** estructura el contenido (texto, imágenes).
- **CSS** da estilo visual (colores, tamaños).
- **JavaScript** controla el comportamiento (interacciones, validaciones, animaciones).

---

### 1.2 Tres características principales de JavaScript:

1. Es interpretado (no necesita compilarse).
2. Permite interactividad con el usuario.
3. Es multi-paradigma (soporta programación orientada a objetos, funcional y estructurada).

---

### 1.3 ¿Qué significa que sea "interpretado" y "basado en eventos"?

- **Interpretado**: El navegador ejecuta el código línea por línea.
- **Basado en eventos**: El código puede responder a acciones del usuario, como clics o teclas.

---

## Parte 2: Variables y Tipos de Datos

```js
// Exploring JavaScript

//2.1
let name = "Andres";
console.log("Hi," + name);

//2.2
let whole = 7;
let decimal = 2.2;
let string = "Text string";
console.log(whole);
console.log(decimal);
console.log(string);

//2.3
const PI = 3.1416;
// const PI = 3.1415; error 

//2.4
//let worthless;
console.log(worthless);

//2.5
let Void = null;
let boolean = true;
console.log(Void, boolean);
```

## Parte 3: Entrada y Salida de Datos

```js
//Data Input and Output

//3.1
let age = prompt("Please enter your age:");
console.log(`you are ${age} years old`);

//3.2 
alert("Welcome to this web page");

//3.3
let answer = confirm("Do you want to continue?");
console.log("Answer:", answer);
```
## Parte 4: Operadores
```js
// 4.1
let a = 8;
let b = 3;
console.log("Suma:", a + b);
console.log("Resta:", a - b);
console.log("Multiplicación:", a * b);
console.log("División:", a / b);
console.log("Módulo:", a % b);

// 4.2
let texto1 = "Hola ";
let texto2 = "Mundo";
let resultado = texto1 + texto2;
console.log(resultado);

// 4.3
console.log(5 == "5");     // true
console.log(5 === "5");    // false
console.log(true && false); // false
console.log(false || true); // true
console.log(!true);         // false
```

## Parte 5: Condicionales

```js
// 5.1
let numero = prompt("Ingresa un número:");
numero = Number(numero);
if (numero > 10) {
    console.log("Es mayor que 10");
} else if (numero < 10) {
    console.log("Es menor que 10");
} else {
    console.log("Es igual a 10");
}

// 5.2
let usuario = prompt("¿Cuál es tu nombre?");
if (usuario === "Admin") {
    console.log("¡Bienvenido, administrador!");
} else {
    console.log("Hola, " + usuario);
}

// 5.3
let numero2 = prompt("Escribe un número:");
let resultado2 = (numero2 % 2 === 0) ? "Es par" : "Es impar";
console.log(resultado2);
```

## Parte 6: Consola del Navegador


```js
// 6.1
console.info("Este es un mensaje informativo");
console.warn("Este es un mensaje de advertencia");
console.error("Este es un mensaje de error");

console.group("Mensajes agrupados");
console.log("Primer mensaje");
console.log("Segundo mensaje");
console.groupEnd();

console.time("Tiempo de ejecución");
for (let i = 0; i < 1000000; i++) {
    // simulación de proceso
}
console.timeEnd("Tiempo de ejecución");

## Parte 7: Comentarios

// Este es un comentario de una sola línea

/*
Este es un comentario
de varias líneas.
Sirve para explicar partes más largas del código.
*/

let saludo = "Hola";
// Muestra el saludo en consola
console.log(saludo);

```
 ## Parte 8: Desafío Final
 
 ```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Taller JavaScript</title>
    <script>
        let nombre = prompt("¿Cuál es tu nombre?");
        let edad = prompt("¿Cuántos años tienes?");
        let ciudad = prompt("¿En qué ciudad vives?");

        console.log(`Hola ${nombre}, tienes ${edad} años y vives en ${ciudad}.`);
    </script>
</head>
<body>
    <h1>Abre la consola para ver el resultado</h1>
</body>
</html>
 ```
