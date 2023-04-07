//part-3//


let num_1 = +prompt("Enter 1st number"); 
let num_2 = +prompt("Enter 2nd number"); 
let num_3 = +prompt("Enter 3rd number"); 
let num_4 = +prompt("Enter 4th number"); 
let num_5 = +prompt("Enter 5th number");

let max = num_1;
if(num_2>max){
    max = num_2; 
}else if(num_3>max){
    max = num_3;
}else if(num_4>max){
    max = num_4;
}else if(num_5>max){
    max = num_5;
};

console.log(max);
