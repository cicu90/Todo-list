const tasks = document.getElementById("tasksBtn");
const main = document.getElementById("main-content");

tasks.addEventListener("click", function(){

  var divMain = document.createElement("div");
  divMain.setAttribute("class", "divMain");
  main.appendChild(divMain);
  
  var inputMain = document.createElement("input");
  inputMain.setAttribute("id", "name");
  inputMain.setAttribute("type", "text")
  inputMain.setAttribute("placeholder", "Add your tasks here...");
  divMain.appendChild(inputMain);
  
  var inputMain = document.createElement("input");
  inputMain.setAttribute("id", "addTasks");
  inputMain.setAttribute("type", "submit")
  inputMain.setAttribute("value", "Add tasks");
  divMain.appendChild(inputMain);
})

var btn = document.getElementById("addTasks");

btn.addEventListener("click", function(){
  var user = document.getElementById("name");
  var contador = 0;
  if(user.value == ""){
    alert('add your tasks');
    return false;
  } else{
    contador++;
 
 console.log(contador);

 var task_list = document.createElement("")
  }
});




// function addNewTask(){

//   ("input").setAttribute("class", "addTasks");
//   ("input").
// }

// tasks.addEventListener("click", function(){
//   console.log("hola");



// })


