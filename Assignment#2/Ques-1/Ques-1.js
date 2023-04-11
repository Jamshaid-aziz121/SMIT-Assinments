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

// Ques-Example//
// function outerFunction(outerVariable){
//     // console.log("outerVariable");
//     return function innerFunction(innerVarible){
//         console.log("Outer Variable :" + outerVariable);
//         console.log("Inner Variable :" + innerVarible);
//     }
// }

// let alfaFunc = outerFunction("outside");
// // let bravoFunc = innerFunction("inside")

// alfaFunc("inside");

// Ques-2//
// callback
// let arr = [3, 1, 7, 5, 2, 9, 2, 6];

// let done = function(data){}
function sum(done){
  for (let index = 0; index < 100; index++) {
    // const element = array[index];
    console.log(index)
    
  }

  done("loop end hogya bhai")
}


sum(function(data){
  console.log("dat------ ", data)
});




// let specific = arr.function(x);
// specific(7);

//Ques-3//



var func1 = function(){
  return 5
}


console.log(func2())









