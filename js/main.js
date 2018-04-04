jQuery("document").ready(function(){
  var isFirst = true;

$('.fadein img:gt(0)').hide();
$(".fadein").hover(function(){
	if (isFirst) {    
    timer = setInterval(function(){   $('.fadein :first-child').fadeOut()
    .next('img').fadeIn()
    .end().appendTo('.fadein');},             
    1000);
    isFirst = false;
  }
}, function() {
clearInterval(timer);
isFirst = true;
});
});

$("#autor").mouseenter(function(){
  $(".student").slideToggle("slow");
}); 