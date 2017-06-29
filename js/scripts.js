var score = 0;
console.log("App initialized. Good to go.");

$('#catPic').click(function(e) {
  score++;
  $('#score').text(score);
});
