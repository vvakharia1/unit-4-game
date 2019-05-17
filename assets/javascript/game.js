// 1.0 Creation of buttons on the page for the four crystals
var crystalButtons = ["RED", "BLUE", "YELLOW", "GREEN"];

function renderButtons() {
for (var i = 0; i < crystalButtons.length; i++);

var crystalBtn = $("<button>");
crystalBtn.addClass("color");
crystalBtn.attr("data-name", crystalButtons[i]);
crystalBtn.text(crystalButtons[i]);
$("#buttons-view").append(crystalBtn);

}
