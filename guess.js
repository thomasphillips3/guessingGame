var MAX=5;
var answers=[];
var i=0;

$("#hometownSpell").hide();
// JS for handling hometown response
function hometownClick(){
  if (document.getElementById("dtw").checked){
    console.log("Right hometown");
    document.getElementById("result1").innerHTML = "Correct!";
    $("#hometownForm").hide();
    $("#hometownSpell").show();
  } else {
    console.log("Wrong hometown");
    document.getElementById("result1").innerHTML = "Wrong! Try again...";
  }
}

// Make sure my city is spelled right
function spellCity(){
  var city = document.getElementById("city").value;
  // Make sure the first letter is capitalized
  if(city === "Detroit"){
    document.getElementById("spellResult").innerHTML = "Right!";
    console.log("right");
  } else {
    document.getElementById("spellResult").innerHTML = "Wrong! Try again...";
  }
  // if(city.substring(0,1) === city.substring(0,1).toLowerCase){
  //   console.log("lower case");
  // }
}

// JS for handling instrument response
function instrumentBox(){
  var ans = document.getElementById("instrument").value;
  if (ans === "saxophone"){
    document.getElementById("result2").innerHTML = "RIGHT!";
  } else if (ans === ""){
    document.getElementById("result2").innerHTML = "";
  } else{
    document.getElementById("result2").innerHTML = "WRONG!";
  }
}

// JS for handling car response
function carBox(){
  var ans = document.getElementById("car").value;
  if (ans === "buick"){
    document.getElementById("result3").innerHTML = "RIGHT!";
  } else if (ans === ""){
    document.getElementById("result3").innerHTML = "";
  } else{
    document.getElementById("result3").innerHTML = "WRONG!";
  }
}

// JS for handling guesses for stretch response
function guessField(){
  // Store the input entered into the text field into a variable "ans" and immediately cast to int
  var ans = parseInt(document.getElementById("numberGuess").elements["number"].value);
  console.log("secret: " + secret + "\nyour guess: " + ans);

  do // Used a do-while, because we always want to this block to execute at least once
  {
    console.log("Entered while loop\nsecret: " + secret + "\nans: " + ans + "\nguessed: " + guessed);

    if(ans > secret){
      console.log("Your guess is too high");
      document.getElementById("result4").innerHTML = ans + " is too high. Guess again";
      break;
    } else if (ans < secret){
      console.log("Your guess is too low");
      document.getElementById("result4").innerHTML = ans + " is too low. Guess again";
      break;
    } else if (ans === secret){
      console.log("You guessed it!");
      document.getElementById("result4").innerHTML = "You correctly guessed the number " + ans + ". A new number random number will be generated now";
      alert("You correctly guessed the number " + ans + ". A new number random number will be generated now");
      secret = Math.floor(Math.random() * (MAX+1));
      console.log("New secret: " + secret);
      guessed=true;
    } else { // If this else is reached, the input must be invalid. Prompt the user, and get a new guess.
      console.log("Invalid input. Enter a number");
      document.getElementById("result4").innerHTML = "Invalid input. Please enter a number between 0 and 5";
      break;
    }
  } while(guessed === false);
}
