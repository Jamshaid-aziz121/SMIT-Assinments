//part-5//

let percent = prompt("Enter your percent");

if(percent>=90){
    console.log("Grade- A");
}else if(percent>=80 && percent<=90){
    console.log("Grade- B");
}else if(percent>=70 && percent<=80){
    console.log("Grade- C");
}else if(percent>=60 && percent<=70){
    console.log("Grade- D");
}else if(percent>=50 && percent<=60){
    console.log("Grade- F");
}else{
    console.log("You are failed");
};