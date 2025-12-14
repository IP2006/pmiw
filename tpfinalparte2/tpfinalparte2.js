//https://youtu.be/ERkuo1ywoIc


let juego;

function setup() {
createCanvas(640,480);
juego = new Juego();
}

function draw() {
  background(200);
juego.dibujar();
}
function mousePressed(){
  if(mouseX<200 && mouseY>400){
juego.pedir();
  }
  if(mouseX>220 && mouseX < 400 && mouseY >400){
    juego.plantarse();
  }
   if(mouseX>440 && mouseY >400){
    juego = new Juego();
}

}
