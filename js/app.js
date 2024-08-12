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
  "¿Tengo tres hijos?"  // Sí
];

const respuestas = ["si", "no", "no", "no", "si"]; // Respuestas intercaladas
let cantidadDePreguntasCorrectas = 0;
let cantidadDePreguntasIncorrectas = 0;

// Mostrar cada pregunta en un prompt y registrar las respuestas
for (let i = 0; i < preguntas.length; i++) {
  const respuestaDeUsuario = prompt(preguntas[i]);
  if (respuestas[i].toLowerCase() === respuestaDeUsuario.toLowerCase()) {
    cantidadDePreguntasCorrectas++;
    alert("¡Correcto! Fantástico, eres lo máximo.");
  } else {
    cantidadDePreguntasIncorrectas++;
    alert("¡Incorrecto! Uy, qué penita, no la chuntaste.");
  }
}

// Informando al usuario sobre su desempeño en el juego
alert("Hola " + nombreDeUsuario + ", respondiste correctamente a " + cantidadDePreguntasCorrectas + " preguntas.");
alert(nombreDeUsuario + ", respondiste incorrectamente a " + cantidadDePreguntasIncorrectas + " preguntas.");
alert("Gracias, " + nombreDeUsuario + ", por participar en este juego de trivia. ¡Hasta la próxima!");
