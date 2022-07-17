class Dice{
    constructor(value, x,y){
        this.value = value;
        switch (value) {
            case 1:
                this.health = 1;
                this.attack = 0;
                break;
            case 2:
                this.health = 1;
                this.attack = 1;
                break;
            case 3:
                this.health = 2;
                this.attack = 1;
                break;
            case 4:
                this.health = 2;
                this.attack = 2;
                break;
            case 5:
                this.health = 3;
                this.attack = 2;
                break;
            case 6:
                this.health = 3;
                this.attack = 3;
                break;
        }
        this.x = x;
        this.y = y;
        this.state = "none";
    }
    draw(){
        imageMode(CENTER);
        image(art["dice"], this.x, this.y, 65, 65);
        switch (this.attack + this.health) {
            case 1:
                image(art["heart"],this.x, this.y, 8, 8);
                break;
            case 2:
                if(this.health == 1){
                image(art["sword"],this.x + 16, this.y - 16, 8, 8);
                image(art["heart"],this.x - 16, this.y + 16, 8, 8);
                }else{                    
                    image(art["sword"],this.x + 16, this.y - 16, 8, 8);
                    image(art["sword"],this.x - 16, this.y + 16, 8, 8);
                }
                break;
            case 3:
                if(this.health == 2){
                    image(art["sword"],this.x, this.y, 8, 8);
                    image(art["heart"],this.x - 16, this.y + 16, 8, 8);
                    image(art["heart"],this.x + 16, this.y - 16, 8, 8);
                }else if(this.health == 1){
                    image(art["sword"],this.x + 16, this.y - 16, 8, 8);
                    image(art["sword"],this.x, this.y, 8, 8);
                    image(art["heart"],this.x - 16, this.y + 16, 8, 8);
                    }else{                    
                        image(art["heart"],this.x + 16, this.y - 16, 8, 8);
                        image(art["heart"],this.x - 16, this.y + 16, 8, 8);
                        image(art["heart"],this.x, this.y, 8, 8);
                    }
                break;
                case 4:
                if(this.health == 2){
                    image(art["sword"],this.x - 16, this.y - 16, 8, 8);
                    image(art["sword"],this.x + 16, this.y - 16, 8, 8);
                    image(art["heart"],this.x - 16, this.y + 16, 8, 8);
                    image(art["heart"],this.x + 16, this.y + 16, 8, 8);
                }else if(this.health == 3){
                    image(art["sword"],this.x - 16, this.y - 16, 8, 8);
                    image(art["heart"],this.x + 16, this.y + 16, 8, 8);
                    image(art["heart"],this.x - 16, this.y + 16, 8, 8);
                    image(art["heart"],this.x + 16, this.y - 16, 8, 8);
                    }else{                    
                        image(art["sword"],this.x - 16, this.y - 16, 8, 8);
                        image(art["sword"],this.x + 16, this.y + 16, 8, 8);
                        image(art["sword"],this.x - 16, this.y + 16, 8, 8);
                        image(art["heart"],this.x + 16, this.y - 16, 8, 8);
                    }
                break;
                case 5:
                if(this.health == 2){
                    image(art["sword"],this.x, this.y, 8, 8);
                    image(art["sword"],this.x - 16, this.y - 16, 8, 8);
                    image(art["sword"],this.x + 16, this.y + 16, 8, 8);
                    image(art["heart"],this.x - 16, this.y + 16, 8, 8);
                    image(art["heart"],this.x + 16, this.y - 16, 8, 8);
                }else if(this.health == 3){
                    image(art["sword"],this.x + 16, this.y + 16, 8, 8);
                    image(art["sword"],this.x - 16, this.y - 16, 8, 8);
                    image(art["heart"],this.x, this.y, 8, 8);
                    image(art["heart"],this.x - 16, this.y + 16, 8, 8);
                    image(art["heart"],this.x + 16, this.y - 16, 8, 8);
                    }
                break;
                case 6:
                    image(art["sword"],this.x, this.y + 16, 8, 8);
                    image(art["sword"],this.x - 16, this.y + 16, 8, 8);
                    image(art["sword"],this.x + 16, this.y + 16, 8, 8);
                    image(art["heart"],this.x, this.y - 16, 8, 8);
                    image(art["heart"],this.x - 16, this.y - 16, 8, 8);
                    image(art["heart"],this.x + 16, this.y - 16, 8, 8);
                    break;
            default:
                break;
        }
    }
    mouseOver(){
        if(this.state == "hand"){
            if(mouseX > this.x - 65 && mouseX < this.x + 65 && mouseY > this.y - 65 && mouseY < this.y + 65){
                return true;
            }
        }
        return false;
    }
}

function rollDice(){
    return 6 - Math.floor(Math.sqrt(Math.random() * 36)) ;
}