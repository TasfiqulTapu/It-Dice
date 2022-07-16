class Hand{
    constructor(){
        this.dice = [];
        this.x = width/2;
        this.y = height - 45;
        this.restruct = false;
    }
    draw(){
        rectMode(CENTER);
        fill(Colors["mb"]);
        rect(this.x, this.y, 270, 90);
        this.dice.forEach(function(dice){
            dice.draw();
        })
        if(this.restruct){
            for(let i = 0; i < this.dice.length; i++){
                this.dice[i].x = this.x - 90 + (i * 90);
                this.dice[i].y = this.y;
            }
            this.restruct = false;
        }
    }
    add(dice){
        if (this.dice.length < 3) {
            dice.x = this.x - 90 + (this.dice.length * 90);
            dice.y = this.y;
            dice.state = "hand";
            this.dice.push(dice);
        }
    }
}