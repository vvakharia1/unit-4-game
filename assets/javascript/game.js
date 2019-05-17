// 1.0 Creation of buttons on the page for the four crystals
// look up how to create an image clickable 

var crystalButtons = ["RED", "BLUE", "YELLOW", "GREEN"];

function renderButtons() {
    for (var i = 0; i < crystalButtons.length; i++) {

        var crystalBtn = $("<button>"); // creating a variable for the new button and your declaring it as a button 
        crystalBtn.addClass("color"); // you add the class so that in the css file you can select it (all of them and alter them, all the buttons)
        crystalBtn.attr({
            id: crystalButtons[i],
            value: Math.random() * (99 - 12) + 12 // this is adding two different attr, one is assigning a consistant random number (value) and the other ID attr is assigning an id to each specific crystal
        }) // this is an html attribute that adds in an id to each crystal when the for loop is run. This helps you differentiate what button was clicked. They will have the id of red or blue etc.. 
        crystalBtn.text(crystalButtons[i]); // this just add text of the array onto the buttons
        $("#buttons-view").append(crystalBtn); // this is grabbing the id that has buttons-view and is pinning the buttons onto it

    }
}
renderButtons();

$("#RED").on("click", function(event){
    console.log(event); //this is an on click function that is grabbing the red button and putting a click on it. once this function runs in the brackets is what you're telling it to do once clicked
});

