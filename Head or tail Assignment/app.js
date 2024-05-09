let game = ["H","T"];

let generateRandom = Math.random()*game.length;
let roundValue = Math.floor(generateRandom);
let getvalue = game[roundValue];
let userInput = prompt("Enter a Value Head or tail in one Alphabet (H,T)").toUpperCase();

if( userInput === "H" || userInput === "T"){

if(getvalue ===  userInput){

    Swal.fire(`Hurray! User Wins It's a ${getvalue}`);
}

else{

    Swal.fire(`Sorry Computer Wins It's a ${getvalue}`);
}

}

else{

    Swal.fire(`Invalid User Input ${userInput}`);
}


