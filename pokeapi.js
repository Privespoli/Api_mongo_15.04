export function pokeapifun(numero) {
  const n = Number(numero);
  // Validamos que el número esté en el rango solicitado
  if (n < 1 || n > 151) {
    return null;
  }
  // Usamos la URL de los assets oficiales de GitHub de PokeAPI (imágenes PNG)
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${n}.png`;
}