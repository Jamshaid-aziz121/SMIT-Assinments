//Write a function that retrieves an object from localStorage. The function
// should take one argument, which is a string representing the key used to
// store the object. The function should return the object.//


function getObjectFromLocalStorage(key,obj){
    JSON.parse(localStorage.getItem(key));
  };

  let myObject = { name: "Jamshaid", age: 30 };
  getObjectFromLocalStorage(myObject);