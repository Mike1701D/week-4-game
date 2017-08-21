$(document).ready(function() {
  // Variables
  var randomNumberVar;
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

  //Text at the Start


  // For each iteration, generate a new random number between 1 and 12 for each crystal's point value
  xalOneVar = Math.floor(Math.random() * 12) + 1;
  xalTwoVar = Math.floor(Math.random() * 12) + 1;
  xalThreeVar = Math.floor(Math.random() * 12) + 1;
  xalFourVar = Math.floor(Math.random() * 12) + 1;

  // For each iteration, generate a new random number between 19 and 120 for point value goal
  randomNumberVar = Math.floor(Math.random() * 120) + 19;
     
  // Check what has been clicked
  $(document).on("click", "button", function() {

    if ($(this).hasClass("crystal1")) {
      // Listens for Crystal-1 Click and Responds
      randomNumberVar = randomNumberVar - xalOneVar;
      console.log(xalOneVar);
      console.log(randomNumberVar);

      if (randomNumberVar < 0) {
        console.log("You LOSE!");
        lossesVar = lossesVar + 1;
      }

      if (randomNumberVar === 0) {
        console.log("WINNING LIKE CHARLIE SHEEN!");
        winsVar = winsVar + 1;
      }
      // Update randomNumberVar AND winsVar AND lossesVar
      $("#randomNumber").html("Random Number:  " + randomNumberVar);
      $("#wins").html("Number of Wins:  " + winsVar);
      $("#losses").html("Number of Losses:  " + lossesVar);
    }
    
    if ($(this).hasClass("crystal2")) {
      // Listens for Crystal-2 Click and Responds
      randomNumberVar = randomNumberVar - xalTwoVar;
      console.log(xalTwoVar);
      console.log(randomNumberVar);
    
      if (randomNumberVar < 0 ) {
        console.log("You LOSE!");
        lossesVar = lossesVar + 1;
      }
    
      if (randomNumberVar === 0) {
        console.log("WINNING LIKE CHARLIE SHEEN!");
        winsVar = winsVar + 1;
      }
      // Update randomNumberVar AND winsVar AND lossesVar
      $("#randomNumber").html("Random Number:  " + randomNumberVar);
      $("#wins").html("Number of Wins:  " + winsVar);
      $("#losses").html("Number of Losses:  " + lossesVar);
    }

    if ($(this).hasClass("crystal3")) {
      // Listens for Crystal-3 Click and Responds
      randomNumberVar = randomNumberVar - xalThreeVar;
      console.log(xalThreeVar);
      console.log(randomNumberVar);

      if (randomNumberVar < 0 ) {
        console.log("You LOSE!");
        lossesVar = lossesVar + 1;
      }

      if (randomNumberVar === 0) {
        console.log("WINNING LIKE CHARLIE SHEEN!");
        winsVar = winsVar + 1;
      }
      // Update randomNumberVar AND winsVar AND lossesVar
      $("#randomNumber").html("Random Number:  " + randomNumberVar);
      $("#wins").html("Number of Wins:  " + winsVar);
      $("#losses").html("Number of Losses:  " + lossesVar);
    }

    if ($(this).hasClass("crystal4")) {
      // Listens for Crystal-4 Click and Responds
      randomNumberVar = randomNumberVar - xalFourVar;
      console.log(xalFourVar);
      console.log(randomNumberVar);
      
      if (randomNumberVar < 0 ) {
        console.log("You LOSE!");
        lossesVar = lossesVar + 1;
      }

      if (randomNumberVar === 0) {
        console.log("WINNING LIKE CHARLIE SHEEN!");
        winsVar = winsVar + 1;
      }
      // Update randomNumberVar AND winsVar AND lossesVar
      $("#randomNumber").html("Random Number:  " + randomNumberVar);
      $("#wins").html("Number of Wins:  " + winsVar);
      $("#losses").html("Number of Losses:  " + lossesVar);
    }
    
    if (randomNumberVar < 1) {
      // Reset Variables for New Game
      xalOneVar = Math.floor(Math.random() * 12) + 1;
      xalTwoVar = Math.floor(Math.random() * 12) + 1;
      xalThreeVar = Math.floor(Math.random() * 12) + 1;
      xalFourVar = Math.floor(Math.random() * 12) + 1;

      // For each iteration, generate a new random number between 19 and 120 for point value goal
      randomNumberVar = Math.floor(Math.random() * 120) + 19;
      console.log("RESET");
      // Update randomNumberVar AND winsVar AND lossesVar
      $("#randomNumber").html("Random Number:  " + randomNumberVar);
      $("#wins").html("Number of Wins:  " + winsVar);
      $("#losses").html("Number of Losses:  " + lossesVar);
      }

	});
  // Update randomNumberVar AND winsVar AND lossesVar
  $("#randomNumber").html("Random Number:  " + randomNumberVar);
  $("#wins").html("Number of Wins:  " + winsVar);
  $("#losses").html("Number of Losses:  " + lossesVar);
});
  