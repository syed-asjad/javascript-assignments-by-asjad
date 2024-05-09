
function generate() {
  let table_Value = document.querySelector("#input_value");
  let table_Range = document.querySelector("#input_range");
  let table_result = document.querySelector("#table_result");
  let final_result = "";
console.log(table_Value);

  if (table_Value.value == "" || table_Range.value == "") {
    Swal.fire("Invalid Input!");
  }
  else{

      for (let i = 1; i <= table_Range.value; i++) {
        final_result += `${table_Value.value} x ${i} = ${table_Value.value * i}\n`;
        table_result.innerText = final_result;
      }
  }
}
