
let firstValue = 0;
let secondValue = 0;
let result = 0;
let currentOperation = ''
// let result = firstValue + secondValue;
let operationDisplay = [];
let currentValue = '';



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
  if (currentValue === '') {
    currentValue = 0;
  };
  const btn2 = element.target.closest('button').textContent;
  helper(btn2);

  if(currentOperation === "+") {
      add() 
  }


};



function helper (pheptinh){
  if (firstValue !== 0) {
    secondValue = currentValue;
  } else {
      firstValue = currentValue;
      currentOperation = pheptinh;
  }
  currentValue = "";
}

function add() {
  if (firstValue && secondValue) {
    // console.log(Number(firstValue) + Number(secondValue));
    result += Number(firstValue) + Number(secondValue);
    console.log(result);
    firstValue = 0;
    secondValue = 0;
  }    
};
function subtract(firstValue,secondValue) {
    // console.log(Number(firstValue) + Number(secondValue));
    result += Number(firstValue) + Number(secondValue);
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
    firstValue = 0;
    secondValue = 0;
    result = 0;
    screen.textContent = '0';
  });




function displayFinalResult () {
  screen.textContent = result + +currentValue;
}
