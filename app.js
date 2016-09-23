var timer;

var limiteNuvem = 1200;
var tamanhoNuvem = 300;


function Nuvem(x, y){
  var x = x;
  var y = y;

  this.reiniciaMovimento = function(){
    if(x > limiteNuvem){
      x = - tamanhoNuvem;
    }
  };

  this.deslocaNuvem = function(){
    x += 10;
  };

  this.drawN = function() {
    var canvas = document.getElementById('canvas');
    if (canvas.getContext) {
      var ctx = canvas.getContext('2d');
      ctx.fillStyle = "white";

      ctx.beginPath();
      //var x = 400;
      //var y = 50;
      //400 50
      ctx.moveTo(100+x,200+y);
      ctx.quadraticCurveTo(150+x,160+y,200+x,200+y);
      ctx.moveTo(150+x,200+y);
      ctx.quadraticCurveTo(200+x,140+y,250+x,200+y);
      ctx.moveTo(200+x,200+y);
      ctx.quadraticCurveTo(250+x,160+y,300+x,200+y);
      ctx.moveTo(100+x,200+y);
      ctx.fill();
      ctx.closePath();

      var centerX = 0;
      var centerY = 0;
          var radius = 50;
      ctx.save();
      ctx.translate(200+x, 203+y);
      ctx.scale(2, 0.5);
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
      ctx.restore();
      ctx.fill();
      ctx.closePath();
    }
  }

}


var x = 10,
y = 0;


var nuvem1 = new Nuvem(400, 50);
var nuvem2 = new Nuvem(0, 0);
var nuvem3 = new Nuvem(-100, 200);



function main(){
  timer = setInterval(movimenta, 100);
}



function movimenta(){
  nuvem1.reiniciaMovimento();
  nuvem2.reiniciaMovimento();
  nuvem3.reiniciaMovimento();
  nuvem1.deslocaNuvem();
  nuvem2.deslocaNuvem();
  nuvem3.deslocaNuvem();
  nuvem1.drawN();
  nuvem2.drawN();
  nuvem3.drawN();

  draw();
}




function draw() {
  drawCeu();
  drawGrama();
  nuvem1.drawN();
  nuvem2.drawN();
  nuvem3.drawN();
  drawArvore();
  drawPassaros();
  drawRaios();
  drawSol();
}



function drawGrama() {
  var canvas = document.getElementById('canvas');
  if (canvas.getContext){
    var ctx = canvas.getContext('2d');
    var grd = ctx.createLinearGradient(0,650,0,900);
    ctx.beginPath();

    grd.addColorStop(0,"rgb(0,165,0)");
    grd.addColorStop(1,"#FFFF33");
    //grd.addColorStop(1,"white");

    // Fill with gradient
    ctx.fillStyle = grd;

    //ctx.fillStyle = "rgb(0,165,0)";
    // Quadratric curves example
    //ctx.beginPath();
    ctx.moveTo(-100,700);
    ctx.quadraticCurveTo(100,550,300,700);
    ctx.moveTo(200,700);
    ctx.quadraticCurveTo(300,600,500,700);
    ctx.moveTo(400,700);
    ctx.quadraticCurveTo(300,610,700,700);
    ctx.moveTo(600,700);
    ctx.quadraticCurveTo(800,620,900,700);
    ctx.moveTo(800,700);
    ctx.quadraticCurveTo(800,650,1100,700);
    ctx.moveTo(1000,700);
    ctx.quadraticCurveTo(1100,640,1300,700);
    //ctx.quadraticCurveTo(25,100,50,100);
    //ctx.quadraticCurveTo(50,120,30,125);
    //ctx.quadraticCurveTo(60,120,65,100);
    //ctx.quadraticCurveTo(125,100,125,62.5);
    //ctx.quadraticCurveTo(125,25,75,25);
    //ctx.stroke();
    ctx.fill();
    ctx.closePath();
    ctx.beginPath();
    ctx.fillRect(0,695,1200,800);
    ctx.closePath();

  }
}

function drawSol() {
var canvas = document.getElementById('canvas');
  if (canvas.getContext){
    var ctx = canvas.getContext('2d');
    var x = 1000,
    y = 100,
    // Radii of the white glow.
    innerRadius = 5,
    outerRadius = 70,
    // Radius of the entire circle.
    radius = 60;

    var gradient = ctx.createRadialGradient(x, y, innerRadius, x, y, outerRadius);
    ctx.beginPath();
    gradient.addColorStop(0, "rgb(255,255,204)");
    gradient.addColorStop(1, "rgba(255, 255, 0, 0.9)");

    ctx.arc(x, y, radius, 0, 2 * Math.PI);

    ctx.fillStyle = gradient;
    ctx.fill();
    ctx.closePath();
        //ctx.stroke();
  }
}

function drawCeu (){
var canvas = document.getElementById('canvas');
  if (canvas.getContext){
    var ctx = canvas.getContext('2d');
    var grd = ctx.createLinearGradient(0,0,0,750);
    ctx.beginPath();

    grd.addColorStop(0,"rgb(0,200,255)");
    grd.addColorStop(1,"white");

    // Fill with gradient
    ctx.fillStyle = grd;
    //ctx.fillRect(10,10,150,80);
    //ctx.fillStyle = "rgb(0,200,255)";
    ctx.fillRect(0,0,1200,800);
    ctx.closePath();
    }
}

function drawNuvem(){
var canvas = document.getElementById('canvas');
if (canvas.getContext) {
    var ctx = canvas.getContext('2d');
    ctx.fillStyle = "white";

    ctx.beginPath();
    ctx.moveTo(100,200);
    ctx.quadraticCurveTo(150,160,200,200);
    ctx.moveTo(150,200);
    ctx.quadraticCurveTo(200,140,250,200);
    ctx.moveTo(200,200);
    ctx.quadraticCurveTo(250,160,300,200);
    ctx.moveTo(100,200);
    ctx.fill();
    ctx.closePath();
    var centerX = 0;
    var centerY = 0;
        var radius = 50;
    ctx.save();
    ctx.translate(200, 203);
    ctx.scale(2, 0.5);
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
    ctx.restore();
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    var x = 100;
    var y = 150;
    //400 50
    ctx.moveTo(100+x,200+y);
    ctx.quadraticCurveTo(150+x,160+y,200+x,200+y);
    ctx.moveTo(150+x,200+y);
    ctx.quadraticCurveTo(200+x,140+y,250+x,200+y);
    ctx.moveTo(200+x,200+y);
    ctx.quadraticCurveTo(250+x,160+y,300+x,200+y);
    ctx.moveTo(100+x,200+y);
    ctx.fill();
    ctx.closePath();

    var centerX = 0;
    var centerY = 0;
        var radius = 50;
    ctx.save();
    ctx.translate(200+x, 203+y);
    ctx.scale(2, 0.5);
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
    ctx.restore();
    ctx.fill();
    ctx.closePath();

  }
}



function drawRaios() {
  var canvas = document.getElementById('canvas');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');
    ctx.fillStyle = "rgba(255,255,224, 0.2)";
    ctx.beginPath();
      ctx.moveTo(1000,100);
      ctx.lineTo(0,150);
      ctx.lineTo(0,25);
      ctx.fill();
    ctx.closePath();

    ctx.beginPath();
      ctx.moveTo(1000,100);
      ctx.lineTo(650,0);
      ctx.lineTo(800,0);
      ctx.fill();
    ctx.closePath();

    ctx.beginPath();
      ctx.moveTo(1000,100);
      ctx.lineTo(940,0);
      ctx.lineTo(1020,0);
      ctx.fill();
    ctx.closePath();

    ctx.beginPath();
      ctx.moveTo(1000,100);
      ctx.lineTo(1250,0);
      ctx.lineTo(1120,0);
      ctx.fill();
    ctx.closePath();

    ctx.beginPath();
      ctx.moveTo(1000,100);
      ctx.lineTo(1200,75);
      ctx.lineTo(1200,125);
      ctx.fill();
    ctx.closePath();

    ctx.beginPath();
      ctx.moveTo(1000,100);
      ctx.lineTo(1200,200);
      ctx.lineTo(1200,275);
      ctx.fill();
    ctx.closePath();

    ctx.beginPath();
      ctx.moveTo(1000,100);
      ctx.lineTo(1200,350);
      ctx.lineTo(1200,450);
      ctx.fill();
    ctx.closePath();

    ctx.beginPath();
      ctx.moveTo(1000,100);
      ctx.lineTo(1200,600);
      ctx.lineTo(1200,800);
      ctx.lineTo(1150,800);
      ctx.fill();
    ctx.closePath();

    ctx.beginPath();
      ctx.moveTo(1000,100);
      ctx.lineTo(850,800);
      ctx.lineTo(1025,800);
      ctx.fill();
    ctx.closePath();

    ctx.beginPath();
      ctx.moveTo(1000,100);
      ctx.lineTo(700,800);
      ctx.lineTo(550,800);
      ctx.fill();
    ctx.closePath();

    ctx.beginPath();
      ctx.moveTo(1000,100);
      ctx.lineTo(200,800);
      ctx.lineTo(400,800);
      ctx.fill();
    ctx.closePath();

    ctx.beginPath();
      ctx.moveTo(1000,100);
      ctx.lineTo(25,800);
      ctx.lineTo(0,800);
      ctx.lineTo(0,650);
      ctx.fill();
    ctx.closePath();

    ctx.beginPath();
      ctx.moveTo(1000,100);
      ctx.lineTo(0,300);
      ctx.lineTo(0,500);
      ctx.fill();
    ctx.closePath();
    }
}

function drawArvore() {
  var canvas = document.getElementById('canvas');
  if (canvas.getContext){
    var ctx = canvas.getContext('2d');
    var gradient1 = ctx.createRadialGradient(425, 625, 80, 425, 375, 150);
    ctx.beginPath();
    gradient1.addColorStop(1, "rgba(160,82,45, 1)");
    gradient1.addColorStop(0, "rgba(100,50,25, 1)");
    ctx.fillStyle = gradient1;
    ctx.beginPath();


    ctx.moveTo(350,675);
    ctx.quadraticCurveTo(450,550,325,450);
    ctx.lineTo(475,450);
    ctx.quadraticCurveTo(400,600,500,675);
    ctx.fill();
    ctx.closePath();

    var gradient = ctx.createRadialGradient(425, 375, 80, 425, 375, 150);
    ctx.beginPath();
    gradient.addColorStop(1, "rgba(0,100,0, 1)");
    gradient.addColorStop(0.5, "rgb(0,128,0)");
    gradient.addColorStop(0.25, "rgba(32,132,32,1)");
    gradient.addColorStop(0, "rgba(34,139,34,0.99)");
    ctx.fillStyle = gradient;

    ctx.beginPath();
      ctx.arc(400, 475, 50, 0, 2 * Math.PI);
      ctx.arc(350, 425, 50, 0, 2 * Math.PI);
      ctx.fill();
    ctx.closePath();

    ctx.beginPath();
      ctx.arc(325, 375, 55, 0, 2 * Math.PI);
      ctx.fill();
    ctx.closePath();

    ctx.beginPath();
      ctx.arc(350, 325, 55, 0, 2 * Math.PI);
      ctx.fill();
    ctx.closePath();

    ctx.beginPath();
      ctx.arc(400, 300, 60, 0, 2 * Math.PI);
      ctx.fill();
    ctx.closePath();

    ctx.beginPath();
      ctx.arc(425, 287.5, 65, 0, 2 * Math.PI);
      ctx.fill();
    ctx.closePath();

    ctx.beginPath();
      ctx.arc(450, 300, 60, 0, 2 * Math.PI);
      ctx.fill();
    ctx.closePath();

    ctx.beginPath();
      ctx.arc(500, 325, 55, 0, 2 * Math.PI);
      ctx.fill();
    ctx.closePath();

    ctx.beginPath();
      ctx.arc(525, 375, 55, 0, 2 * Math.PI);
      ctx.fill();
    ctx.closePath();

    ctx.beginPath();
      ctx.arc(450, 475, 50, 0, 2 * Math.PI);
      ctx.arc(500, 425, 50, 0, 2 * Math.PI);
      ctx.fill();
    ctx.closePath();

    ctx.beginPath();
      ctx.arc(425, 375, 75, 0, 2 * Math.PI);
      ctx.fill();
    ctx.closePath();
  }
}

function drawPassaros() {
  var canvas = document.getElementById('canvas');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');
    ctx.strokeStyle = "rgb(112,128,144)";
    ctx.beginPath();
    ctx.lineWidth = 2;
      ctx.moveTo(1050,600);
      ctx.lineTo(1060,610);
      ctx.lineTo(1067,602);
      ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
      ctx.lineWidth = 3;
      ctx.moveTo(1100,555);
      ctx.lineTo(1105,570);
      ctx.lineTo(1115,565);
      ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
      ctx.lineWidth = 4;
      ctx.moveTo(975,585);
      ctx.lineTo(1000,600);
      ctx.lineTo(1010,565);
      ctx.stroke();
    ctx.closePath();
  }
}

var contexto;
var timer;
var canvas;
