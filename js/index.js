$(document).ready(function(){
  adjustLogo();
	$('#nav-icon2').click(function(){
		$(this).toggleClass('open');
    $( ".menu" ).slideToggle( "slow");
	});
  $( ".menu" ).hide();
});
$(window).on('resize', adjustLogo);
$(window).on('load', adjustLogo);
// Make sure the splash margin is at a minimum of 35px
function adjustLogo(){
  var splash = $("#splash");
  var margin = window.innerHeight - (splash.height());
  margin = Math.max(margin/2, 35);
  splash.css('margin-top', margin.toString() + "px");
  splash.css('margin-bottom', margin.toString() + "px");
}

$(document).ready(function(){
  $("a").on('click', function(event) {

    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1000, function(){
        window.location.hash = hash;
      });
    }
  });
});

var backgroundArray = ["#1","#2","#3","#4","#5","#6","#7"];

function doScroll() {
  var section = ($(document).height())/6;
  var index = Math.floor(document.body.scrollTop/section);
  for (var i = 0; i < index; i++) {
	$(backgroundArray[i]).css({'visibility': 'hidden'});
  }
  var opacity = 1-((document.body.scrollTop/section) - index);
  $(backgroundArray[index]).css({'opacity': opacity});
  $(backgroundArray[index]).css({'visibility': 'visible'});
  if (index + 1 < backgroundArray.length) {
	$(backgroundArray[index + 1]).css({'visibility': 'visible'});
	$(backgroundArray[index + 1]).css({'opacity': '1'});
  }
  
  for (var i = index + 2; i < backgroundArray.length; i++) {
	$(backgroundArray[i]).css({'visibility': 'hidden'});
  }
}

$(document).ready(doScroll);
window.onscroll = doScroll;
