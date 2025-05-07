function esIsograma(palabra) {
    let letrasVistas = []; // Aquí guardaremos las letras que ya aparecieron
  
    // Convertimos a minúsculas y quitamos los que no son letras
    palabra = palabra.toLowerCase().replace(/[^a-z]/g, '');
  
    for (let letra of palabra) {
      if (letrasVistas.includes(letra)) {
        // Si la letra ya está en el array, entonces se repite
        return false;
      }
  
      // Si no está, la guardamos en el array
      letrasVistas.push(letra);
    }
  
    // Si terminamos el bucle sin encontrar repeticiones, es un isograma
    return true;
}

  
console.log(esIsograma("murciélago")); // true ✅
console.log(esIsograma("banana"));     // false ❌
console.log(esIsograma("Hola"));       // true ✅