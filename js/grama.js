// Everaldo Gomes - 23/09/2016 - everaldo.gomes@ifpr.edu.br
// Baseado no Trabalho de Letícia Fernandes


COR_INICIO_GRAMA = "rgb(0,165,0)";
COR_FIM_GRAMA = "#FFFF33";


function Grama(context, largura, altura) {
  this.context = context;
  this.largura = largura;
  this.altura = altura;
}

Grama.prototype.desenha = function(){
    var ctx = this.context;
    var grd = ctx.createLinearGradient(0, this.altura - 150, 0 ,this.altura + 100);
    ctx.save();
    ctx.beginPath();
    grd.addColorStop(0,COR_INICIO_GRAMA);
    grd.addColorStop(1,COR_FIM_GRAMA);
    ctx.fillStyle = grd;
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
    ctx.fill();
    ctx.closePath();
    ctx.beginPath();
    ctx.fillRect(0,695,this.largura,this.altura);
    ctx.closePath();
    ctx.restore();
}
