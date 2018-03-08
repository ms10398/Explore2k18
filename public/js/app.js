var exploreImage = false;
setInterval(function () {
	if(!exploreImage) {
		exploreImage = true;
		if($('#explore-image').hasClass('zoomOut')) {
			$('#explore-image').removeClass('zoomOut');
		}
		$('#explore-image').addClass('zoomIn')
	}
	else
	{
		exploreImage = false;
		$('#explore-image').removeClass('zoomIn');
		$('#explore-image').attr('style','zoomOut');
	}
},800);