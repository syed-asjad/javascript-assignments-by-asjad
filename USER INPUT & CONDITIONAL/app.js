// // USER INPUT & CONDITIONAL STATEMENT

// let city_Name = prompt("Enter a City Name:").toLowerCase();

// if(city_Name === "karachi"){

//     console.log("Welcome to the city of lights");
//     document.write("Welcome to the city of lights");
// }

//     else if(city_Name === "lahore"){

//     console.log("Welcome to city of Mughals");
//     document.write("Welcome to the city of Mughals");

// } else{

//     console.log("You have Entered a wrong city");
//     document.write("You have Entered a wrong city");
// }

// let gender = prompt("Enter a Gender I will print a welcome message for you:").toLowerCase();

// if(gender === "male"){

//     console.log("Good Morning Sir.");
//     document.write("Good Morning Sir.");
// }

// else if(gender === "female") {

//     console.log("Good Morning Mam.");
//     document.write("Good Morning Mam.");
// }

// else{

//     console.log("You have entered a wrong gender.");
//     document.write("You have entered a wrong gender.");
// }

// let see_Signal = prompt("Input the Color that you are seeing on signal:").toLowerCase()

// if(see_Signal === "red"){

//     console.log("Please Stop!");
//     document.write("<h1>Please Stop!</h1>");
// }
//     else if(see_Signal === "orange") {

//     console.log("Get Ready!");
//     document.write("<h1>Get Ready!</h1>");

//     }

//     else if(see_Signal === "green"){

//         console.log("Lets go!");
//         document.write("<h1>Lets go!</h1>");
//     }

//     else{

//         console.log("You have entered wrong color!");
//         document.write("<h1>You have entered wrong color!</h1>");

//     }

// let remaining_Fuel = +prompt("Enter fuel of you car in litre");

// if(remaining_Fuel < 0.25){

//     console.log("Please refill the fuel in your car!");
//     document.write("Please refill the fuel in your car!");
// }

// else{

//     console.log("You are ready to go!");
//     document.write("You are ready to go!");

// }

// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }

// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }

// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }

// if (c === 13){
// alert("condition 2 is true");
// }

// if (++c < 14){
// alert("condition 3 is true");
// }

// if(c === 14){
// alert("condition 4 is true");
// }

// var materialCost = 20000;

// var laborCost = 2000;

// var totalCost = materialCost + laborCost;

// if (totalCost === laborCost + materialCost){

//     alert("The cost equals");
// }

// if (true){
// alert("True");
// }

// if (false){
// alert("False");
// }

// if("car" < "cat"){
//     alert("car is smaller than cat");
//     }

// let eng_Marks = +prompt("Enter obtained marks in english");
// let urdu_Marks = +prompt("Enter obtained marks in urdu");
// let math_Marks = +prompt("Enter obtained marks in math");
// let total_Marks = 300;
// let obtained_Marks = eng_Marks + urdu_Marks + math_Marks;
// let percentage = obtained_Marks/total_Marks*100;

// if( percentage >= 80){

//     console.log(`<h1>Total Marks: ${total_Marks}</h1>`);
//     document.write(`<h1>Total Marks: ${total_Marks}</h1>`);
//     console.log(`<h1>Marks obtained: ${obtained_Marks}</h1>`);
//     document.write(`<h1>Marks obtained: ${obtained_Marks}</h1>`);
//     console.log(`<h1>Percentage: ${percentage}</h1>`);
//     document.write(`<h1>Percentage: ${percentage}</h1>`);
//     console.log(`<h1>Grade: ${"A one"}</h1>`);
//     document.write(`<h1>Grade: ${"A one"}</h1>`);
//     console.log(`<h1>Remarks: ${"Execellent"}</h1>`);
//     document.write(`<h1>Remarks: ${"Execellent"}</h1>`);

// }

// else if( percentage >= 70){

//     console.log(`<h1>Total Marks: ${total_Marks}</h1>`);
//     document.write(`<h1>Total Marks: ${total_Marks}</h1>`);
//     console.log(`<h1>Marks obtained: ${obtained_Marks}</h1>`);
//     document.write(`<h1>Marks obtained: ${obtained_Marks}</h1>`);
//     console.log(`<h1>Percentage: ${percentage}</h1>`);
//     document.write(`<h1>Percentage: ${percentage}</h1>`);
//     console.log(`<h1>Grade: ${"A"}</h1>`);
//     document.write(`<h1>Grade: ${"A"}</h1>`);
//     console.log(`<h1>Remarks: ${"Good"}</h1>`);
//     document.write(`<h1>Remarks: ${"Good"}</h1>`);
// }

// else if( percentage >= 60){

//     console.log(`<h1>Total Marks: ${total_Marks}</h1>`);
//     document.write(`<h1>Total Marks: ${total_Marks}</h1>`);
//     console.log(`<h1>Marks obtained: ${obtained_Marks}</h1>`);
//     document.write(`<h1>Marks obtained: ${obtained_Marks}</h1>`);
//     console.log(`<h1>Percentage: ${percentage}</h1>`);
//     document.write(`<h1>Percentage: ${percentage}</h1>`);
//     console.log(`<h1>Grade: ${"B"}</h1>`);
//     document.write(`<h1>Grade: ${"B"}</h1>`);
//     console.log(`<h1>Remarks: ${"Satisfactory"}</h1>`);
//     document.write(`<h1>Remarks: ${"Satisfactory"}</h1>`);
// }

// else if( percentage >= 50){

//     console.log(`<h1>Total Marks: ${total_Marks}</h1>`);
//     document.write(`<h1>Total Marks: ${total_Marks}</h1>`);
//     console.log(`<h1>Marks obtained: ${obtained_Marks}</h1>`);
//     document.write(`<h1>Marks obtained: ${obtained_Marks}</h1>`);
//     console.log(`<h1>Percentage: ${percentage}</h1>`);
//     document.write(`<h1>Percentage: ${percentage}</h1>`);
//     console.log(`<h1>Grade: ${"c"}</h1>`);
//     document.write(`<h1>Grade: ${"c"}</h1>`);
//     console.log(`<h1>Remarks: ${"You Need to improve"}</h1>`);
//     document.write(`<h1>Remarks: ${"You Need to improve"}</h1>`);
// }

// else if( percentage >= 40){

//     console.log(`<h1>Total Marks: ${total_Marks}</h1>`);
//     document.write(`<h1>Total Marks: ${total_Marks}</h1>`);
//     console.log(`<h1>Marks obtained: ${obtained_Marks}</h1>`);
//     document.write(`<h1>Marks obtained: ${obtained_Marks}</h1>`);
//     console.log(`<h1>Percentage: ${percentage}</h1>`);
//     document.write(`<h1>Percentage: ${percentage}</h1>`);
//     console.log(`<h1>Grade: ${"d"}</h1>`);
//     document.write(`<h1>Grade: ${"d"}</h1>`);
//     console.log(`<h1>Remarks: ${"Need too much hard work "}</h1>`);
//     document.write(`<h1>Remarks: ${"Need too much hard work "}</h1>`);
// }

// else{

//     console.log(`<h1>Remarks: ${"You are fail"}</h1>`);
//     document.write(`<h1>Remarks: ${"You are fail"}</h1>`);
// }

// secret_Number = 5;
// find_Number = +prompt("Guess the secret number");

// if (find_Number === secret_Number){

//     document.write("Guess game: <br>")
//     console.log("Bingo! Correct answer");
//     document.write("Bingo! Correct answer");

// }

//     else if (find_Number === secret_Number+1 || find_Number === secret_Number -1)
//     {

//         console.log("Close enough to the correct answer");
//         document.write("Close enough to the correct answer");
// }

// else{

//     console.log("To far to the correct answer");
//     document.write("To far to the correct answer");
// }

// // Prompt the user to think of a number and add 1 to it
// const userNumber = parseInt(prompt("Think of any number and add 1 to it. Then enter the result here:"));

// // Calculate the original number by subtracting 1 from the user's input
// const originalNumber = userNumber - 1;

// // Output the original number to the user
// console.log("The original number you thought of is: " + originalNumber);

// let user_Promt = +prompt("Enter a number and i will tell you the number is divisible by 3 or not");

// if(user_Promt/3 % 1){

//     console.log("No the given number is not divisible by 3")
//     document.write("No the given number is not divisible by 3")

// }

// else{

//     console.log("Yes the given number is divisible by 3")
//     document.write("Yes the given number is divisible by 3")
// }

// let user_temp = +prompt("input temperatue of you area!");

// if(user_temp >= 35){

//     document.write("It is too hot outside.");
//     console.log("It is too hot outside.");
// }

// else if(user_temp > 30){

//     document.write("The Weather today is Normal");
//     console.log("The Weather today is Normal");
// }

// else if(user_temp > 20){

//     document.write("Today’s Weather is cool");
//     console.log("Today’s Weather is cool");
// }

// else if(user_temp >= 5){

//     document.write("OMG! Today’s weather is so Cool");
//     console.log("OMG! Today’s weather is so Cool");
// }

// else{

//     document.write("You have entered a wrong temperature");
//     console.log("You have entered a wrong temperature");

// }

// let first_Number = +prompt("Enter first number below:");
// let operation = prompt(
//   "Enter a symbol that you want to perform the task + - * /"
// );
// let second_Number = +prompt("Enter second number below:");
// let result;

// if (operation === `+`) {
//   result = first_Number + second_Number;
//   document.write(`The value after addition is: ${result}`);
//   console.log(`The value after addition is: ${result}`);
// } else if (operation === `-`) {
//   result = first_Number - second_Number;
//   document.write(`The value after minus is: ${result}`);
//   console.log(`The value after minus is: ${result}`);
// } else if (operation === `*`) {
//   result = first_Number * second_Number;
//   document.write(`The value after multiplication is: ${result}`);
//   console.log(`The value after multiplication is: ${result}`);
// } else if (operation === `/`) {
//   result = first_Number / second_Number;
//   document.write(`The value after division is: ${result}`);
//   console.log(`The value after division is: ${result}`);
// } else {
//   document.write(`The given value is incorrect`);
// }
