class Carta{
constructor(tipo, numero){
  this.tipo = tipo;
  this.numero= numero;
}

dibujar(posX, posY){
  fill(255);
  rect(posX, posY, 50, 70);
   
     if(this.tipo === "C" || this.tipo === "D"){
      fill(255, 0, 0);
    } else {
      fill(0);
    }
    textSize(10);
     text(this.tipo, posX +5, posY+20)

text(this.numero, posX +5, posY+40)

}
}
