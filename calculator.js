

// const resutl;
let calculation = [];
let start = 0.0;
const digit = document.querySelector(".digit-buttons");
const screen = document.querySelector(".calculator-screen")
const reset = document.querySelector(".reset-button")


  digit.addEventListener("click", (e) => {
    const btn = e.target.closest('button');
    const result2 = calculation.join("");
    if (btn) {
      calculation.push(parseFloat(btn.textContent));
      console.log(calculation);
      console.log(result2);
    
    }
  });

  reset.addEventListener("click", () =>{
    calculation.length = 0;
    // displayResult();
  })

// function displayResult() {
//   screen.textContent = calculation.toString() ;
// }
function add() {}
function subtract() {

}
function multiply() {}
function subtract() {}

function operate(a,operator,b) {
}



    
//pseudo code:
/*Create the functions that populate the display when you click the digit buttons. 
You should store the content 
of the display (the number) in a variable for use in the next step.*/