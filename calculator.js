
let currentValue = '';
let result = 0;
let operationDisplay = [];



// UI interaction logic
const digit = document.querySelector(".digit-buttons");
const screen = document.querySelector(".calculator-screen");
const reset = document.querySelector(".reset-button");
const decimal = document.querySelector(".decimal-button");
const operators = document.querySelector(".operation-button");
const equal = document.querySelector(".result-button");

// Event Listener 
digit.addEventListener("click",enterNumber );
operators.addEventListener("click",operate)
equal.addEventListener("click",displayFinalResult)

function enterNumber(e) {
  const btn = e.target.closest('button');
    if (btn) {
      currentValue += btn.textContent;
      screen.textContent = currentValue;
    }

};


// wrong logic
// function operate(element) {
//   const btn2 = element.target.closest('button').textContent;
//   const middle =currentValue

//   if currentValue

//     if (btn2 === "+") {
//      // nếu input ban đầu bằng rỗng thì final result = 0, bỏ biến firstValue
//         result += +currentValue;
//         currentValue = '';
      
//     } else if (btn2 === "-") {
//         result -= +currentValue;
//         currentValue = '';
//       }
//     }






reset.addEventListener("click", () =>{
    currentValue = '';
    result = 0;
    screen.textContent = '0';
  });




function displayFinalResult () {
  screen.textContent = result + +currentValue;
}
