$(function() {
	$("#countUp").submit(function(event) {
		event.preventDefault();
		let userInput1 = ($("#userInput1").val());
		let userInput2 = ($("#userInput2").val());
		console.log('userInput1', userInput1);
		console.log('userInput2', userInput2);
		if (isNaN(userInput1) || isNaN(userInput2)) {
			alert("Please enter a value in both fields.");
			return false;
		} else {
			let countTo = parseInt(userInput1);
			let countBy = parseInt(userInput2);
			console.log('countTo', countTo);
			console.log('countBy', countBy)
		}
	});
})
