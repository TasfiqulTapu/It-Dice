class NextMove{
    constructor(){
        this.x = width - 85;
        this.y = height - 30;
        this.state = "player";
    }
    draw(){
        rectMode(CENTER);
        fill(Colors["mb"]);
        rect(this.x, this.y, 150, 40);
        fill(Colors["rp"]);
        textSize(20);
        textAlign(CENTER, CENTER);
        text("Next Move", this.x, this.y);
    }
}
class HealthDisplay{
    constructor(type,health){
        if(type == "player"){
            this.x = 50;
            this.y = height - 20;
        }else{
            this.x = 50;
            this.y = 20
        }
        this.state = health;
    }
    draw(latestHealth){
        this.health = latestHealth;
        rectMode(CENTER);
        fill(Colors["mb"]);
        rect(this.x, this.y, 100, 40);
        fill(Colors["rp"]);
        textSize(20);
        textAlign(CENTER, CENTER);
        text(`Health ${this.health}`, this.x, this.y);
    }
}