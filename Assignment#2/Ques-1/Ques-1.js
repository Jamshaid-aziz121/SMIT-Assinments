// Ques-1//
function outerFunc(number1){

  return function(number2){

        console.log(number1 + number2);
    }
}

let outerNumber = outerFunc(2);
let innerNumber = outerFunc(9);
outerNumber(5);
innerNumber(7);
