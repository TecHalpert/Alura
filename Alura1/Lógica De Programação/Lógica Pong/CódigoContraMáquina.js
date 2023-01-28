  // variáveis 
let xBolinha = 300;
let yBolinha = 200;
let dBolinha = 15;
let rBolinha = dBolinha/2;
  // dBolinha = diametro rBolinha = raio

let xRaquete = 5;
let yRaquete = 150; 
let cRaquete = 10;
let hRaquete = 90;
  //c = comprimento h = altura

let xRaquete2 = 585;
let yRaquete2 = 150;

let xVelocidade = 6;
let yVelocidade = 6;
let yVelocidade2;

let colidiu = false;
let pontos = 0;
let pontos2 = 0;

//sons

let trilha;
let raquetada;
let ponto;

function bolinha(){
  circle(xBolinha,yBolinha,dBolinha);
}

function movimentacao(){
  xBolinha += xVelocidade;
  yBolinha += yVelocidade;
}

/*function bolinhaNaoFicaPresa(){
    if (xBolinha - rBolinha < 0){
      xBolinha = 23
    }
}
*/

 function verificaColisaoBolinha(){
  if(xBolinha + rBolinha > width ||
     xBolinha - rBolinha < 0 ) {
    xVelocidade *= -1;       
  }
  if(yBolinha + rBolinha > height ||
     yBolinha - rBolinha < 0){ 
    yVelocidade *= -1;
  }
}

 // raquete

function verificaColisaoRaquete(x,y){
    colidiu = collideRectCircle(x, y,cRaquete,hRaquete, xBolinha, yBolinha, dBolinha);
  if (colidiu){
    xVelocidade *= -1;
    raquetada.play();
  }
}

function raquete(x,y){
  rect(x,y,cRaquete,hRaquete);
}

function moverRaquete(){
  if(keyIsDown(UP_ARROW)){
    yRaquete -= 10;
  }
  if(keyIsDown(DOWN_ARROW)){
    yRaquete += 10;
  }
}

function moverRaquete2(){
  yVelocidade2 = yBolinha - yRaquete2 - cRaquete/2 - 30;
  yRaquete2 += yVelocidade2;
}

/* function verificaColisaoRaquete() {
    if (xBolinha - rBolinha < xRaquete + cRaquete              
    && yBolinha - rBolinha < yRaquete + hRaquete
    && yBolinha + rBolinha > yRaquete) {
        xVelocidade *= -1;
    }
}
*/

function placar(){
  stroke(255);
  textSize(16);
  textAlign(CENTER);
  fill(color(255,140,0));
  rect(150, 10, 40,20);
  rect(450,10,40,20);
  //     x, y, l, c
  fill(255);
  text(pontos, 170,26);
  text(pontos2, 470,26);
}

function marcaPonto(){
  if(xBolinha > 590){
    pontos+=1;
    ponto.play();
  }
  if (xBolinha < 10){
    pontos2+=1;
    ponto.play();
  }
}

function preload(){
  trilha = loadSound("trilha.mp3");
  ponto = loadSound("ponto.mp3");
  raquetada = loadSound("raquetada.mp3");
}

function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

function draw() {
  background(0);
  bolinha();
 // bolinhaNaoFicaPresa()
  movimentacao();
  raquete(xRaquete,yRaquete);
  raquete(xRaquete2,yRaquete2);
  moverRaquete();
  moverRaquete2();
  verificaColisaoBolinha();
  verificaColisaoRaquete(xRaquete,yRaquete);
  verificaColisaoRaquete(xRaquete2,yRaquete2);
  placar();
  marcaPonto();
}



