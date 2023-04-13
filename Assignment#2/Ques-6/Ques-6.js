function saveToLocalStorage(key, obj) {
    localStorage.setItem(key, JSON.stringify(obj));
  }
  
  var myObject = { name: "Jamshaid", age: 30 };
  saveToLocalStorage("myKey", myObject);