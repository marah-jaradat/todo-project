var yourName = prompt("Please enter your name:");

var yourGender = prompt("Please enter your Gender(male/female):");

var yourAge = prompt("Please enter your Age:");

if (yourAge <= 0) {
  alert("This is not an age");
}

var welcomeMassege = prompt("would you like to see the welcoming message?");

var mr = "Welcome Mr";
var ms = "Welcome Ms";

if (welcomeMassege.toLowerCase() === "y" || "yes") {
  if (yourGender.toLowerCase() === "male") {
    alert(mr + " " + yourName);
  } else if (yourGender.toLowerCase() === "female") {
    alert(ms + " " + yourName);
  } else {
    alert("Welcome " + " " + yourName);
  }
}

// var arr = [];
// var firstQuestion = prompt("Do you love coding?\n (yes/no)");
// arr.push(firstQuestion);

// var secondQuestion = prompt("Would you like to know more about JS?\n (yes/no)");
// arr.push(secondQuestion);

// var thirdQuestion = prompt("Are you planning to be professional?\n (yes/no)");
// arr.push(thirdQuestion);

// console.log(arr);
// if (firstQuestion === "yes" || "no") {
//   console.log(firstQuestion);
// } else {
//   console.log("invalid");
// }

// arr.push(prompt("your answers"));
// for(var i = 0; i <= 3; i++)
//    arr.push(prompt("Enter a number");
// // function quesArr(array){
//     return array.shift();
// }
// let result= quesArr()
// console.log();
