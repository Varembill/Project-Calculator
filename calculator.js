

// const resutl;
let currentValue = '';
let finalResult = 0;
let result2 = [];
let start = 0.0;
let start2 = []
const digit = document.querySelector(".digit-buttons");
const screen = document.querySelector(".calculator-screen");
const reset = document.querySelector(".reset-button");
const decimal = document.querySelector(".decimal-button");
const operators = document.querySelector(".operation-button");
const equal = document.querySelector(".result-button");

digit.addEventListener("click",enterNumber );
digit.addEventListener("keydown", enterNumber);
operators.addEventListener("click",operate)
equal.addEventListener("click",displayFinalResult)

function enterNumber(e) {
  const btn = e.target.closest('button');
    if (btn) {
      currentValue += btn.textContent;
      screen.textContent = currentValue;
      //logging the currentValue
      // console.log(currentValue);

    }

};

function operate(element) {
  const btn2 = element.target.closest('button').textContent;
  if (btn2 === "+") {
    // result2.push(currentValue);

    finalResult += +currentValue;

    currentValue = '';

    console.log(finalResult);

    displayResult();
    
  } else if (btn2 === "-") {

  } else if (btn2 === "*") {

  } else if (btn2 === "/") {
    
  }


};


// function putItIn () {

// }

  reset.addEventListener("click", () =>{
    currentValue = '';
    finalResult = 0;
    displayResult();
  })

// function addNumber (a,b) {
//     return a + b ;

// }




function displayResult () {
  screen.textContent = finalResult;
}

function displayOperation () {


}


function displayFinalResult () {
  screen.textContent = finalResult + +currentValue;
}
