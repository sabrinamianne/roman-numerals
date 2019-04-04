//Back end logic

var numbers = [ "0","1","2","3","4","5","6","7","8","9"];
var numbersRoman = [" ", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"]
var number_user_result =  $("form#userInput").val();;
var result="";
var romOne;



//user logic
$(document).ready(function() {
  $("form#formOne").submit(function(event) {
    event.preventDefault();
    $("#finalResult").text(romanNum(number_user_result));

});
});
