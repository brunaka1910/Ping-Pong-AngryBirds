class VerifyWinner{ 
    constructor(c){
        
        this.c = c;
        this.direita = this.c.canvas.width;
        this.margem = 20;
        this.margemDireita = 50;
        this.largura = 100;
   
    }


    draw(){

      if (pontoJogador1 ==3 || pontoJogador2 ==3)
      { 
        if (pontoJogador1 > pontoJogador2)
        {
            setTimeout(() => {
                textWinner= "Parabéns, você amassou!";
                this.placar.resetScore();
            },1000);
        }

        else 
        {
            setTimeout(() => {
                textWinner="A tecnologia venceu";
                this.placar.resetScore();
            },1000);
        }
      }

    }
   
}