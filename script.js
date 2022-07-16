    let board, nextmove, gamestate, playerHealth, opponentHealth, playerHealthDisplay, opponentHealthDisplay
    let playerHand = []
let playerDice = [], opponentDice = [];
let currScreen = "game";
function setup() {
  createCanvas(720, 480);
  newGame(Opponets["cat"]);
}
function newGame(opponent){
    currScreen = "game";
    gamestate = "player";
    playerHealth = 20;
    opponentHealth = opponent.health;
    board = new Board(270, 180, opponent);
    nextmove = new NextMove()
    playerDice = [];
    opponentDice = [];
    playerHealthDisplay = new HealthDisplay("player", playerHealth);
    opponentHealthDisplay = new HealthDisplay("opponent", opponentHealth);
    for(let i = 0; i < 50; i++){
        playerDice.push(new Dice(floor(random(1,7)), -100, -100));
    }
    for (let i = 0; i < opponent.hand; i++) {
        opponentDice.push(new Dice(random(opponent.rolls), -100, -100));         
    }
    playerHand = new Hand();
    for(let i = 0; i < 3; i++){
        playerHand.add(playerDice[0]);
        playerDice.splice(0,1);
    }

}
function draw() {
  if(currScreen == "game"){
    background(Colors["sb"]);
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
        background(Colors["sb"]);
        textSize(50);
        fill(Colors["mb"]);
        text("You Lose", width/2, height/2);
    }
    if(currScreen == "win"){
        background(Colors["sb"]);
        textSize(50);
        fill(Colors["mb"]);
        text("You Win", width/2, height/2);
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