$(document).ready(function(){
	var scrollLink = $(".scroll");

	scrollLink.click(function(event){
		event.preventDefault();
		$("body, html").animate( {
			scrollTop: $(this.hash).offset().top
		})
	});
});

$("body").scrollspy({ target: "#navbar" })

