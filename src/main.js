function obtenerNumeroAzar() {
  return Math.floor(Math.random() * (8 - 0) + 0);
}

function establecerConsejo() {
  let consejos1 = [
    "Lee diariamente: Dedica un tiempo todos los días a la lectura, incluso si es solo por unos minutos. La práctica constante es clave para mejorar.",
    "Varía los géneros: Explora diferentes géneros literarios, desde ficción hasta no ficción, para ampliar tu exposición a diversos estilos y vocabulario.",
    "Utiliza un diccionario: Mantén un diccionario a mano mientras lees para buscar palabras desconocidas y comprender su significado.",
    "Contextualiza las palabras nuevas: Intenta comprender el significado de las palabras nuevas a través del contexto de la oración o el párrafo donde aparecen.",
    "Crea listas de vocabulario: Anota las palabras nuevas que encuentres durante la lectura y revísalas regularmente para reforzar tu memoria.",
    "Busca sinónimos: En lugar de repetir la misma palabra, busca sinónimos para enriquecer tu vocabulario y evitar la redundancia.",
    "Analiza la estructura: Observa cómo están construidas las frases y párrafos para comprender mejor la gramática y mejorar tu propia escritura.",
    "Participa en debates: Participar en debates te obliga a expresar tus ideas de manera clara y precisa, lo que puede ampliar tu vocabulario y mejorar tu habilidad para argumentar.",
    "Lee en voz alta: La lectura en voz alta puede ayudarte a identificar errores gramaticales y mejorar tu pronunciación, además de ayudarte a recordar nuevas palabras.",
  ];

  let consejos2 = [
    "Practica el vocabulario activo: Intenta usar las nuevas palabras en tus conversaciones y escritos para integrarlas en tu vocabulario activo.",
    "Haz resúmenes: Después de leer un texto, haz un resumen para procesar la información y recordar las palabras clave.",
    "Haz ejercicios de escritura creativa: Practica escribir historias cortas, poemas o ensayos para explorar nuevas palabras y estructuras gramaticales.",
    "Revise tu trabajo: Revisa tus escritos en busca de palabras repetitivas y busca alternativas más precisas o variadas.",
    "Sé paciente y constante: Mejorar tu vocabulario y habilidades de lectura y escritura lleva tiempo y práctica, así que sé paciente contigo mismo y mantén una actitud constante de aprendizaje.",
    "Usa aplicaciones de aprendizaje: Hay varias aplicaciones y herramientas en línea disponibles para mejorar tu vocabulario y habilidades lingüísticas, úsalas como recursos complementarios a tu estudio.",
    "Aprende raíces y prefijos: Comprender las raíces y prefijos comunes puede ayudarte a deducir el significado de palabras desconocidas y ampliar tu comprensión del vocabulario.",
    "Consume contenido variado: Lee libros, artículos, blogs y mira películas y series en diferentes idiomas y géneros para exponerte a una amplia gama de vocabulario y estilos de escritura.",
    "Consulta fuentes confiables: Al buscar definiciones o información sobre palabras, asegúrate de utilizar fuentes confiables y autorizadas para obtener información precisa y precisa.",
  ];

  let consejoIndex1 = obtenerNumeroAzar();
  let consejoIndex2 = obtenerNumeroAzar();
  let consejo1 = consejos1[consejoIndex1];
  let consejo2 = consejos2[consejoIndex2];

  // Extraer el título del consejo (desde el inicio hasta los dos puntos)
  let tituloConsejo1 = consejo1.substring(0, consejo1.indexOf(":") + 1);
  let tituloConsejo2 = consejo2.substring(0, consejo2.indexOf(":") + 1);

  // Extraer el cuerpo del consejo (después de los dos puntos)
  let cuerpoConsejo1 = consejo1.substring(consejo1.indexOf(":") + 1);
  let cuerpoConsejo2 = consejo2.substring(consejo2.indexOf(":") + 1);

  // Formatear el título en negrita y actualizar el contenido de los elementos HTML
  document.getElementById("consejo1").innerHTML = "<strong>" + tituloConsejo1 + "</strong>" + cuerpoConsejo1;
  document.getElementById("consejo2").innerHTML = "<strong>" + tituloConsejo2 + "</strong>" + cuerpoConsejo2;
}

establecerConsejo();

//Slider

let currentIndex = 0;

document.querySelector(".prev-button").addEventListener("click", () => {
  navigate(-1);
});

document.querySelector(".next-button").addEventListener("click", () => {
  navigate(1);
});

function navigate(direction) {
  const galleryContainer = document.querySelector(".gallery-container");
  const totalImages = document.querySelectorAll(".gallery-item").length;

  currentIndex = (currentIndex + direction + totalImages) % totalImages;
  const offset = -currentIndex * 100;

  galleryContainer.style.transform = `translateX(${offset}%)`;
}