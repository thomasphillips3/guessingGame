var MAX=5;
var answers=[];
var i=0;
var rightCount = 0;
var wrongCount = 0;

// JS for handling hometown response
function hometownClick(){
  if (document.getElementById("dtw").checked){
    rightCount++;
    console.log("Right hometown");
    document.getElementById("result1").innerHTML = "Right!";

    // Hide previous question and display the next after a correct answer
    $("#hometownForm").hide();
    $("#hometownSpell").show();
  } else { // If not Detroit, it's wrong
    wrongCount++
    console.log("Wrong hometown");
    document.getElementById("result1").innerHTML = "Wrong! Try again...";
  }
  // document.getElementById("rightCount").innerHTML = rightCount;
  // document.getElementById("wrongCount").innerHTML = wrongCount;
}

// Make sure my city is spelled right
function spellCity(){
  var city = document.getElementById("city").value;
  // Make sure the first letter is capitalized
  if(city === "Detroit"){
    rightCount++;
    document.getElementById("spellResult").innerHTML = "Right!";
    console.log("right");

    // Hide previous question and display the next after a correct answer
    $("#hometownSpell").hide();
    $("#result1").hide();
    $("#spellResult").hide();
    $("#correct1").show();
    $("#band").show();
  } else {
    document.getElementById("spellResult").innerHTML = "Wrong! Try again...";
    wrongCount++;
  }
  // if(city.substring(0,1) === city.substring(0,1).toLowerCase){
  //   console.log("lower case");
  // }
  // document.getElementById("rightCount").innerHTML = rightCount;
  // document.getElementById("wrongCount").innerHTML = wrongCount;
}

function playedBand(){
  var yesOrNo = document.getElementById("played").value;
  if (yesOrNo.substring(0,1) === yesOrNo.substring(0,1).toUpperCase()) {
    console.log("lowercase only, please");
    wrongCount++;
  } else if (yesOrNo === "yes"){
    rightCount++;
    $("#band").hide();
    $("#instrument").show();
  } else {
    console.log("wrong. i played in band");
    wrongCount++;
  }
}
// JS for handling instrument response
function instrumentBox(){
  if (document.getElementById("sax").checked){
    rightCount++;
    document.getElementById("result2").innerHTML = "RIGHT!";
    $("#result2").hide();
    $("#instrument").hide();
    $("#correct2").show();
    $("#carQuestion").show();
    console.log("Score = " + rightCount + "/" + (rightCount+wrongCount));
  } else{
    wrongCount++
    document.getElementById("result2").innerHTML = "WRONG!";
  }
}

// JS for handling car response
function carBox(){
  var ans = document.getElementById("firstCar").value;
  if (ans === "buick"){
    rightCount++;
    document.getElementById("result3").innerHTML = "RIGHT!";
    $("#result3").hide();
    $("#carQuestion").hide();
    $("#correct3").show();
  } else if (ans === ""){
    // Don't count a blank submission as a wrong answer
    document.getElementById("result3").innerHTML = "";
  } else{
    wrongCount++;
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
