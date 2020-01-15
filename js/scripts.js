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
				alert('All good');	
			}
		}
	);
});