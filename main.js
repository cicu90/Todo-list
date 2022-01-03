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

 var task_list = document.createElement("input");
 var salto = document.createElement('br');
   var btn_eliminar = document.createElement('button');
   btn_eliminar.innerText= "Eliminar";
   btn_eliminar.type = 'button';
   btn_eliminar.id = "btn"+contador;
   input.type = 'text';
   input.id = "input"+contador;
   input.name = 'btn'+contador;
   input.value = user.value;
   input.setAttribute('disabled',''); // propiedad disabled
   contenedor.append(salto);//todo lo agrego al div de almacenar
   contenedor.append(input);
   contenedor.append(btn_eliminar);
   console.log(input);
    console.log(btn_eliminar);
  
  var botones = document.getElementById('btn'+contador);
  
  botones.addEventListener('click', function(){
     
    var btn_id = document.getElementById(this.id);
    
    var input_name = document.querySelector('input[name='+this.id+']');
       contenedor.removeChild(btn_id);
       contenedor.removeChild(input_name);
       contenedor.removeChild(salto);
  
  });
  
}
});





// function addNewTask(){

//   ("input").setAttribute("class", "addTasks");
//   ("input").
// }

// tasks.addEventListener("click", function(){
//   console.log("hola");



// })


