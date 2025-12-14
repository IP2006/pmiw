class Juego {
  constructor(){
    this.jugador1 = new Jugador();
    this.jugador2 = new Jugador();
    this.mesa = new Mesa();
    this.mazo = new Mazo();
    
    this.juegoTerminado = false;
     this.mensaje = "";
    
    this.repartirCartas();
  }
  
  dibujar(){
    this.jugador1.dibujar(20);
    this.mesa.dibujar();
    this.jugador2.dibujar(300);
    
    let puntosJugador = this.jugador2.calcularPuntos();
    let puntosDealer = this.jugador1.calcularPuntos();
    
    
    
    fill(255);
    rect(440, 400, 200, 80);
    
    fill(0);
    textSize(12);
    text("Tus puntos: " + puntosJugador, 20, 240);
    text("Dealer: " + puntosDealer, 20, 60);
    text("Reglas:\n\n"+"El objetivo es llegar a 21 sin pasarte.\n" +
         "Pedir te suma una carta.\n" +
         "Plantarse deja que juegue el dealer.\n" +
         "Figuras valen 10.\n" +
         "Gana quien esté más cerca de 21.", 400, 50);
         
    text("Créditos:\n\n"+"Lucas Fernandez\n" +
         "Irene Ponce" , 400, 250);
    textSize(20);
    text("Reiniciar", 500, 440);
    
    
    if(!this.juegoTerminado){
      fill(255);
      rect(0, 400, 200, 80);
      rect(220, 400, 200, 80);
      fill(0);
      textSize(20);
      text("Pedir carta", 50, 440);
      text("Plantarse", 270, 440);
    }
  
    if(this.mensaje){
      fill(255, 0, 0);
      textSize(20);
      text(this.mensaje, 20, 280);
      fill(100);
      textSize(12);
      
    }
    
    if(!this.juegoTerminado){
      this.verificarEstadoJuego();
    }
  }
  
  repartirCartas(){
    this.jugador1.darCarta(this.mazo.obtenerCarta());
  
    this.jugador2.darCarta(this.mazo.obtenerCarta());
    this.jugador2.darCarta(this.mazo.obtenerCarta());
  }
  
  pedir(){
        //this.jugador2.mano = [];
    if (!this.juegoTerminado){
          this.jugador2.darCarta(this.mazo.obtenerCarta());
this.calcularPuntos();
    }
    
    if(this.juegoTerminado){
    return;
    }
     if(this.jugador2.sePaso()){
      this.terminarJuego("¡Te pasaste de 21! Perdiste.");
    } else if(this.jugador2.tiene21()){
      this.terminarJuego("¡Tienes 21!");
    }
     
  }
  
  plantarse(){
    if(!this.juegoTerminado){
    
    this.jugarDealer();
    
    this.juegoTerminado = true;

    this.determinarGanador();

  }
  }
  jugarDealer(){
    while(this.jugador1.calcularPuntos() < 17 && !this.jugador1.sePaso() && !this.juegoTerminado){
      this.jugador1.darCarta(this.mazo.obtenerCarta());
    }
  }
  
  
  determinarGanador(){
    let puntosJugador = this.jugador2.calcularPuntos();
    let puntosDealer = this.jugador1.calcularPuntos();
    
    if(this.jugador2.sePaso()){
      this.mensaje = "¡Te pasaste! Perdiste.";
    } else if(this.jugador1.sePaso()){
      this.mensaje = "¡El crupier se pasó! ¡Ganaste!";
    } else if(this.jugador2.esBlackjack() && !this.jugador1.esBlackjack()){
      this.mensaje = "¡Blackjack! ¡Ganaste!";
    } else if(puntosJugador > puntosDealer){
      this.mensaje = "¡Ganaste!";
    } else if(puntosJugador < puntosDealer){
      this.mensaje = "Perdiste.";
    } else {
      this.mensaje = "Empate.";
    }
    
    this.juegoTerminado = true;
  }
  
   verificarEstadoJuego(){
    if((this.jugador2.calcularPuntos() > 21) || this.jugador2.calcularPuntos() == 21){

      this.juegoTerminado = true;
    }
   }
   terminarJuego(mensaje){
    this.juegoTerminado = true;
    this.mensaje = mensaje;

    if(!this.jugador2.sePaso()){
    this.jugador1.darCarta(this.mazo.obtenerCarta());
      this.determinarGanador();
    }
  }
  }
