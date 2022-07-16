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
        fill(Colors["cu"]);
        rectMode(CENTER);
        rect(this.x, this.y, 65, 65);
        fill(Colors["rp"]);
        textSize(30);
        textAlign(CENTER, CENTER);
        text(this.value, this.x, this.y);
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
