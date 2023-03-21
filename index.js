const buttonColors = ["red", "blue", "green", "yellow"];
const gamePattern = [];
const userClickedPattern = [];
let level = 0;


function nextSequence(){

  let randomNumber = Math.floor(Math.random()*4);
  let randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);
  // Giving color to button selected
   $("#"+randomChosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

  //APPLYING Different sounds to diff buttons
  playSound(randomChosenColor);

    level++;
    $("h1").text("Level "+ level);
}
function playSound(exp){
  switch (exp) {
    case 'red':
      let audioRed = new Audio("sounds/red.mp3");
      audioRed.play();
      break;
    case 'blue':
      let audioBlue = new Audio("sounds/blue.mp3");
      audioBlue.play();
      break;
    case 'green':
      let audioGreen = new Audio("sounds/green.mp3");
      audioGreen.play();
      break;
    case 'yellow':
      let audioYellow = new Audio("sounds/yellow.mp3");
      audioYellow.play();
      break;
    default:
      let audioWrong = new Audio("sounds/wrong.mp3");
      audioWrong.play();
      console.log(exp);
  }
}
function animatePress(currentcolor){
  let colorClicked = "#" + currentcolor;
  $(colorClicked).addClass("pressed");
  setTimeout(function(){$(colorClicked).removeClass("pressed");},100); //executd after 100ms
}
//GAME STARTS
let firstpress = true; //as only on first keypress start indication to be given

if(firstpress === true)
{
  $(document).keypress(function(){
  if(firstpress==true){
  nextSequence();
}
  firstpress = false;
});
}

function checkAnswer(currentlevel){
  if (userClickedPattern[currentlevel]===gamePattern[currentlevel]) {
    console.log("success");
  } else {
    console.log("failure");
  }
}

$(".btn").on("click",function(event){
  let userChosenColour = event.target.id; //GIVES ID OF THE BUTTON CLICKED
  userClickedPattern.push(userChosenColour);
  console.log(userClickedPattern);
  checkAnswer();
  playSound(userChosenColour);
  // nextSequence();
  animatePress(userChosenColour);
});
