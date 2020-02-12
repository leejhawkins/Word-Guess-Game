var words =["the", "word","say"];
var wins = 0;
var losses = 0;
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
    var characterIndex;

    var userGuessText=document.getElementById("userguess-text");
    var directionsText=document.getElementById("directions-text");
    var secretWordText=document.getElementById("secretword-text");

    for (var i=0;i<secretWord.length;i++) {
        // characterIndex = secretWord.charAt(i);
        if (userGuess == secretWord.charAt(i)){
            arrayPlaceholder[i]= userGuess;
            blankPlaceholder=arrayPlaceholder.join('');
            secretWordText.textContent = blankPlaceholder;
        } 
    }
    
    userGuessText.textContent = "You chose: "  + userGuess;
    
   
}