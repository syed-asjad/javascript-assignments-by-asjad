
function age_calculator(){

let user_Age =  prompt("Enter Your Birth Year");
let current_Year = 2024;
let current_Age = current_Year - user_Age;
Swal.fire({
    title: "You Age is!",
    text: `You are ${current_Age} Years Old!`,
    icon: "info",
    button: "OK",
    icon: "success"
  });
}