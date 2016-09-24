// Everaldo Gomes - 23/09/2016 - everaldo.gomes@ifpr.edu.br
// Baseado no Trabalho de Letícia Fernandes


function Arvore(context, largura, altura){
  this.context = context;
  this.largura = largura;
  this.altura = altura;
}


Arvore.prototype.desenha = function() {
    var ctx = this.context;
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
