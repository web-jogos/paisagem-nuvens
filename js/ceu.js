// Everaldo Gomes - 23/09/2016 - everaldo.gomes@ifpr.edu.br
// Baseado no Trabalho de Letícia Fernandes

COR_CEU = "rgb(0,200,255)";

function Ceu (context, largura, altura){
  this.context = context;
  this.largura = largura;
  this.altura = altura;
}

Ceu.prototype.desenha = function(){
  var ctx = this.context;
  var grd = ctx.createLinearGradient(0,0,0,750);
  ctx.save();
  ctx.beginPath();
  grd.addColorStop(0,COR_CEU);
  grd.addColorStop(1,"white");
  ctx.fillStyle = grd;
  ctx.fillRect(0,0,this.largura,this.altura);
  ctx.closePath();
  ctx.restore();
}
