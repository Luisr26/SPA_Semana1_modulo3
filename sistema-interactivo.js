
// Este es el paratod para los sonidos que agregamos a cada condicion
const ganar = new Audio('sonidos/sonido-de-cofre-291539.mp3')
const correcto = new Audio('sonidos/the-correct-answer-33-183620.mp3')
const incorrecto = new Audio('sonidos/incorrect-293358.mp3')

// Aqui estamos tomando los valores de los inputs para introducirlos en la logica de nuestro programa
let form = document.querySelector('#miFormulario');
let name_user = document.querySelector('#nombre');
let age_user = document.querySelector('#age');
let text = document.querySelector('#text-form')
form.addEventListener('submit', validarEdad);

// Esta funcion es la que lleva todo el peso de nuestro programa y esta nos ayuda a realizar toda la logica de nuestro programa
function validarEdad(event){
    // con este event prevent default nos ayuda a prevenir el comportamiento prodeterminado de un evento
    event.preventDefault();
    // el trim lo que hace es eliminar los espacios del string
    const name = name_user.value.trim();
    const age = age_user.value.trim();
    // Aqui comienzan los condicionales
    // lo que valida este condicional es que si el nombre esta vacio o si el valor dado es NaN (Not a Number) se use esta condicion
    if (name === "" || !isNaN(name)) {
        // Aqui lo que hacemos es imprimir el mensaje dado la condicion que se esta cumpliendo
        text.textContent = "❌ Ingresa un nombre válido (no números)";
        // Seguidamento aqui cambiamos de color el texto para que el usuario sepa que es un error
        text.style.color = "red";
        // Aqui reporducimos de manera consecuente un soniod de error
        incorrecto.play();
    // lo que valida esta condicion es que si la edad esta vacia o si el valor dado es NaN (Not a Number) se use esa condicion
    } else if (age === "" || isNaN(age)) {
        // Aqui lo que hacemos es imprimir el mensaje dado la condicion que se esta cumpliendo
        text.textContent = "❌ Ingresa una edad válida (solo números)";
        // Seguidamento aqui cambiamos de color el texto para que el usuario sepa que es un error
        text.style.color = "red";
        // Aqui reporducimos de manera consecuente un soniod de error
        incorrecto.play();
    // aqui se valida que la edad no sea mayor a 100 ni menor o igual a cero
    } else if (Number(age) > 100 || Number(age) <= 0) {
        // Aqui imprimimos un mensaje indicando que la edad no está dentro del rango permitido
        text.textContent = "❌ La edad no puede ser mayor a 100 o menor o igual a cero";
        // Cambiamos el color del texto a rojo para indicar que hay un error
        text.style.color = "red";
        // Reproducimos el sonido de error para alertar al usuario
        incorrecto.play();
    // aqui se valida si la edad es menor a 18
    } else if (age < 18) {
        // Imprimimos un mensaje motivacional para usuarios menores de edad
        text.textContent = `✅ ¡Hola ${name}, tu edad es ${age}. Sigue aprendiendo, vas por buen camino campeón!`;
        // Cambiamos el color del texto a verde para indicar que es una respuesta positiva
        text.style.color = "green";
        // Reproducimos el sonido correcto para retroalimentación positiva
        correcto.play();
    // aqui se valida si la edad esta entre 18 y 90 años
    } else if (age >= 18 && age <= 90) {
        // Imprimimos un mensaje motivador para usuarios adultos
        text.textContent = `✅ ¡Hola ${name}, tu edad es ${age}. Te invito a seguir explorando nuevas oportunidades, ¡sigue así!`;
        // Cambiamos el color del texto a verde para indicar éxito
        text.style.color = "green";
        // Reproducimos el sonido correcto para retroalimentación positiva
        correcto.play();
    // aqui se cubre el caso de edades mayores a 90 y hasta 100 (ya que mayor a 100 se validó antes)
    } else {
        // Imprimimos un mensaje amistoso para usuarios de edad avanzada
        text.textContent = `✅ ¡Hola ${name}, tu edad es ${age}. ¡Eres un abuelito buena onda muchacho!`;
        // Cambiamos el color del texto a verde para indicar una respuesta positiva
        text.style.color = "green";
        // Reproducimos un sonido especial de celebración
        ganar.play();
    }
}