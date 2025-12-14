class Jugador{
constructor(){
  this.mano = [];
  this.posY;
  this.cartas=[];
}

  darCarta(carta){
    this.cartas.push(carta);
}

dibujar(posY){
  for(let i=0; i<this.cartas.length;i++){
  this.cartas[i].dibujar(100+(i*80), posY);
  }
}
  obtenerCartaAlHacerClick(){
    this.calcularPuntos();
    for(let i=0; i<this.cartas.length;i++){
        return this.cartas[i];
        }
  }
  
    calcularPuntos() {

    return Puntuacion.calcularPuntos(this.cartas);
 
  }
  
  sePaso() {
    return Puntuacion.sePaso(this.cartas);
  }
  
  tiene21() {
    return Puntuacion.tiene21(this.cartas);
  }
}
