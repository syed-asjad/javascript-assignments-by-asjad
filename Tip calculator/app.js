

function isResult() {

let billAmount = document.querySelector("#bill-amount").value;
let tipPercentage = document.querySelector("#tip-percentage").value;
let finalResult = document.querySelector("#final-result");
    let percentage = (billAmount * tipPercentage)/100;
    let sum = Number(billAmount) + Number(percentage);
    finalResult.innerText = `Total Bill:${sum}`;
}

