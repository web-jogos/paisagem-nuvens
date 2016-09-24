// Everaldo Gomes - 23/09/2016 - everaldo.gomes@ifpr.edu.br
// Baseado no Trabalho de Letícia Fernandes

COR_PASSAROS = "rgb(112,128,144)";

function Passaros(context, largura, altura){
  this.context = context;
  this.largura = largura;
  this.altura = altura;
}

Passaros.prototype.desenha = function(){
  var ctx = this.context;
  ctx.save();
  ctx.strokeStyle = COR_PASSAROS;
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
  ctx.restore();
}
