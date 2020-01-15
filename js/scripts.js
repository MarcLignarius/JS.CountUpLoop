$(function() {
	$("#countUp").submit(function(event) {
		event.preventDefault();
		let userInput1 = $("#userInput1").val();
		let userInput2 = $("#userInput2").val();
		//Check for empty fields
		if (userInput1 == "" || userInput2 == "") {
			alert("Both fields are required.");
		//Check for non-numerical values
		} else if (isNaN(userInput1) || isNaN(userInput2)) {
			alert("Numbers only please.");
		} else {
		//If non-empty and numerical, parse user input
			let countTo = parseFloat(userInput1);
			let countBy = parseFloat(userInput2);
			//Check for negative numbers
			if (countTo < 0 || countBy < 0) {
				alert("Positive numbers only please.");
			//Check for non-whole numbers
			} else if (countTo % 1 !== 0 || countBy % 1 !== 0) {
				alert("Let's stick to whole numbers shall we?");
			} else if (countBy > countTo) {
			//Check that countBy is not higher than countTo
				alert("Count to number must be higher than count by number.");
			} else {
				//Count up to countTo number by adding up countBy
				for (var index = 0; index <= countTo; index += countBy) {
					var result = $("#output").append(index + ", ");
				}	
			}
		};
	});
});