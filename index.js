
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