// Everaldo Gomes - 23/09/2016 - everaldo.gomes@ifpr.edu.br
// Baseado no Trabalho de Letícia Fernandes

COR_INICIO_SOL = "rgb(255,255,204)";
COR_FIM_SOL = "rgba(255, 255, 0, 0.9)";
COR_RAIOS_SOL = "rgba(255,255,224, 0.2)";

function Sol(context, largura, altura){
  this.context = context;
  this.largura = largura;
  this.altura = altura;
}

Sol.prototype.desenha = function(){
  this.desenhaRaios();
  this.desenhaSol();
}

Sol.prototype.desenhaSol = function(){
  var ctx = this.context;
  ctx.save();
  var x = 1000,
  y = 100,
  // Radii of the white glow.
  innerRadius = 5,
  outerRadius = 70,
  // Radius of the entire circle.
  radius = 60;

  var gradient = ctx.createRadialGradient(x, y, innerRadius, x, y, outerRadius);
  ctx.beginPath();
  gradient.addColorStop(0, COR_INICIO_SOL);
  gradient.addColorStop(1, COR_FIM_SOL);

  ctx.arc(x, y, radius, 0, 2 * Math.PI);

  ctx.fillStyle = gradient;
  ctx.fill();
  ctx.closePath();
  ctx.restore();
}

Sol.prototype.desenhaRaios = function(){
  var ctx = this.context;
  ctx.fillStyle = COR_RAIOS_SOL;
  ctx.save();
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
  ctx.restore();
}
