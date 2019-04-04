var numbers = [ "0","1","2","3","4","5","6","7","8","9",];
var numbersRoman = [" ", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"]
var numbersRoman2 = ['',"X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"]
var number_user ="89"
var result="";
var romOne = ""
var romTwo = ""
var number_user2= ""


		if (number_user.length === 1) {
    for (var i=0; i< number_user.length ; i++) {
    for (let elt of number_user){
      if (numbers.includes(elt)) {
    romOneb = numbers.indexOf(elt);
    result = numbersRoman[romOneb];
    console.log("-")
    }
    }
    }
		}
 		if ( number_user.length>1 && number_user.length<3) {
    number_user2 = number_user.slice(0,1);
    number_user3 = number_user.slice(1,2);
    for (let elt of numbers) {
    	if (number_user2.includes(elt)) {
    romOne = numbers.indexOf(elt)
    }
    }
    	for (let elt of number_user2) {
    	if (numbers.includes(elt)) {
    romTwo = numbers.indexOf(elt)
    }
    }
    result= numbersRoman2[romOne] + numbersRoman[romTwo];
   }

 console.log(result)

//user logic
$(document).ready(function(){
  $("form#formOne").submit(function(event){
    event.preventDefault();
    $("#finalResult").text(romanNum(number_user_result));
    $("#hidden").show();
});
});


var numbers = [ "0","1","2","3","4","5","6","7","8","9",];
var onesRoman = [" ", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
var tensRoman = ['',"X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
var hundredRoman =[" ","C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
var thousandRoman = [" ", "M", "MM", "MMM"];
var number_user ="8";
var result="";
var nbOne = "";
var nbTwo = "";
var nbThree = "";
var nbFour = "";
var Tnumber_user1 = "";
var number_user2= "";
var number_user3= "";
var number_user4= "";


/* 		if (number_user.length === 1) {
		    for (var i=0; i< number_user.length ; i++) {
		    for (let elt of number_user){
		      if (numbers.includes(elt)) {
		    romOneb = numbers.indexOf(elt);
		    result = onesRoman[romOneb];
		    console.log("-")
		    }
		    }
		    }
		} */
 		if ( number_user.length< 4) {
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
    result= thousandRoman[nbOne] + hundredRoman[nbTwo] + tensRoman[nbThree] + onesRoman[nbFour];
    }
    }
   }


console.log(number_user1, nbOne , )
