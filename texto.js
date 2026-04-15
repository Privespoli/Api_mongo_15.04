// palindromo

export function palindromo(palabra){
const textoLimpio = palabra.toLowerCase().replace(/[\W_]/g, '');
  
  // 2. Volteamos la palabra
  const textoReverso = textoLimpio.split('').reverse().join('');
  
  // 3. Comparamos
  return textoLimpio === textoReverso;
}

// Nombre e apellido
export function saludar(nombre, apellido) {
  // Utilizamos Template Literals (las comillas invertidas ``) 
  // para insertar las variables de forma sencilla.
  return `Hola ${nombre} ${apellido}, ¿Como vá tu día?  :D `;
}

// dato aleatório

export function datoaleatorio(datos) {
  // Convertimos los valores del objeto en un Array (ej: ['Juan', '25', 'España'])
  const valores = Object.values(datos);
  
  // Generamos un índice al azar basado en el largo del array
  const indiceAleatorio = Math.floor(Math.random() * valores.length);
  
  // Retornamos el valor elegido
  return valores[indiceAleatorio];
}

// ordenar arreglo
export function ordenararreglo(lista, orden) {
    // Creamos una copia para no modificar el original
    const resultado = [...lista];

    if (orden === 'asc') {
        return resultado.sort((a, b) => (a > b ? 1 : -1));
    } else if (orden === 'desc') {
        return resultado.sort((a, b) => (a < b ? 1 : -1));
    }
    
    return resultado; // Si no envían orden, lo devuelve tal cual
}

// indicar el tamaño
export function calculartamano(texto) {
  // .length cuenta letras, espacios y signos de puntuación
  return texto.length;
}
