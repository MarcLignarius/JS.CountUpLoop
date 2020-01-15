$(function() {
	$("#countUp").submit(function(event) {
		event.preventDefault();
		let userInput1 = $("#userInput1").val();
		let userInput2 = $("#userInput2").val();
		let form = document.getElementById("countUp");
		form.reset();	
		//Check for empty fields
		if (userInput1 == "" || userInput2 == "") {
			alert("Both fields are required.");
			} else {
				alert('All good');	
			}
		}
	);
});