let board, nextmove, gamestate, playerHealth, opponentHealth, playerHealthDisplay, opponentHealthDisplay, restart, menu, tutorial
let playerHand = []
let playerDice = [], opponentDice = [];
let currScreen = "menu";
function setup() {
  createCanvas(720, 480);
  menu = new MainMenu();
  tutorial = new Tutorial();
  stroke("#d08159")
}
function newGame(x){
    let opponent = randomObj(Opponets);
    currScreen = "game";
    gamestate = "player";
    playerHealth = 20;
    opponentHealth = opponent.health;
    board = new Board(270, 180, opponent);
    nextmove = new NextMove();
    restart = new Restart(width/2,height - 100 );
    playerDice = [];
    opponentDice = [];
    playerHealthDisplay = new HealthDisplay("player", playerHealth);
    opponentHealthDisplay = new HealthDisplay("opponent", opponentHealth);
    for(let i = 0; i < 50; i++){
        playerDice.push(new Dice(rollDice(), -100, -100));
    }
    for (let i = 0; i < opponent.hand; i++) {
        opponentDice.push(new Dice(random(opponent.rolls), -100, -100));         
    }
    for(let i = opponentDice.length - 1; i >= 2; i--){
        if(opponentDice[i].value == 1 && opponentDice[i] == opponentDice[i-1] && opponentDice[i] == opponentDice[i-2]){
            opponentDice.splice(i,1);
        }
    }
    playerHand = new Hand();
    for(let i = 0; i < 3; i++){
        playerHand.add(playerDice[0]);
        playerDice.splice(0,1);
    }

}
function draw() {
    if(currScreen == "menu"){
        menu.draw();
    }
    if(currScreen == "tutorial"){
        tutorial.draw();
    }
    if(currScreen == "game"){
        background("#0d2b45");
        nextmove.draw();
        board.draw();
        board.play();
        playerHand.draw();
        playerHealthDisplay.draw(playerHealth);
        opponentHealthDisplay.draw(opponentHealth);
        if(playerHealth < 1){
            console.log("you lose");
            gamestate = "lose";
            currScreen = "lose";
        }else if(opponentHealth < 1){
            console.log("you win");
            gamestate = "win";
            currScreen = "win";
        }
    }
    if(currScreen == "lose"){
        background("#203c56" );
        textSize(50);
        fill("#ffaa5e");
        text("You Lose", width/2, height/2);
        restart.draw();
    }
    if(currScreen == "win"){
        background("#203c56");
        textSize(50);
        fill("#ffaa5e");
        text("You Win", width/2, height/2);
        restart.draw();
    }
}
function mousePressed(){
    if(currScreen == "game" && gamestate == "player"){
        for(let i = 0; i < playerHand.dice.length; i++){
            if(playerHand.dice[i].mouseOver()){
                playerHand.dice[i].state = "moving";
            }
        }
    }
    if(gamestate=="player" && mouseX > nextmove.x - 75 && mouseX < nextmove.x + 75 && mouseY > nextmove.y - 25 && mouseY < nextmove.y + 25){
        gamestate = "animation1";
    }
    if(currScreen=="win" || currScreen=="lose"){
        if(mouseX > restart.x - restart.w/2 && mouseX < restart.x + restart.w/2 && mouseY > restart.y - restart.w/2 && mouseY < restart.y + restart.w/2){
            newGame(Opponets["cat"]);
        }
    }
    // check if click is inside menu object
    if(currScreen == "menu"){
        if(mouseX > menu.startpos.x - menu.startsize.w/2 && mouseX < menu.startpos.x + menu.startsize.w/2 && mouseY > menu.startpos.y - menu.startsize.h/2 && mouseY < menu.startpos.y + menu.startsize.h/2){
            newGame(Opponets["cat"]);
        }
    }
    // check if click is inside tutorial of menu object
    if(currScreen == "menu"){
        if(mouseX > menu.tutorialpos.x - menu.tutorialsize.w/2 && mouseX < menu.tutorialpos.x + menu.tutorialsize.w/2 && mouseY > menu.tutorialpos.y - menu.tutorialsize.h/2 && mouseY < menu.tutorialpos.y + menu.tutorialsize.h/2){
            currScreen = "tutorial";
        }
    }
    // check if click is indie back of tutorial object
    if(currScreen == "tutorial"){
        if(mouseX > tutorial.backpos.x - tutorial.backsize.w/2 && mouseX < tutorial.backpos.x + tutorial.backsize.w/2 && mouseY > tutorial.backpos.y - tutorial.backsize.h/2 && mouseY < tutorial.backpos.y + tutorial.backsize.h/2){
            currScreen = "menu";
        }
    }
}
function mouseDragged(){
    if(currScreen == "game"){
        for(let i = 0; i < playerHand.dice.length; i++){
            if(playerHand.dice[i].state == "moving"){
                playerHand.dice[i].x = mouseX;
                playerHand.dice[i].y = mouseY;
            }
        }
    }
}
function mouseReleased(){
    if(currScreen == "game"){
        for(let i = 0; i < playerHand.dice.length; i++){
            if(playerHand.dice[i].state == "moving"){
                if(board.add(playerHand.dice[i], mouseX, mouseY)){
                    // remove this dice from hand using splice
                    playerHand.dice.splice(i,1);
                }else{
                    playerHand.dice[i].state = "hand";
                    let temp = playerHand.dice.splice(i,1);
                    playerHand.add(temp[0]);
                    playerHand.restruct = true;
                }
            }
        }
    }
}
function randomObj(obj) {
    var keys = Object.keys(obj);
    return obj[keys[ keys.length * Math.random() << 0]];
};