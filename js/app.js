'use strict';
// Solicitando el nombre del usuario
const nombreDeUsuario = prompt("Hola, ¿me podrías decir tu nombre?");
alert("Bienvenido, " + nombreDeUsuario + " a nuestro juego.");

// Creando las preguntas basadas en tu perfil
const preguntas = [
  "¿Estoy involucrado en la educación técnica en CETEMIN?",  // Sí
  "¿Estoy trabajando en una academia para operadores de grúa torre?",  // No
  "¿Estoy colaborando en una empresa de alquiler de maquinaria para construcción de carreteras en Perú?",  // No
  "¿Estoy aprendiendo y trabajando con tecnologías como Python y Ruby?",  // No
  "¿Tengo tres hijos?",  // Sí
  "Intenta adivinar cuántos años de experiencia tengo en minería. Tienes 4 intentos.", //10 años
  "Menciona un metal de alta producción de nuestro país", // plata, zinc, cobre, plomo y oro


];

const respuestas = ["si", "no", "no", "no", "si"]; // Respuestas intercaladas
let cantidadDePreguntasCorrectas = 0;
let cantidadDePreguntasIncorrectas = 0;

// Mostrar cada pregunta en un prompt y registrar las respuestas
for (let i = 0; i < preguntas.length - 2; i++) {
  const respuestaDeUsuario = prompt(preguntas[i]);
  if (respuestas[i].toLowerCase() === respuestaDeUsuario.toLowerCase()) {
    cantidadDePreguntasCorrectas++;
    alert("¡Correcto! Fantástico, eres lo máximo.");
  } else {
    cantidadDePreguntasIncorrectas++;
    alert("¡Incorrecto! Uy, qué penita, no la chuntaste.");
  }
}
// Busqueda de mi experiencia en minería
const experienciaMineria = 10; // Años de experiencia en minería
for (let i = 0; i < 4; i++) {
  const respuestaExperienciaMineria = prompt(preguntas[5]);
  if (respuestaExperienciaMineria == experienciaMineria) {
    alert("¡Buena Calichín! Efectivamente tengo unos 10 añitos de experiencia en minería.");
    cantidadDePreguntasCorrectas++;
    break;
  } else if (respuestaExperienciaMineria > experienciaMineria) {
    alert("Uff.., ya quisiera, ya. Intenta con un número más bajo.");
  } else {
    alert("No te pases, no soy tan chibolo. Intenta un poquito más alto, calichín.");
  }
}


// Los metales mas importantes de nuestro país
const mineralesImportantes = ['plata', 'zinc', 'cobre', 'plomo', 'oro'];
let intentos = 6
for (let i = 0; i < intentos; i++) {
  const respuestaMineralesImportantes = prompt(preguntas[6].toLowerCase());
  let encontramosLaRespuesta = false
  for (let j = 0; j < mineralesImportantes.length; j++) {
    if (respuestaMineralesImportantes === mineralesImportantes[j]) {
      alert("Correcto, " + respuestaMineralesImportantes + " es uno de los minerales más importantes.");
      encontramosLaRespuesta = true;
      break;
    }
  
  }
  if (encontramosLaRespuesta) break;
  if (i < intentos - 1) alert("Incorrecto. Intenta de nuevo.");
  if (i == intentos-1 && !encontramosLaRespuesta) alert("Que gil eres, no pudiste dar con la respuesta. No eres minero");
}
if (!encontramosLaRespuesta && intentos > 0) {
  alert("Se acabaron tus intentos. Los minerales importantes son: plata, zinc, cobre, plomo, oro.");
}



// Informando al usuario sobre su desempeño en el juego
alert("Hola " + nombreDeUsuario + ", respondiste correctamente a " + cantidadDePreguntasCorrectas + " preguntas.");
alert(nombreDeUsuario + ", respondiste incorrectamente a " + cantidadDePreguntasIncorrectas + " preguntas.");
alert("Gracias, " + nombreDeUsuario + ", por participar en este juego de trivia. ¡Hasta la próxima!");
