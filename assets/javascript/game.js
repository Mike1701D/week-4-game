$(document).ready(function() {
  // Variables
  var randomNumberVar;
  var scoreVar;
  var winsVar;
  var lossesVar;
  var xalOneVar;
  var xalTwoVar;
  var xalThreeVar;
  var xalFourVar;

  // Determine if this is the first iteration of game and set some variables to zero
  if (winsVar === undefined) {
    winsVar = 0;
  }

  if (lossesVar === undefined) {
    lossesVar = 0;
  }

  // For each iteration, generate a new random number between 1 and 12 for each crystal's point value
  xalOneVar = Math.floor(Math.random() * 12) + 1;
  xalTwoVar = Math.floor(Math.random() * 12) + 1;
  xalThreeVar = Math.floor(Math.random() * 12) + 1;
  xalFourVar = Math.floor(Math.random() * 12) + 1;

  // For each iteration, generate a new random number between 19 and 120 for point value goal
  randomNumberVar = Math.floor(Math.random() * 120) + 19;

  // Set score equal to random number
  scoreVar = randomNumberVar;

  //Text at the Start
  $("#randomNumber").html("Random Number:  " + randomNumberVar);
  $("#score").html("Score:  " + scoreVar);
  $("#wins").html("Number of Wins:  " + winsVar);
  $("#losses").html("Number of Losses:  " + lossesVar);

  // Check what has been clicked
  $(document).on("click", "button", function() {

  	if ($(this).hasClass("crystal1")) {
  	// Listens for Crystal-1 Click and Responds
  	scoreVar = scoreVar - xalOneVar;	
  	}
  	    
    if ($(this).hasClass("crystal2")) {
    // Listens for Crystal-2 Click and Responds
    scoreVar = scoreVar - xalTwoVar;
    }

    if ($(this).hasClass("crystal3")) {
    // Listens for Crystal-3 Click and Responds
    scoreVar = scoreVar - xalThreeVar;
	}

    if ($(this).hasClass("crystal4")) {
    // Listens for Crystal-4 Click and Responds
    scoreVar = scoreVar - xalFourVar;
    }
      
    if (scoreVar < 0 ) {
    alert("You LOSE! TRY AGAIN!");
    lossesVar = lossesVar + 1;
    }

    if (scoreVar === 0) {
    alert ("YOU WIN!  KEEP GOING!");
        winsVar = winsVar + 1;
    }
    
    if (scoreVar < 1) {
    // Reset Variables for New Game
    xalOneVar = Math.floor(Math.random() * 12) + 1;
    xalTwoVar = Math.floor(Math.random() * 12) + 1;
    xalThreeVar = Math.floor(Math.random() * 12) + 1;
    xalFourVar = Math.floor(Math.random() * 12) + 1;

    // For each iteration, generate a new random number between 19 and 120 for point value goal
    randomNumberVar = Math.floor(Math.random() * 120) + 19;

    // Set score equal to random number
    scoreVar = randomNumberVar;
	}

    // Update randomNumberVar AND winsVar AND lossesVar
    $("#randomNumber").html("Random Number:  " + randomNumberVar);
    $("#score").html("Score:  " + scoreVar);
    $("#wins").html("Number of Wins:  " + winsVar);
    $("#losses").html("Number of Losses:  " + lossesVar);
 	});
});
  