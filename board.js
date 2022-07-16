class Board{
    constructor(width, height, enemy){
        this.width = width;
        this.height = height;
        this.board = [['','',''],['','','']];
        this.enemy = enemy;
    }
    draw(){
        rectMode(CENTER);;
        fill(Colors["mb"]);
        rect(width/2, height/2, this.width, this.height);
        this.board[0].forEach(function(dice){
            if(dice == '')return;
            dice.draw();
        });
        this.board[1].forEach(function(dice){
            if(dice == '')return;
            dice.draw();
        })
        //check if any dice has less than 1 health and if it does then remove it
        for (let i = 0; i < this.board[0].length; i++) {
            if (this.board[0][i].health < 1) {
                this.board[0][i] = '';
            }
        }
        for (let i = 0; i < this.board[1].length; i++) {
            if (this.board[1][i].health < 1) {
                this.board[1][i] = '';
            }
        }
    }
    opponentAdd(dice,slot){
        if(this.board[0][slot] == ''){
            dice.x = width/2 - 90 + slot*90;
            dice.y = height/2 - 45;
            dice.state = "board"
            this.board[0][slot] = dice;
            return true;
        }
    }
    add(dice,_x,_y){
        if(_x > width/2 - 45 && _x < width/2 + 45 && _y > height/2 && _y < height/2 + 100){
               if(this.board[1][1] == ''){
                dice.x = width/2;
                dice.y = height/2 + 45;
                dice.state = "board"
                this.board[1][1] = dice;
                return true;
            }
        }else if(_x < width/2 - 45 && _x < width/2 + 145 && _y > height/2  && _y < height/2 + 100){
            if(this.board[1][0] == ''){
                dice.x = width/2 - 90;
                dice.y = height/2 + 45;
                dice.state = "board"
                this.board[1][0] = dice;
                return true;
            }
        }else if(_x > width/2 + 45 && _x < width/2 + 145 && _y > height/2 && _y < height/2 + 100){
            if(this.board[1][2] == ''){
                dice.x = width/2 + 90;
                dice.y = height/2 + 45;
                dice.state = "board"
                this.board[1][2] = dice;
                return true;
            }
        }else{
            return false;
        }
    }
    play(){
        if(gamestate=="animation1"){
            for (let i = 0; i < this.board[1].length; i++) {
                const pdice = this.board[1][i];
                const edice = this.board[0][i];
                if(pdice != ""){
                    if(edice != ""){
                        edice.health -= pdice.attack;
                    }
                    else{
                        opponentHealth -= pdice.attack;
                    }
                }
            }
           gamestate = "opponent" 
        }
        if(gamestate=="opponent"){
            for(let i = 0; i< floor(random(1,3)); i++){
                let slot = floor(random(0,3));
                this.opponentAdd(opponentDice[0], slot);
                opponentDice.shift();
            }
            gamestate = "animation2";
        }
        if(gamestate=="animation2"){
            for (let i = 0; i < this.board[0].length; i++) {
                const pdice = this.board[0][i];
                const edice = this.board[1][i];
                if(pdice != ""){
                    if(edice != ""){
                        edice.health -= pdice.attack;
                    }
                    else{
                        playerHealth -= pdice.attack;
                    }
                }
            }
            for(let i = 0; i< floor(random(0,2)); i++){
                playerHand.add(playerDice[0]);
                playerDice.shift();
            }
            gamestate = "player"
        }
    }
}