$(function() {
	$("#countUp").submit(function(event) {
	event.preventDefault();
	let number1 = parseInt($("#countTo").val());
	let number2 = parseInt($("#countBy").val());
	console.log('number1', number1);
	console.log('number2', number2);
	});
});
