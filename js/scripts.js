$(function() {
  $("#countUp").submit(function(event) {
    event.preventDefault();
    let userInput1 = $("#userInput1").val();
    let userInput2 = $("#userInput2").val();
    let form = document.getElementById("countUp");
    form.reset();
    //Check for empty fields
    if (userInput1 == "" || userInput2 == "") {
      $("#output").text("Both fields are required.");
      //Check for non-numerical values
    } else if (isNaN(userInput1) || isNaN(userInput2)) {
      $("#output").text("Numbers only please.");
    } else {
      //If non-empty and numerical, parse user input
      let countTo = parseFloat(userInput1);
      let countBy = parseFloat(userInput2);
      //Check for negative numbers
      if (countTo < 0 || countBy < 0) {
        $("#output").text("Positive numbers only please.");
        //Check for non-whole numbers
      } else if (countTo % 1 !== 0 || countBy % 1 !== 0) {
        $("#output").text("Let's stick to whole numbers shall we?");
      } else if (countBy > countTo) {
        //Check that countBy is not higher than countTo
        $("#output").text("Count to number must be higher than count by number.");
      } else {
        //Count up to countTo number by adding up countBy
        let result = [];
        for (let index = 0; index <= countTo; index += countBy) {
          result.push(" " + index);
          $("#output").text(result);
        }
      }
    }
  });
});
