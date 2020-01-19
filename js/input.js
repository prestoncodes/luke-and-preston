var terminal = $("#terminal");
var sendButton = $("#sendButton");

let placeholderText = "Enter a command";
let userInput = "";

setPlaceholderText();

function setPlaceholderText() {
  terminal.val(placeholderText);
}

function submitText() {
  //send text to Game.js
  userSubmittedText(terminal.val());

  //Reset text field
  setPlaceholderText();
}

sendButton.on("click", function() {
  submitText();
});
terminal.on("focus", function() {
  if (terminal.val() == placeholderText) {
    terminal.val("");
  }
});

terminal.on("blur", function() {
  if (terminal.val() == "") {
    terminal.val(placeholderText);
  }
});

terminal.on("keyup", function(e) {
  //this is the enter key
  if (e.keyCode === 13) {
    submitText();
  }
});
