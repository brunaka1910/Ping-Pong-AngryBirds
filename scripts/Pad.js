class Pad{ 
    constructor(c, keyboard){
        this.c = c;
        this.keyboard = keyboard;
        this.x=5;
        this.vel=5;
        this.largura = 80;
        this.altura = 100;
        this.y=(c.canvas.height/2)-(this.altura/2);
        
        this.padImagem = new Image ();
        this.padImagem.width = 80;
        this.padImagem.height = 100;
        this.padImagem.src = "assets/vermelho.png";
        this.padImagem.addEventListener ('load' , () =>{
            this.draw();

    })}
    management(){
        /*
        if (this.keyboard.esquerda==true) 
            if (this.x > 0)
                this.x-=this.vel; 
        if (this.keyboard.direita) 
            if (this.x < this.c.canvas.width-this.dinosaur.width){
                this.x+=this.vel;
            }
        */
        if (this.keyboard.cima) 
            if (this.y > 0 && this.y - 5) 
                this.y-=this.vel;
        if (this.keyboard.baixo)
            if (this.y < this.c.canvas.height-this.altura - 5) 
                this.y+=this.vel;            
    }
    draw(){
        this.management();
        //this.c.fillStyle = "#325082";
       // this.c.fillRect(this.x, this.y, this.largura, this.altura);
        this.c.drawImage(this.padImagem, this.x, this.y, this.padImagem.width, this.padImagem.height);
    }
   
}






