// Check Off Specific todos by clicking
//When every li is clicked insied a ul, fire the function code
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

//Click on X to delete todo

$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		// Grabbing new text from input
		var todoText = $(this).val();
		$(this).val("");
		// create new Li and add to ul
		$("ul").append("<li><span><i class='fa fa-minus' aria-hidden='true'></i></span> " + todoText + "</li>")
	}
});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle()
});