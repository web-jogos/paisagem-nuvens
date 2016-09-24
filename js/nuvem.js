// Everaldo Gomes - 23/09/2016 - everaldo.gomes@ifpr.edu.br
// Baseado no trabalho de Letícia Fernandes


COR_NUVEM = "white";

function Nuvem(context, x, y, tamanho){
  this.context = context;
  this.x = x;
  this.y = y;
  this.tamanho = tamanho;
}

Nuvem.prototype.reiniciaMovimento = function(){
  var limite = this.context.canvas.width;
  if(this.x > limite){
    this.x = - this.tamanho;
  }
};

Nuvem.prototype.deslocaNuvem = function(){
  this.x += 10;
};

Nuvem.prototype.desenha = function() {
  var canvas = this.context.canvas;
  var ctx = this.context;
  var x = this.x;
  var y = this.y;
  ctx.fillStyle = COR_NUVEM;
  ctx.save();
  ctx.translate(this.x, this.y);
  ctx.beginPath();
  ctx.moveTo(100,200);
  ctx.quadraticCurveTo(150,160,200,200);
  ctx.moveTo(150,200);
  ctx.quadraticCurveTo(200,140,250,200);
  ctx.moveTo(200,200);
  ctx.quadraticCurveTo(250,160,300,200);
  // ctx.moveTo(100+x,200+y);
  // ctx.moveTo(100+x,200+y);
  // ctx.quadraticCurveTo(150+x,160+y,200+x,200+y);
  // ctx.moveTo(150+x,200+y);
  // ctx.quadraticCurveTo(200+x,140+y,250+x,200+y);
  // ctx.moveTo(200+x,200+y);
  // ctx.quadraticCurveTo(250+x,160+y,300+x,200+y);
  // ctx.moveTo(100+x,200+y);
  ctx.fill();
  ctx.closePath();
  ctx.restore();

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
