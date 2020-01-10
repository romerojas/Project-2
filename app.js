var checklist = document.getElementById("checklist");

var items = checklist.querySelectorAll("li");
var input = checklist.querySelectorAll("input");

for (var i = 0; i < items.length; i++) {
    items[i].addEventListener("click", editItem);
    input[i].addEventListener("blur", updateItem);
    input[i].addEventListener("keypress", itemKey);
}

function editItem() {
    this.className = "edit";
    var inputs = this.querySelector("input");
    inputs.focus();
    inputs.setSelectionRange(0, inputs.value.length);
}

function updateItem() {
    this.previousElementSibling.innerHTML = this.value;
    this.parentNode.className = "";
}

function itemKey() {
    if (event.which === 13) {
        updateItem.call(this);
    }
}