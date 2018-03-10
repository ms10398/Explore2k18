var exploreImage = false;
var exploreImageElem = $('#explore-image');
var countEventAnimation = 0 , countTeamAnimation = 0;

setInterval(function () {
	// if(!exploreImage) {
	// 	exploreImage = true;
	// 	if($('#explore-image').hasClass('bounceOutUp')) {
	// 		$('#explore-image').removeClass('bounceOutUp');
	// 	}
	// 	$('#explore-image').addClass('rollIn');
	// 	setTimeout(function () {
	// 		$('#explore-image').removeClass('rollIn');
	// 		$('#explore-image').addClass('bounceInUp');
	// 	},1000);
	// }
	// else
	// {
	// 	exploreImage = false;
	// 	$('#explore-image').removeClass('bounceInUp');
	// 	$('#explore-image').addClass('rollOut');
	// 	setTimeout(function () {
	// 		$('#explore-image').removeClass('rollOut');
	// 		$('#explore-image').addClass('bounceOutUp');
	// 	},1000);	
	// }
	$('#image-inner-div').attr('style','width:50%;height:auto;');
	if(exploreImageElem.hasClass('fadeOut')) {
		exploreImageElem.removeClass('fadeOut');
	}
	exploreImageElem.addClass('bounceInDown');
	setTimeout(function () {
		exploreImageElem.removeClass('bounceInDown');
		$('#image-inner-div').attr('style','width:70%;height:70%;');
			exploreImageElem.addClass('zoomIn');
			setTimeout(function () {
				exploreImageElem.removeClass('zoomIn');
			},800);
			exploreImageElem.addClass('fadeOut');
	},800);
	if($.scrollify.current()[0].id === 'div1' && countEventAnimation < 1) {
		countEventAnimation++;
		countTeamAnimation = 0;
		$('#div1-inner-span').attr('style','display:block;');
		$('#div1-inner').addClass('slideInDown');
		setTimeout(function () {
			$('#div1-inner').removeClass('slideInDown');
		},700);
	}
	if($.scrollify.current()[0].id === 'div2' && countTeamAnimation < 1) {
		countTeamAnimation++;
		$('#div1-inner-span').attr('style','display:none;');
		$('#div2-inner-span').attr('style','display:block;')
		countEventAnimation = 0;
		$('#div2-inner').addClass('slideInLeft');
		setTimeout(function () {
			$('#div2-inner').removeClass('slideInLeft');
		},1000);
	}	
},2000);

$(function() {
  $.scrollify({
		section:".panel",
    scrollbars:false,
    before:function(i,panels) {

      var ref = panels[i].attr("data-section-name");

      $(".pagination .active").removeClass("active");

      $(".pagination").find("a[href=\"#" + ref + "\"]").addClass("active");
    },
    afterRender:function() {
      var pagination = "<ul class=\"pagination\">";
      var activeClass = "";
      $(".panel").each(function(i) {
        activeClass = "";
        if(i===0) {
          activeClass = "active";
        }
        pagination += "<li><a class=\"" + activeClass + "\" href=\"#" + $(this).attr("data-section-name") + "\"><span class=\"hover-text\">" + $(this).attr("data-section-name").charAt(0).toUpperCase() + $(this).attr("data-section-name").slice(1) + "</span></a></li>";
      });

      pagination += "</ul>";

      $(".home").append(pagination);
      /*

      Tip: The two click events below are the same:

      $(".pagination a").on("click",function() {
        $.scrollify.move($(this).attr("href"));
      });

      */
      $(".pagination a").on("click",$.scrollify.move);
    }
  });
});
