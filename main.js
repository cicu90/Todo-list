const tasks = document.getElementById("tasksBtn");
const main = document.getElementById("main-content");

tasks.addEventListener("click", function () {
  var divMain = document.createElement("div");
  divMain.setAttribute("class", "divMain");
  main.appendChild(divMain);

  var inputMain = document.createElement("input");
  inputMain.setAttribute("id", "name");
  inputMain.setAttribute("type", "text");
  inputMain.setAttribute("placeholder", "Add your tasks here...");
  divMain.appendChild(inputMain);

  var inputMain = document.createElement("input");
  inputMain.setAttribute("id", "addTasks");
  inputMain.setAttribute("type", "submit");
  inputMain.setAttribute("value", "Add tasks");
  divMain.appendChild(inputMain);

  addTasks.addEventListener("click", function () {
    var listTasks = document.createElement("div");
    listTasks.setAttribute("class", "listT");
    divMain.appendChild(listTasks);

    var btn = document.getElementById("addTasks");
    var user = document.getElementById("name");
    var divList = document.getElementById("listT");
    var contador = 0;

    btn.addEventListener("click", function () {
      if (user.value == "") {
        alert("add your tasks");
        return false;
      } else {
        contador++;
        var list_input = document.createElement("input");
        var jumped = document.createElement("br");
        var btn_edit = document.createElement("button");
        btn_edit.innerText = "Edit";
        divList.appendChild(list_input);
      }
      console.log("user.value");
    });
  });
});

// btn.addEventListener("click", function () {
//   if (user.value == "") {
//     alert("add your tasks");
//     return false;
//   } else {
//     contador++;

//     var input = document.createElement("input");
//     var jumped = document.createElement("br");
//     var btn_edit = document.createElement("button");
//     btn_edit.innerText = "Edit";
//     var btn_delete = document.createElement("button");
//     btn_delete.innerText = "Delete";
//     btn_delete.type = "button";
//     btn_delete.id = "btn" + contador;
//     input.type = "text";
//     input.id = "input" + contador;
//     input.name = "btn" + contador;
//     input.value = user.value;
//     input.setAttribute("disabled", "");
//     divList.append(jumped);
//     divList.append(input);
//     divList.append(btn_delete);
//     console.log(input);
//     console.log(btn_delete);

//     var buttons = document.getElementById("btn" + contador);

//     buttons.addEventListener("click", function () {
//       var btn_id = document.getElementById(this.id);

//       var input_name = document.querySelector("input[name=" + this.id + "]");
//       divList.removeChild(btn_id);
//       divList.removeChild(input_name);
//       divList.removeChild(salto);
//       console.log(divList);
//     });
//   }
// });

// function addNewTask(){

//   ("input").setAttribute("class", "addTasks");
//   ("input").
// }

// tasks.addEventListener("click", function(){
//   console.log("hola");
