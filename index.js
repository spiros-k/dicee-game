
// playerOneArr = ["dice1.png", "dice2.png", "dice3.png", "dice4.png", "dice5.png", "dice6.png"];
// playerTwoArr = ["dice1.png", "dice2.png", "dice3.png", "dice4.png", "dice5.png", "dice6.png"];

var randomNumberOne = Math.floor(Math.random() * 6) + 1;
var randomNumberTwo = Math.floor(Math.random() * 6) + 1;

switch (randomNumberOne) {
    case 1: 
        document.querySelector(".player-one").innerHTML = "<h3>Player 1</h3> <img class='img-one' src='./images/dice1.png' alt='dice image'>";
        break;
    case 2: 
        document.querySelector(".player-one").innerHTML = "<h3>Player 1</h3> <img class='img-one' src='./images/dice2.png' alt='dice image'>";
        break;
    case 3: 
        document.querySelector(".player-one").innerHTML = "<h3>Player 1</h3> <img class='img-one' src='./images/dice3.png' alt='dice image'>";
        break;
    case 4: 
        document.querySelector(".player-one").innerHTML = "<h3>Player 1</h3> <img class='img-one' src='./images/dice4.png' alt='dice image'>";
        break;
    case 5: 
        document.querySelector(".player-one").innerHTML = "<h3>Player 1</h3> <img class='img-one' src='./images/dice5.png' alt='dice image'>";
        break;
    case 6: 
        document.querySelector(".player-one").innerHTML = "<h3>Player 1</h3> <img class='img-one' src='./images/dice6.png' alt='dice image'>";
        break;    
}




