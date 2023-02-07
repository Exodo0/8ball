const Respuestas = [
  "Sí",
  "No",
  "Tal vez",
  "No lo sé",
  "Pregúntame más tarde",
  "No cuentes con ello",
  "Definitivamente sí",
  "Definitivamente no",
  "No puedo predecirlo ahora",
  "Concéntrate y pregunta de nuevo",
  "No cuentes con ello",
  "Mi respuesta es no",
  "Mi respuesta es sí",
  "No puedo decirte eso ahora",
  "Lo dudo",
  "No lo creo",
  "Al parecer sí",
];
module.exports = () =>
  Respuestas[Math.floor(Math.random() * Respuestas.length)];
