
function add(id) {
  var score = parseInt(document.getElementById(id).innerHTML);
  ++score;
  document.getElementById(id).innerHTML = score;
}

function subtract(id) {
  var score = parseInt(document.getElementById(id).innerHTML);
  if (score > 0) {
    --score;
  }
  document.getElementById(id).innerHTML = score;
}

function showInput(id_user_input, id_submit, id_team) {
  let input = document.getElementById(id_user_input).value;
  document.getElementById(id_team).innerHTML = input;
  document.getElementById(id_user_input).style.visibility = 'hidden';
  document.getElementById(id_submit).style.visibility = 'hidden';
}

var minutes = 5
var seconds = 0

function setTimer(id_user_input_timer, class_timer) {
  let input = parseInt(document.getElementById(id_user_input_timer).value);
  minutes = input;
  var timer_text = input.toString() + ":00";
  document.getElementsByClassName(class_timer)[0].innerText = timer_text;
  document.getElementById("set_time").style.visibility = 'hidden';
}

// -------- coundown-timer-----
  function countdown( elementName )//, minutes, seconds )
  {
      var element, endTime, hours, mins, msLeft, time;
      function twoDigits( n )
      {
          return (n <= 9 ? "0" + n : n);
      }
      function updateTimer()
      {
          msLeft = endTime - (+new Date);
          if ( msLeft < 1000 ) {
              element.innerHTML = "Time is up!";
              document.getElementById("set_time").style.visibility = 'visible';
          } else {
              time = new Date( msLeft );
              hours = time.getUTCHours();
              mins = time.getUTCMinutes();
              element.innerHTML = (hours ? hours + ':' + twoDigits( mins ) : mins) + ':' + twoDigits( time.getUTCSeconds() );
              setTimeout( updateTimer, time.getUTCMilliseconds() + 500 );
          }
      }
      element = document.getElementById( elementName );
      endTime = (+new Date) + 1000 * (60*minutes + seconds) + 500;
      updateTimer();
  }
