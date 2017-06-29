var score1 = 0;
var score2 = 0;
console.log("App initialized. Good to go.");
var catName1 = "Tiddles";
var catName2 = "Fluffy";

$('#catName1').text(catName1);
$('#catName2').text(catName2);


$('#catPic1').click(function(e) {
  score1++;
  $('#score1').text(score1);
});

$('#catPic2').click(function(e) {
  score2++;
  $('#score2').text(score2);
});
