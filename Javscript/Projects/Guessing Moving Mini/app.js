const favMovie = "Krish";
let guess = prompt("guess the movie");
while ((guess != favMovie) && (guess != "quit")) {
    guess = prompt("wrong,Try Again");
}
if ( favMovie === guess){
    console.log("congrats you are right");}
    else if("quit"=== guess) {
    console.log("You Quit");
}