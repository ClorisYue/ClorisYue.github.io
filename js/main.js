// scrollspy on navigation
$('body').scrollspy({ target: '.spynav' });
// $('[data-spy="scroll"]').each(function () {
//   var $spy = $(this).scrollspy('refresh')
// });


// function locateAt(e){
//     e =  document.getElementById(e);
//     y = e.offsetTop;
//     while(e=e.offsetParent){ y += e.offsetTop;}
//     y-=94;/*height of fixed navigation*/
//     window.scrollTo(0,y);
// }
// function back2home(e) {
// 	window.location.href= "index.html?id=0";
// }

$(document).ready(function() {
	// sid = location.search.slice(1);
	// if (sid == "id=0") {
	// 	locateAt('pres');
	// };
	$(window).on('scroll', function() {
		var scroll = $(window).scrollTop();
		if (scroll >= 50) {
			$('#header').addClass('fixed');
      $('#logo').attr('src', 'img/icons/wy.png')
		} else {
			$('#header').removeClass('fixed');
      $('#logo').attr('src', 'img/icons/wy2.png')
		}
	});

	var nav = $('nav[role="navigation"]');
	// navigation on mobile view
	$('.nav-toggle').on('click', function() {
		$(this).toggleClass('nav-close');
		nav.toggleClass('open');
		return false;
	});
	nav.find('a').on('click', function() {
		$('.nav-toggle').toggleClass('nav-close');
		nav.toggleClass('open');
	});

});

// wow.js add animation when scroll down
 wow = new WOW(
  {
    animateClass: 'animated',
    offset:       100,
    live:         false,
    mobile:       false,
    callback:     function(box) {
      console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
    }
  }
);
wow.init();

