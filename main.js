//var config= require('./object.js')
import TaskObject from './object.js'

// (()=>{
//   const nombreLocalStorage= localStorage.getItem('nombreUsuario');
//   console.log(nombreLocalStorage);
//   if(nombreLocalStorage ===null){
//       const nombre='Ignacio';
//       localStorage.setItem('nombreUsuario', nombre);
//   }else{
      
//   }
// })();

$('#tasksBtn').on('click', function(){
  $('#dinamic').append('<input id="name" type="text" placeholder="Task" class="form-control my-2"><input id="description" type="text" placeholder="Description task" class="form-control my-2"><input type="checkbox" id="important" name="state" value="importantV"> <label for="important">Important</label><input type="checkbox" id="complet" name="state" value="completV"> <label for="complete">Complete</label><button id="btnAddTask" class="btn btn-success" type="reset" >New Task</button>');
  $("#btnAddTask").on("click", capture);
})
var newTask=new TaskObject();

const dataBase=[];


function capture(){
  var titleCapture = $('#name').val();
  var descCapture = $('#description').val();
  newTask = new TaskObject(titleCapture, descCapture);
  newTask = fillImportantAndcomplete(newTask);

  addDB();

  showTaskList(newTask);
};

function fillImportantAndcomplete(taskObject){
  var selected = $('input[name=state]:checked');
  selected.each(function(){
    if($(this).val()=='importantV')
    {
      taskObject.important = true;
    }else {
      taskObject.completed = true;
    }
  })
  return taskObject
}

function addDB(){
  dataBase.push(newTask);
  console.log(dataBase);
};

function showTaskList(taskObject){
  $('#taskList').append('<details>'+
  '<summary>'+taskObject.title+'</summary>'+
  '<p>'+taskObject.description+'</p>'+
  '</details>');
}

