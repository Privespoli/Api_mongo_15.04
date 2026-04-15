// sumar
export function sumar(num1, num2) {
  // Convertimos a número para evitar que "1" + "1" sea "11"
  return Number(num1) + Number(num2);
}

// restar
export function restar(num1, num2) {
  // Convertimos a número para evitar que "1" - "1" sea "11"
  return Number(num1) - Number(num2);
}

// multiplicación
export function multiplicar(num1, num2) {
  // Convertimos a número para evitar que "1" * "1" sea "11"
  return Number(num1) * Number(num2);
}

// división
export function dividir(num1, num2) {
  // Convertimos a número para evitar que "1" / "1" sea "11"
  return Number(num1) / Number(num2);
}

// numero mayor, menor y medio
export function compararnumeros(n1, n2, n3) {
  // Metemos los números en un array y los convertimos a Number por seguridad
  const lista = [Number(n1), Number(n2), Number(n3)];
  
  // Los ordenamos de menor a mayor
  lista.sort((a, b) => a - b);
  
  return {
    menor: lista[0],
    medio: lista[1],
    mayor: lista[2]
  };
}

// calcular modulo
export function calcularmodulo(a, b) {
  // El operador % obtiene el residuo de la división
  return Number(a) % Number(b);
}

export function fizzbuzz(inicio, fin) {
  let resultados = [];

  for (let i = Number(inicio); i <= Number(fin); i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      resultados.push("FizzBuzz");
    } else if (i % 3 === 0) {
      resultados.push("Fizz");
    } else if (i % 5 === 0) {
      resultados.push("Buzz");
    } else {
      resultados.push(i);
    }
  }
  
  return resultados;
}