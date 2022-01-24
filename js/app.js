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

var arr = [];
var firstQuestion = prompt("Do you love coding?\n (yes/no)");
if (firstQuestion.toLowerCase() === "yes") {
  arr.push(firstQuestion);
} else if (firstQuestion.toLowerCase() === "no") {
  arr.push(firstQuestion);
} else {
  arr.push("Invalid");
}
console.log(arr);

var secondQuestion = prompt("Would you like to know more about JS?\n (yes/no)");
if (secondQuestion.toLowerCase() === "yes") {
  arr.push(secondQuestion);
} else if (secondQuestion.toLowerCase() === "no") {
  arr.push(secondQuestion);
} else {
  arr.push("Invalid");
}
console.log(arr);

var thirdQuestion = prompt("Are you planning to be professional?\n (yes/no)");
if (thirdQuestion.toLowerCase() === "yes") {
  arr.push(thirdQuestion);
} else if (thirdQuestion.toLowerCase() === "no") {
  arr.push(thirdQuestion);
} else {
  arr.push("Invalid");
}
console.log(arr);
