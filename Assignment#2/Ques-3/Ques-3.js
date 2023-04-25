function addParagaraph(text){
    
let paragraph = document.createElement("p");
paragraph.textContent = text;
let body = document.getElementsByTagName("body")[0];
body.appendChild(paragraph);

}
addParagaraph("Ques-3, Resolved");





