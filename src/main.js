function obtenerNumeroAzar() {
  return Math.floor(Math.random() * (4 - 0) + 0);
}

function establecerConsejo() {
  let consejos1 = [
    "Lee diariamente: Dedica un tiempo todos los días a la lectura, incluso si es solo por unos minutos. La práctica constante es clave para mejorar.",
    "Varía los géneros: Explora diferentes géneros literarios, desde ficción hasta no ficción, para ampliar tu exposición a diversos estilos y vocabulario.",
    "Utiliza un diccionario: Mantén un diccionario a mano mientras lees para buscar palabras desconocidas y comprender su significado.",
    "Contextualiza las palabras nuevas: Intenta comprender el significado de las palabras nuevas a través del contexto de la oración o el párrafo donde aparecen.",
    "Crea listas de vocabulario: Anota las palabras nuevas que encuentres durante la lectura y revísalas regularmente para reforzar tu memoria.",
  ];

  let consejos2 = [
    "Practica el vocabulario activo: Intenta usar las nuevas palabras en tus conversaciones y escritos para integrarlas en tu vocabulario activo.",
    "Haz resúmenes: Después de leer un texto, haz un resumen para procesar la información y recordar las palabras clave.",
    "Haz ejercicios de escritura creativa: Practica escribir historias cortas, poemas o ensayos para explorar nuevas palabras y estructuras gramaticales.",
    "Revise tu trabajo: Revisa tus escritos en busca de palabras repetitivas y busca alternativas más precisas o variadas.",
    "Sé paciente y constante: Mejorar tu vocabulario y habilidades de lectura y escritura lleva tiempo y práctica, así que sé paciente contigo mismo y mantén una actitud constante de aprendizaje.",
  ];

  let consejoIndex1 = obtenerNumeroAzar();
  let consejoIndex2 = obtenerNumeroAzar();
  let consejo1 = consejos1[consejoIndex1];
  let consejo2 = consejos2[consejoIndex2];

  document.getElementById("consejo1").textContent = "1. " + consejo1;
  document.getElementById("consejo2").textContent = "2. " + consejo2;
}

establecerConsejo();