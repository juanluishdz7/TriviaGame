//variables---------------------------------------------------------------
var number = 30;
var timeUp;
var correctA = 0;
var incorrectA = 0;

//functions----------------------------------------------------------------
$('.enter_link').click(function() { 
  $(this).parent().fadeOut(500);
  
});

function run(){
  timeUp = setInterval(decrement, 1000);
}

function decrement() {
  number--;
  $("#timeleft").html(number);
  if (number === 0){
    stop();
    results();
  }
}


function results() {
  if (document.getElementById("q1b").checked) {
    correctA++;
  }
  else {
    incorrectA++;
  }
  if (document.getElementById("q2a").checked) {
    correctA++;
  }
  else {
    incorrectA++;
  }
  if (document.getElementById("q3d").checked) {
    correctA++;
  }
  else {
    incorrectA++;
  }
  if (document.getElementById("q4d").checked) {
    correctA++;
  }
  else {
    incorrectA++;
  }
  if (document.getElementById("q5a").checked) {
    correctA++;
  }
  else {
    incorrectA++;
  }
  $("#correct").html(correctA);
  $("#incorr").html(incorrectA);
}
function restart (){
      location.reload();
      clearInterval(timeUp);
}
function stop(){
  clearInterval(timeUp);
}


