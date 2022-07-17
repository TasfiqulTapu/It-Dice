let art, Roboto
function preload(){
    // load all images from /art folder into art
    art = {
        dice:  loadImage("art/dice.png"),
        heart: loadImage("art/heart.png"),
        sword: loadImage("art/sword.png"),
        board: loadImage("art/board.png"),
        hand: loadImage("art/hand.png"),
        next: loadImage("art/next.png"),
        cat: loadImage("art/cat.png"),
        swas: loadImage("art/swas.png"),
        jeff: loadImage("art/jeff.png"),
        fishy: loadImage("art/fishy.png"),
        bird: loadImage("art/bird.png"),
        }
        //     2: loadImage("art/dice/2.png"),
        // },
        // board: {
        //     1: loadImage("art/board/1.png"),
        //     2: loadImage("art/board/2.png"),
        // },}


}
let Opponets = {
    cat: {
        name: "cat",
        health: 9,
        rolls: [1,2,3],
        hand: 10,
    },
    swas: {
        name: "swas",
        health: 69,
        rolls: [3,4,5,6],
        hand: 40,
    },
    jeff: {
        name: "jeff",
        health: 30,
        rolls: [2,3,4],
        hand: 30,
    },
    fishy: {
        name: "fishy",
        health: 5,
        rolls: [4],
        hand: 30,
    },
    bird: {
        name: "bird",
        health: 80,
        rolls: [4,5,6],
        hand: 50,
    }
}