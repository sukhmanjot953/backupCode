var dicey1 = Math.floor( Math.random() * 6)+1;

var diceimg = "dice"+ dicey1 +".png";
var dicesrc = "images/"+ diceimg;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src" , dicesrc);

var dicey2 = Math.floor( Math.random() * 6)+1;

var diceimg = "dice"+ dicey2 +".png";
var dicesrc = "images/"+ diceimg;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src" , dicesrc);

if (dicey1>dicey2){
    document.querySelector("h1").innerHTML = "Player 1st Wins ! "
}
else if (dicey1<dicey2){
    document.querySelector("h1").innerHTML = "Player 2nd Wins !"
}
else{
    document.querySelector("h1").innerHTML = "Draw !"
}