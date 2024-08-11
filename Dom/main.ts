const unorderedList = document.querySelector("ul")!;
const inpt = document.querySelector('input')!;
const form = document.querySelector('form')!;
const dltBtn = document.querySelector('.dlt')! as HTMLButtonElement;


interface Todo {
       text: string;
       complete: boolean;
}


let todos:Todo[] = [];

form.addEventListener('submit', (e) => {
   e.preventDefault();
       const li = document.createElement('li');
       const newChekBox = document.createElement("input");
       newChekBox.setAttribute("type", "checkbox");
       li.append(inpt.value);
       li.append(newChekBox);
       unorderedList.append(li);
       const newTodo: Todo = 
       {
              text: inpt.value,    
              complete :false
       }
       todos.push(newTodo);
       localStorage.setItem("todos", JSON.stringify(todos));
       inpt.value = "";
       
});

document.addEventListener("DOMContentLoaded", function () {
       todos = JSON.parse(localStorage.getItem("todos")!);
       
       todos.forEach((el) => {
              const newLi = document.createElement("li");
              const newChekBox = document.createElement("input");
              newChekBox.setAttribute("type", "checkbox");
              newChekBox.value = el.complete == true ? "on" : "";
              newLi.append(el.text);
              newLi.append(newChekBox);
              unorderedList.append(newLi);
       });

});
dltBtn.addEventListener('click', () => {
       localStorage.setItem("todos", "");
       window.location.reload();
});








