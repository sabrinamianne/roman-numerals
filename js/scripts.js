//user logic
$(document).ready(function() {
  $("form#formOne").submit(function(event) {
    event.preventDefault();
    var number_user = $("input#userInput").val();

//Back end logic

var regex = /[1234567890]/gi
var numbers = [ "0","1","2","3","4","5","6","7","8","9",];
var onesRoman = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
var tensRoman = ["","X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
var hundredRoman =["","C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
var thousandRoman = ["", "M", "MM", "MMM"];
var result="";
var nbOne,nbTwo,nbThree,nbFour; nbOne=nbTwo=nbThree=nbFour = "";
var number_user1,number_user2,number_user3,number_user4;number_user1=number_user2=number_user3=number_user4= "";


 for (let elt of number_user) {
  	if (! elt.match(regex)) {
     alert("If you want convert a number to a Roman number you need to input a number so please enter a Number between 1 and 3999.")
     }
    }
if (number_user.length< 5) {
    number_user1 = number_user.slice(0,1);
    number_user2 = number_user.slice(1,2);
    number_user3 = number_user.slice(2,3);
    number_user4 = number_user.slice(3,4);
    for (let elt of number_user1) {
    	if (numbers.includes(elt)) {
        nbOne = numbers.indexOf(elt)
        result = onesRoman[nbOne]
      }
    }
    for (let elt of number_user2) {
    	if (numbers.includes(elt)) {
        nbTwo = numbers.indexOf(elt)
        result= tensRoman[nbOne] + onesRoman[nbTwo];
      }
    }
  	for (let elt of number_user3) {
    	if (numbers.includes(elt)) {
        nbThree = numbers.indexOf(elt)
        result=  hundredRoman[nbOne] + tensRoman[nbTwo] + onesRoman[nbThree];
      }
    }
    for (let elt of number_user4) {
  	   if (numbers.includes(elt)) {
        nbFour = numbers.indexOf(elt)
        result= thousandRoman[nbOne] + hundredRoman[nbTwo] + 		tensRoman[nbThree] + onesRoman[nbFour];
  	     if (numbers[nbOne].match(/[4567890]/gi)) {
           alert("The largest number you can write in Roman numerals is 3999 so please stop trying to break my code and enter a value between 1 and 3999.")
           result= " ";
         }
       }
    }
  }
$("#finalResult").text(result);
$("#hidden").show();

});
});
