const list = document.querySelector(".list"); 
const addItem = document.querySelector("#addItem");
const clearAll = document.querySelector("#clear-items");
const barInput = document.querySelector("#bar-input");
let todoList = [];

// funziona correttamente
addItem.addEventListener("click", () => {
    // se ho un elemento all'interno della casella
    if (barInput.value!= "") {
        // creo un div oggetto
        item = document.createElement("div"); 
        item.classList.add("Item"); 
        // lo aggiungo come figlio della lista di elementi
        list.appendChild(item);
        // creo un h5 di testo e ci salvo dentro l'input di testo
        text = document.createElement("h5"); 
        text.classList.add("item-name");
        text.textContent = barInput.value;
        todoList.push(text.textContent); 
        barInput.value = ""; 
        // creo un div per le icone 
        itemIcons = document.createElement("div");
        itemIcons.classList.add("item-icons");

        // check circle
        checkCirclelink = document.createElement("a"); 
        checkCirclelink.href = "#"; 
        checkCirclelink.classList.add("complete-item"); 
        checkCirclelink.classList.add("item-icon"); 
        checkCircle = document.createElement("i"); 
        checkCircle.classList.add("far"); 
        checkCircle.classList.add("fa-check-circle"); 
        checkCirclelink.appendChild(checkCircle); 
        itemIcons.appendChild(checkCirclelink); 
        
        // edit 
        editlink = document.createElement("a"); 
        editlink.href = "#"; 
        editlink.classList.add("edit-item"); 
        editlink.classList.add("item-icon"); 
        edit = document.createElement("i"); 
        edit.classList.add("far"); 
        edit.classList.add("fa-edit"); 
        editlink.appendChild(edit); 
        itemIcons.appendChild(editlink); 

        // delete
        deletelink = document.createElement("a"); 
        deletelink.href = "#"; 
        deletelink.classList.add("delete-item"); 
        deletelink.classList.add("item-icon"); 
        del = document.createElement("i"); 
        del.classList.add("far"); 
        del.classList.add("fa-times-circle"); 
        deletelink.appendChild(del); 
        itemIcons.appendChild(deletelink); 
        // aggiungo il testo e le icone come figlio dell'oggetto
        item.appendChild(text);
        item.appendChild(itemIcons);
         // lo aggiungo come figlio della lista di elementi
         list.appendChild(item);
    }; 
    operations(text.textContent);
    // da gestire il caso in cui non venga inserito nessun valore
    //else 
})

// operations funziona correttamente
const operations = function(todoName) {
    const items = list.querySelectorAll(".Item");
    items.forEach(function(item) {
        if(item.querySelector(".item-name").textContent === todoName) {
            // complete
            item.querySelector(".complete-item").addEventListener("click", () => {
                item.querySelector(".item-name").classList.toggle("completed");
                item.querySelector(".complete-item").classList.toggle("visibility");
            });
            // edit
            item.querySelector(".edit-item").addEventListener("click", () => {
                barInput.value = todoName; 
                list.removeChild(item); 
                todoList.splice(todoList.indexOf(todoName), 1); 
            }); 
            // delete
            item.querySelector('.delete-item').addEventListener("click",() => {
                list.removeChild(item);
                todoList.splice(todoList.indexOf(todoName), 1); 
            });
        }
    }); 
}


// funziona 
clearAll.addEventListener("click", () => {
    if (todoList.length!==0) {
        for (var i=0; i<todoList.length; i++) {
            item = document.querySelector(".Item");
            list.removeChild(item);
        }
        todoList = []; 
    }; 
})
