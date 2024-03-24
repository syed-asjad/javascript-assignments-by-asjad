let number1 = 0;
let number2 = 0;
let number3 = 0;
function inc() {
  let zero1 = document.getElementById("zero");
  number1++;

  zero1.innerHTML = number1;
}

function resetvalue() {
  let zero1 = document.getElementById("zero");
  if (number1 > 0) {
    number1 = 0;
    zero1.innerHTML = number1;
  }
}

function inc2() {
  let zero2 = document.getElementById("zero2");
  console.log(zero2);
  number2++;
  console.log(number2);
  zero2.innerHTML = number2;
}

function resetvalue2() {
  let zero2 = document.getElementById("zero2");
  if (number2 > 0) {
    number2 = 0;
    zero2.innerHTML = number2;
  }
}

function inc3() {
    let zero3 = document.getElementById("zero3");
    console.log(zero3);
    number3++;
    console.log(number3);
    zero3.innerHTML = number3;
  }
  
  function resetvalue3() {
    let zero3 = document.getElementById("zero3");
    if (number3 > 0) {
      number3 = 0;
      zero3.innerHTML = number3;
    }
  }