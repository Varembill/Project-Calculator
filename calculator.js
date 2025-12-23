
// logic of this Project: just calcualt
let currentValue = '';
let result = '';
let currentOperation = null;

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

    
  //sau khi bấm operator thì sẽ lưu lại thông 
  // tin của operation đó và thông tin đó chỉ 
  // bị thay đổi khi đã hoàn thành xong phép tính
  
  if
 


};



function helper (pheptinh){
  if (result === "") {
    result = Number(currentValue) ;

  }

  }


function calculate () {

}


reset.addEventListener("click", () =>{
    currentValue = '';
    result = 0;
    screen.textContent = '0';
  });

function displayFinalResult () {
  screen.textContent = result;
}




