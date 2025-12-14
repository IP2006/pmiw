class Mazo{
constructor(){
  this.cartas = [];
  for(let i = 0; i <10; i++){
  this.cartas.push(new Carta("D", i+1));
  }
  for(let i = 0; i <10; i++){
  this.cartas.push(new Carta("T", i+1));
  }
  for(let i = 0; i <10; i++){
  this.cartas.push(new Carta("P", i+1));
  }
  for(let i = 0; i <10; i++){
  this.cartas.push(new Carta("C", i+1));
}
}
obtenerCarta(){
return this.cartas[round(random(0,40))];
}
}
