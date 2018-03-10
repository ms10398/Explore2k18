var exploreImage = false;
var exploreImageElem = $('#explore-image');
var countEventAnimation = 0 , countTeamAnimation = 0;
var sideMenuElement0 , sideMenuElement1 , sideMenuElement2 , sideMenuElement3;
var dateArray = ['SEE YOU ON 3' 
					, 'SEE YOU ON 31' 
					, 'SEE YOU ON 31<sup>s</sup>' 
					, 'SEE YOU ON 31<sup>st</sup>' 
					, 'SEE YOU ON 31<sup>st</sup> M' 
					, 'SEE YOU ON 31<sup>st</sup> MA' 
					, 'SEE YOU ON 31<sup>st</sup> MAR' 
					, 'SEE YOU ON 31<sup>st</sup> MARC' 
					, 'SEE YOU ON 31<sup>st</sup> MARCH' 
					, 'SEE YOU ON 31<sup>st</sup> MARCH 2' 
					, 'SEE YOU ON 31<sup>st</sup> MARCH 20' 
					, 'SEE YOU ON 31<sup>st</sup> MARCH 201' 
					, 'SEE YOU ON 31<sup>st</sup> MARCH 2018'];
var dateElem = document.getElementById('changingText');
var dateArrayIndex = 0;

setInterval(function () {
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
	if($.scrollify.current()[0].id === 'header') {
		console.log(0);
		countEventAnimation = 0;
		countTeamAnimation = 0;
		if(sideMenuElement1.hasClass('fa-circle')) {
			sideMenuElement1.removeClass('fa-circle');
			sideMenuElement1.addClass('fa-circle-o');
		}
		if(sideMenuElement2.hasClass('fa-circle')) {
			sideMenuElement2.removeClass('fa-circle');
			sideMenuElement2.addClass('fa-circle-o');
		}
		if(sideMenuElement3.hasClass('fa-circle')) {
			sideMenuElement3.removeClass('fa-circle');
			sideMenuElement3.addClass('fa-circle-o');
		}
		if(sideMenuElement0.hasClass('fa-circle-o')) {
			sideMenuElement0.removeClass('fa-circle-o');
			sideMenuElement0.addClass('fa-circle');
		}
	}
	if($.scrollify.current()[0].id === 'div1' && countEventAnimation < 1) {
		console.log(1);
		if(sideMenuElement2.hasClass('fa-circle')) {
			sideMenuElement2.removeClass('fa-circle');
			sideMenuElement2.addClass('fa-circle-o');
		}
		if(sideMenuElement3.hasClass('fa-circle')) {
			sideMenuElement3.removeClass('fa-circle');
			sideMenuElement3.addClass('fa-circle-o');
		}
		if(sideMenuElement0.hasClass('fa-circle')) {
			sideMenuElement0.removeClass('fa-circle');
			sideMenuElement0.addClass('fa-circle-o');
		}
		if(sideMenuElement1.hasClass('fa-circle-o')) {
			sideMenuElement1.removeClass('fa-circle-o');
			sideMenuElement1.addClass('fa-circle');
		}
		countEventAnimation++;
		countTeamAnimation = 0;
		$('#div1-inner-span').attr('style','display:block;');
		$('#div1-inner').addClass('slideInDown');
		setTimeout(function () {
			$('#div1-inner').removeClass('slideInDown');
		},700);
	}
	if($.scrollify.current()[0].id === 'div2' && countTeamAnimation < 1) {
		console.log(2);
		countTeamAnimation++;
		if(sideMenuElement1.hasClass('fa-circle')) {
			sideMenuElement1.removeClass('fa-circle');
			sideMenuElement1.addClass('fa-circle-o');
		}
		if(sideMenuElement3.hasClass('fa-circle')) {
			sideMenuElement3.removeClass('fa-circle');
			sideMenuElement3.addClass('fa-circle-o');
		}
		if(sideMenuElement0.hasClass('fa-circle')) {
			sideMenuElement0.removeClass('fa-circle');
			sideMenuElement0.addClass('fa-circle-o');
		}
		if(sideMenuElement2.hasClass('fa-circle-o')) {
			sideMenuElement2.removeClass('fa-circle-o');
			sideMenuElement2.addClass('fa-circle');
		}
		$('#div1-inner-span').attr('style','display:none;');
		$('#div2-inner-span').attr('style','display:block;')
		countEventAnimation = 0;
		$('#div2-inner').addClass('slideInLeft');
		setTimeout(function () {
			$('#div2-inner').removeClass('slideInLeft');
		},1000);
	}	
},2000);

setInterval(function () {
	if(dateArrayIndex === dateArray.length) {
		dateArrayIndex = 0;
	}
	dateElem.innerHTML = (dateArray[dateArrayIndex]);
	dateArrayIndex++;
},500);
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
      var pagination = "<ul style='position:fixed;list-style-type:none;' class=\"pagination\">";
      var activeClass = "";
      $(".panel").each(function(i) {
        activeClass = "";
        if(i===0) {
          activeClass = "active";
        }
        pagination += "<li><a class=\"" + activeClass + "\" href=\"#" + $(this).attr("data-section-name") + "\"><span class=\"hover-text\"><i id='" + i +"' style='color:white;font-size:10px;' class='fa fa-circle-o' aria-hidden='true'></i></span></a></li>";
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
		sideMenuElement0 = $('#0');
		sideMenuElement1 = $('#1');
		sideMenuElement2 = $('#2');
		sideMenuElement3 = $('#3');
    }
  });
});
