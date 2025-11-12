

// const resutl;
let calculation = [];
let result2 = [];
let start = 0.0;
const digit = document.querySelector(".digit-buttons");
const screen = document.querySelector(".calculator-screen");
const reset = document.querySelector(".reset-button");
const decimal = document.querySelector(".decimal-button");
const operator =document.querySelector(".operation-button");





  digit.addEventListener("click",enterNumber );
  digit.addEventListener("keydown", enterNumber);

function enterNumber(e) {
  const btn = e.target.closest('button');
    if (btn) {
      calculation.push(btn.textContent);
      const result = calculation.join("");
      screen.textContent = result;

    }

}


  reset.addEventListener("click", () =>{
    calculation.length = 0;
    // displayResult();
  })

function operate(a,operator,b) {


}



