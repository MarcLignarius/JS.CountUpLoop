$(function() {
	$("#countup").submit(function(event) {
		event.preventDefault();
		var number1 = parseInt($("#countTo").val());
		var number2 = parseInt($("#countBy").val());
		if((number1 === 0 || number2 === 0) || (number1 === 0 && number2 === 0) || (number2 > number1)) {
				$("#output").text("Please enter numbers greater than zero. Count To must be greater than Count By.");
			}	else {
				var total = 0;
				for(var index = 0; index <= number1; index += number2) {
				var result = $("#output").append(index + ", ");
			};
		}
	});
});


// if(number2 > number1) {
// 		$("#output").text("Count To number must be greater than Count By number.");
// 	} else if((number1 >= 0 || number2 >= 0) || (number1 >= 0 && number2 >= 0)) {
// 		$("#output").text("Please enter numbers greater than zero.");
// 	}	else {
// 		var total = 0;
// 		for(var index = 0; index <= number1; index += number2) {
// 		var result = $("#output").append(index + ", ");
// 	};
// }
// });
// });
