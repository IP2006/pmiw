class Puntuacion {

  static valorCarta(carta) {

    if (!carta || !carta.numero) {
      return 0;
    }
    
    const numero = carta.numero;
    
        if (numero === 1) {
      return 11;
    }
    

    if (numero === 11 || numero === 12 || numero === 13) {
      return 10;
    }
    
    if (numero >= 2 && numero <= 10) {
      return numero;
    }
    
    return 0;
  }
  
 
  static calcularPuntos(cartas) {

    if (!cartas || cartas.length === 0) {
      return 0;
    }
    
    let total = 0;
    let cantidadAses = 0;

    for (let carta of cartas) {
      const valor = this.valorCarta(carta);
      total += valor;
      
      
      if (carta.numero === 1) {
        cantidadAses++;
      }
    }
    
    while (total > 21 && cantidadAses > 0) {
      total -= 10; 
      cantidadAses--;
    }
    
    return total;
  }

  static sePaso(cartas) {
    return this.calcularPuntos(cartas) > 21;
  }
 
  static tiene21(cartas) {
    return this.calcularPuntos(cartas) === 21;
  }
}
