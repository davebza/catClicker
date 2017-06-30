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

function htmlbodyHeightUpdate(){
    var height3 = $( window ).height()
    var height1 = $('.nav').height()+50
    height2 = $('.main').height()
    if(height2 > height3){
        $('html').height(Math.max(height1,height3,height2)+10);
        $('body').height(Math.max(height1,height3,height2)+10);
    }
    else
    {
        $('html').height(Math.max(height1,height3,height2));
        $('body').height(Math.max(height1,height3,height2));
    }

}
$(document).ready(function () {
    htmlbodyHeightUpdate()
    $( window ).resize(function() {
        htmlbodyHeightUpdate()
    });
    $( window ).scroll(function() {
        height2 = $('.main').height()
        htmlbodyHeightUpdate()
    });
});
