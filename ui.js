class NextMove{
    constructor(){
        this.x = width - 85;
        this.y = height - 30;
        this.state = "player";
    }
    draw(){
        rectMode(CENTER);
        fill("#ffaa5e");
        rect(this.x, this.y, 150, 40);
        fill("#203c56");
        textSize(20);
        textAlign(CENTER, CENTER);
        text("Next Move", this.x, this.y);
    }
}
class Restart{
    constructor(x,y){
        this.x = x
        this.y = y
        this.w = 90;
        this.h = 48;
    }
    draw(){
        rectMode(CENTER);
        fill("#ffaa5e");
        rect(this.x, this.y, this.w, this.h);
        fill("#203c56");
        textSize(20);
        textAlign(CENTER, CENTER);
        text("Restart", this.x, this.y);
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
        // rectMode(CENTER);
        // fill(Colors["mb"]);
        // rect(this.x, this.y, 100, 40);
        fill("#ffaa5e");
        textSize(20);
        textAlign(CENTER, CENTER);
        text(`Health ${this.health}`, this.x, this.y);
    }
}
class MainMenu{
    constructor(){
        this.startpos = {x:width/2,y:height/2};
        this.startsize = {w:200,h:60};
        this.tutorialpos = {x:width/2,y:height/2 + 60};
        this.tutorialsize = {w:200,h:60};
    }
    draw(){
        fill("#203c56");
        rectMode(CENTER);
        rect(width/2, height/2, width, height);
        rectMode(CENTER);
        fill("#ffaa5e");
        rect(this.startpos.x, this.startpos.y, this.startsize.w, this.startsize.h);
        fill("#203c56");
        textSize(20);
        textAlign(CENTER, CENTER);
        text("Start", this.startpos.x, this.startpos.y);
        fill("#ffaa5e");
        rect(this.tutorialpos.x, this.tutorialpos.y, this.tutorialsize.w, this.tutorialsize.h);
        fill("#203c56");
        textSize(20);
        textAlign(CENTER, CENTER);
        text("Tutorial", this.tutorialpos.x, this.tutorialpos.y);


    }
}
class Tutorial{
    constructor(){
        this.backpos = {x:width - 33,y:33};
        this.backsize = {w:65,h:65};
    }
    draw(){
        fill("#203c56");
        rectMode(CENTER);
        rect(width/2, height/2, width, height);
        fill("#ffaa5e");
        rectMode(CENTER);
        rect(this.backpos.x, this.backpos.y, this.backsize.w, this.backsize.h);
        fill("#203c56");
        textSize(20);
        textAlign(CENTER, CENTER);
        stroke("#ffaa5e")
        fill("#ffaa5e")
        text("I ran out of time \nand rushed the gaem",width/2, height/2);
        stroke("#d08159")
        text("🔙", this.backpos.x, this.backpos.y);
    }
}
