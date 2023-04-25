// Write a function that takes an object and saves each property to
// localStorage using the property name as the key and the property value as
// the value. The function should also retrieve the object from localStorage
// and return it as a new object.


function saveToLocalStorage(key){
    localStorage.getItem(key, JSON.stringify(key));
};

let myObject = { name: "Junaid Aziz", age: 30 };
saveToLocalStorage(Key);

// function retrieve(object2){
//     JSON.parse(localStorage.getItem(key, object2));
// };

// retrieve(object2);
