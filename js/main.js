// scrollspy on navigation
$('body').scrollspy({ target: '.header-content' })

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

// window.onresize = function(e) {
//   var hl = $(".left").outerHeight(); //获取左侧left层高度
//   hl = hl - .4*hl;
//   var hr = $(".right").outerHeight(); //获取右侧right层高度
//   hr = hr - .4*hr;
//   var mh = Math.max(hl,hr); //比较hl与hr高度并值赋给变量mh
//   // alert(mh);
//   $(".left").height(mh); //left层高度设高度mh
//   $(".right").height(mh); //right层高度设高度
// }


// modified carousel
// $('.carousel').carousel();
/*
var carousels = $('.carousel');
carousels.each(function() {
  var $obj = $(this);
  var $inner = $obj.find('.carousel-inner');

  var id = 'uuid' + new Date().getTime();
  $obj.addClass(id);

  if ($obj.data('shift') === 1) {
    var items = $obj.find('.item > [class*="col-"]'),
        visibleCnt = $obj.find('.item:first [class*="col-"]').length,
        wrapper = "";

    var rule_base = '.carousel.' + id + ' .carousel-inner > .item',
        styles = $('<style></style>'),
        rules = [];
        rules[0] = rule_base + '.next {left: ' + (100 / visibleCnt) + '%; transform: none;}';
        rules[1] = rule_base + '.active {left: 0;}';
        rules[2] = rule_base + '.active.left {left: -' + (100 / visibleCnt) + '%; transform: none;}';
        rules[3] = rule_base + '.next.left {left: 0;}';
        rules[4] = rule_base + '.active.right {left: ' + (100 / visibleCnt) + '%; transform: none;}';
        rules[5] = rule_base + '.prev.right {left: 0;}';
        rules[6] = rule_base + '.prev {left: -' + (100 / visibleCnt) + '%; transform: none;}';
    for (var i = 0; i < rules.length; i++) {
      styles.append(rules[i]);
    }
    $obj.prepend(styles);

    for (var i = 0; i < $(items).length; i++) {
      var $item = $(items[i]);
      var parent = $item.parent();
      if (parent.hasClass('item')) {
        if (!wrapper.length) {
          wrapper = parent.clone().removeClass('active').html('');
        }
        $item.unwrap();
      }

      var itemGroup = [$item];
      for (var x = 1; x < visibleCnt; x++) {
        var a = i + x;
        var next = $(items[a]);
        if (!next.length) {
          next = $(items[(a - $(items).length)]);
        }
        itemGroup[x] = next.clone();
      }
      var newSet = wrapper.clone().html(itemGroup);
      if (i == 0) {
        newSet.addClass('active');
      }
      newSet.appendTo($inner);
    }
  }
});
*/
