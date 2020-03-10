var words =["albania", "argentina","algeria","egypt", "canada","algeria","chad","afghanistan","moldova",
"honduras","guatemala","brazil","france","germany","england","belgium","china","mongolia",
"thailand","laos","vietnam","indonesia","india","portugal","spain","italy","norway","sweden","finland",
"iceland","poland","ukraine","latvia","lithuania","estonia","serbia","croatia","austria","switzerland",
"romania","hungary","luxembourg","leichenstein","netherlands","andorra","albania","tunisia","libya","mali",
"senegal","tanzania","somalia","ethiopia","sudan","angola","mozambique","iran","iraq","syria","jordan","israel",
"cyprus","yemen","eritrea","paraguay","uraguay","chile","suriname","guyana","colombia","venezuela","panama"]
var wins = 0;
var losses = 0;
var wrongGuesses = [];
var numberGuess = 0;
var repeatLetter = false;
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
    var numberText=document.getElementById("numguesses-text");
    secretWordText.textContent = this.blankPlaceholder;
    numberText.textContent = 10;
}



   


document.onkeyup = function(event) {

    var userGuess=event.key;
    var afterGuessPlaceholder=blankPlaceholder;
    
    
    

    var userGuessText=document.getElementById("userguess-text");
    var directionsText=document.getElementById("directions-text");
    var secretWordText=document.getElementById("secretword-text");
    var wrongGuessText=document.getElementById("guesses-text");
    var numberText=document.getElementById("numguesses-text");
    var lossText=document.getElementById("losses-text");
    var winText=document.getElementById("wins-text");
    
    const victory =document.getElementById("victorySound");
    const loss =document.getElementById("losingSound");
    function resetVariables() {
        wrongGuesses = [];
        numberGuess = 0;
        repeatLetter = false;
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
        numberText.textContent = 10;
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
    for (var i=0;i<wrongGuesses.length;i++) {
        if (wrongGuesses[i]===userGuess) {
            repeatLetter = true;

        }
    }
    if (blankPlaceholder===afterGuessPlaceholder  && repeatLetter==false) {
        wrongGuesses.push(userGuess);
        numberGuess=numberGuess+1;
        numberText.textContent= 10-numberGuess;
        if (numberGuess > 9) {
            loss.play();
            losses=losses+1;
            directionsText.textContent = "You lose! The correct word was:  " +secretWord;
            lossText.textContent= "Losses:  " + losses;
            setTimeout(resetVariables,3000);
           
        } else {
            directionsText.textContent = "Choose again";
            wrongGuessText.textContent = "["+ wrongGuesses +"]";
            

        }
    } else if (secretWord==afterGuessPlaceholder) {
        victory.play();
        wins=wins+1;
        directionsText.textContent = " You win!!!";
        secretWordText.textContent = afterGuessPlaceholder;
        
        winText.textContent= "Wins: " + wins;
        
        setTimeout(resetVariables,3000);

    } else {
        repeatLetter = false;
    }}