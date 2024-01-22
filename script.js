var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  });

}

document.addEventListener("keypress", function(event) {

  makeSound(event.key);

  buttonAnimation(event.key);

});


function makeSound(key) {

  switch (key) {
    case "w":
      var tom = new Audio("sounds/tom.wav");
      tom.play();
      break;

    case "a":
      var snare = new Audio("sounds/snare.wav");
      snare.play();
      break;

    case "s":
      var openhat = new Audio('sounds/openhat.wav');
      openhat.play();
      break;

    case "d":
      var boom = new Audio("sounds/boom.wav");
      boom.play();
      break;

    case "j":
      var clap = new Audio('sounds/clap.wav');
      clap.play();
      break;

    case "k":
      var hihat = new Audio('sounds/hihat.wav');
      hihat.play();
      break;

    case "l":
      var kick = new Audio('sounds/kick.wav');
      kick.play();
      break;

    default: console.log(key);

  }
}


function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}