$(document).ready(function() {

	$("#countup").submit(function(event){
		event.preventDefault();
		var number1 = parseInt($("#countTo").val());
		var number2 = parseInt($("#countBy").val());
		console.log (number1);
		console.log (number2);

		var total = 0;
		for(var index = 0; index <= number1; index += number2) {
			alert(index);
		}
	});
});
