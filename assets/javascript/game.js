var words =["the", "word","say","root"];
var wins = 0;
var losses = 0;
var wrongGuesses = [];
var numberGuess = 0;
var secretWord = words[Math.floor(Math.random()*words.length)];
var arrayPlaceholder = [];


for (var i=0; i<secretWord.length; i++){
    arrayPlaceholder.push(" _");
    console.log(arrayPlaceholder[i]);
}

    
function changePlaceholder(array){
    var blankPlaceholder = array.join('');
    return blankPlaceholder;
}



var blankPlaceholder = changePlaceholder(arrayPlaceholder);
console.log(blankPlaceholder);

window.onload = function(){
    var secretWordText=document.getElementById("secretword-text");
    secretWordText.textContent = this.blankPlaceholder;
}



   


document.onkeyup = function(event) {

    var userGuess=event.key;
    var beforeGuessPlaceholder=blankPlaceholder;
    var afterGuessPlaceholder=beforeGuessPlaceholder;
    console.log(wrongGuesses);
    

    var userGuessText=document.getElementById("userguess-text");
    var directionsText=document.getElementById("directions-text");
    var secretWordText=document.getElementById("secretword-text");
    var wrongGuessText=document.getElementById("guesses-text");
    var lossText=document.getElementById("losses-text");
    var winText=document.getElementById("wins-text");

    function resetVariables() {
        wrongGuesses = [];
        numberGuess = 0;
        secretWord = words[Math.floor(Math.random()*words.length)];
        arrayPlaceholder = [];
        for (var i=0; i<secretWord.length; i++){
            arrayPlaceholder.push(" _");
            console.log(arrayPlaceholder[i]);
        }
        blankPlaceholder = changePlaceholder(arrayPlaceholder);
        secretWordText.textContent=blankPlaceholder;
        wrongGuessText.textContent = "";
        userGuessText.textContent = "";
        directionsText.textContent = "Press Any Key";
    }
    



    userGuessText.textContent = "You chose: "  + userGuess;
    for (var i=0;i<secretWord.length;i++) {
        if (userGuess == secretWord.charAt(i)){
            arrayPlaceholder[i]= userGuess;
            afterGuessPlaceholder=arrayPlaceholder.join('');
            secretWordText.textContent = afterGuessPlaceholder;
            console.log(afterGuessPlaceholder);
        } 
    }
    if (beforeGuessPlaceholder===afterGuessPlaceholder) {
        wrongGuesses.push(userGuess);
        numberGuess=numberGuess +1;
        if (numberGuess > 11) {
            alert("You lose!  The correct word was:   "  + secretWord);
            losses=losses+1;
            directionsText.textContent = "You lose!";
            lossText.textContent= "Losses:  " + losses;
            resetVariables();
           
        } else {
            directionsText.textContent = "Choose again";
            wrongGuessText.textContent = wrongGuesses;

        }
    } else if (secretWord==afterGuessPlaceholder) {
        wins=wins+1;
        directionsText.textContent = " You win!!!";
        secretWordText.textContent = afterGuessPlaceholder;
        alert("You win!  The correct word was:   " + secretWord);
        userGuessText.textContent = "";
        directionsText.textContent = "Press any key";
        winText.textContent= "Wins: " + wins;
        resetVariables();

    } else {
        beforeGuessPlaceholder=afterGuessPlaceholder;
    }}