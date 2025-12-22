
// logic of this Project: just calcualt




let currentValue = '';
let result ;
let currentOperation = ''





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




function operate(element) {
const btn2 = element.target.closest('button').textContent;
  
  // if (currentOperation === "") {
  //         currentOperation = btn2;
  // };
  // if (currentValue === '') {
  //     secondValue = Number(0);
  // } else {
  //     secondValue = Number(currentValue);
  // };

  // helper(currentOperation);




};



function helper (pheptinh){
  if (result === "") {
    result = Number(currentValue) ;

  }

  }

}

function add() {
  if (secondValue) {
    // console.log(Number(firstValue) + Number(secondValue));
    result += Number(secondValue);
    console.log(result);
    secondValue = "";
  }    
};
function subtract(firstValue,secondValue) {
    // console.log(Number(firstValue) + Number(secondValue));
    result += Number(firstValue) - Number(secondValue);
    console.log(result);
    firstValue = 0;
    secondValue = 0;
};
function multiply(firstValue,secondValue) {
  return firstValue * secondValue;
};
function divide(firstValue,secondValue) {
  return firstValue / secondValue;
};

reset.addEventListener("click", () =>{
    currentValue = '';
    firstValue = 0;
    secondValue = 0;
    result = 0;
    screen.textContent = '0';
  });




function displayFinalResult () {
  screen.textContent = result;
}
