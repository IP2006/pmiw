//https://youtu.be/C35EwyIHdTg
let miImagen;
let posX;
let posY;
let grosor;

function preload(){
miImagen = loadImage('data/data.png');
}

function lineasCentro() {
push();
translate(600, 200);
for ( repite = 0; repite<15; repite++ ) {
  for ( i=0; i<10; i++) {
    line(0, 0, 300, map(i, 0, 9, -200, 200));
  }
  rotate(radians(95));
}
pop();
  }

function elipsis(num, col, ancho){
  strokeWeight(ancho);
  noFill();
  stroke(col+20, 60, col);
  ellipse(600, 200, num+posX, num+posY);
  stroke(col-20, 60, col-10);
  ellipse(600, 200, num+5+ancho+posX, num+5+ancho+posY);
}

function setup() {
createCanvas (800, 400);
}

function draw() {
background(250);
if (mouseX<400) {
    posX = 0;
    posY =0;
    grosor=2;
    strokeWeight(3);
  } else
  {
    posX= mouseX-400;
    posY= mouseY;
    let m =dist(mouseX, mouseY, 600, 200);
    let grosor = (map(m, 0, 600, 0, 50));
    strokeWeight(grosor);
  }

  stroke(0);
  lineasCentro ();
  if ( dist (600, 200, mouseX, mouseY)>40 ){
    fill(150, 0, 120);
    noStroke();
    ellipse(600, 200, 70, 80);
  }
    elipsis(120, 180, 7);
    elipsis(200, 150, 12);
    strokeWeight(27);
    stroke(100, 60, 140);
    ellipse(600, 200, 310+posX, 320+posY);
  
  image(miImagen, 0, 0, 400, 400);
}
