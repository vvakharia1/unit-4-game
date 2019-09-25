// 1.0 Creation of buttons on the page for the four crystals
// look up how to create an image clickable

var crystalButtons = {
  blue: {
    name: "Blue",
    value: 0
  },
  green: {
    name: "Green",
    value: 0
  },
  red: {
    name: "Red",
    value: 0
  },
  yellow: {
    name: "Yellow",
    value: 0
  }
};

// Add value to the scores
var currentScore = 0;
var newScore = 0;

// Getting randome number
var randomNumber = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// function renderButtons() {
//     for (var i = 0; i < crystalButtons.length; i++) {

//         var crystalBtn = $("<button>"); // creating a variable for the new button and your declaring it as a button
//         crystalBtn.addClass("color"); // you add the class so that in the css file you can select it (all of them and alter them, all the buttons)
//         crystalBtn.attr({
//             id: crystalButtons[i],
//             value: Math.random() * (99 - 12) + 12 // this is adding two different attr, one is assigning a consistant random number (value) and the other ID attr is assigning an id to each specific crystal
//         }) // this is an html attribute that adds in an id to each crystal when the for loop is run. This helps you differentiate what button was clicked. They will have the id of red or blue etc..
//         crystalBtn.text(crystalButtons[i]); // this just add text of the array onto the buttons
//         $("#buttons-view").append(crystalBtn); // this is grabbing the id that has buttons-view and is pinning the buttons onto it

//     }
// }
// renderButtons();

// Starting the game
var playGame = function() {
  currentScore = 0;

  newScore = randomNumber(1, 100); // gets a random number between 1 - 100

  // setting values on each crystal
  crystalButtons.blue.value = randomNumber(1, 100);
  crystalButtons.red.value = randomNumber(1, 100);
  crystalButtons.green.value = randomNumber(1, 100);
  crystalButtons.yellow.value = randomNumber(1, 100);
};

// Function to check the loses and wins

var winGame = function() {
  if (currentScore > newScore) {
    console.log("Sorry, you lost");

    // restart game
    playGame();
  } else if (currentScore === newScore) {
    console.log("You won!");
  }
};

// Add value to the buttons once clicked

$(".red-crystal").on("click", function() {
  addValues(crystalButtons.red); //this is an on click function that is grabbing the red button and putting a click on it. once this function runs in the brackets is what you're telling it to do once clicked
});

$(".blue-crystal").on("click", function() {
  addValues(crystalButtons.blue); //this is an on click function that is grabbing the red button and putting a click on it. once this function runs in the brackets is what you're telling it to do once clicked
});

$(".green-crystal").on("click", function() {
  addValues(crystalButtons.green); //this is an on click function that is grabbing the red button and putting a click on it. once this function runs in the brackets is what you're telling it to do once clicked
});

$(".yellow-crystal").on("click", function() {
  addValues(crystalButtons.yellow); //this is an on click function that is grabbing the red button and putting a click on it. once this function runs in the brackets is what you're telling it to do once clicked
});
