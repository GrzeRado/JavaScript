alert("This is alien attack. You must find the door and run away!!!");
var weapon = prompt("machine gun or laser?");
var randomNumber = Math.random(Math.random());

alert("You attack alien with" + " " + weapon);

if(randomNumber === 0){
    alert("Alien kill you. You die!");
}else if (randomNumber === 1){
    alert("You kill the alien" + " " + weapon +".You win!");
}

/* var myColour = prompt("what is your favurite colour?")
if (myColour === "red") {
    alert("very good!")
}else{
        alert("you mistake")
    }*/

//conditions below added
/*var number = Math.random();
alert(number);
*/

//var number = Math.round( Math.random() * 3);
//alert(number);

/* var number = 0;
alert(number);

if(number === 3 && number != 0){
    alert("fizz")
}else{
    alert("numer is less than 3")
}
*/