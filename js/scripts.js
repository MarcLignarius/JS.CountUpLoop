$(function() {
	$("#countup").submit(function(event) {
		event.preventDefault();
		var number1 = parseInt($("#countTo").val());
		var number2 = parseInt($("#countBy").val());
		console.log (number1);
		console.log (number2);

		if((number1 >= 0 || number2 >= 0) || (number1 >= 0 && number2 >= 0)) {
				$("#output").text("Please enter numbers greater than zero.");
			} else {
				var total = 0;
				for(var index = 0; index <= number1; index += number2) {
				var result = $("#output").append(index + ", ");
			};
		}
	});
});
