var exploreImage = false;
var exploreImageElem = $('#explore-image');

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
			},1000);
			exploreImageElem.addClass('fadeOut');
	},1000);	
},3000);

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
