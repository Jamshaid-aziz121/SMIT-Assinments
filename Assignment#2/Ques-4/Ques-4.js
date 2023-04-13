function addListItem(text) {
    var listItem = document.createElement("li");
    listItem.textContent = text;
    var list = document.getElementById("myList");
    list.appendChild(listItem);
  }