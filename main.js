
import TaskObject from './object.js'


$('#tasksBtn').on('click', function(){
  if($('#dinamic').children()== 0){ //revisar que solo se imprima una vez el input
    return;
  } else {
  $('#dinamic').append('<input id="name" type="text" placeholder="Task" class="form-control my-2"><input id="description" type="text" placeholder="Description task" class="form-control my-2"><input type="checkbox" id="important" name="state" value="importantV"> <label for="important">Important</label><input type="checkbox" id="complet" name="state" value="completV"> <label for="complete">Complete</label><button id="btnAddTask" class="btn btn-success" type="reset" >New Task</button>');
}
  $("#btnAddTask").on("click", capture);
});
var newTask=new TaskObject();

const dataBase=[];

function capture(){

  var titleCapture = $('#name').val();
  var descCapture = $('#description').val();


  if(!titleCapture && !descCapture){
  alert("Please fill out the task");
  return;

} else {
  var titleCapture = $('#name').val();
  var descCapture = $('#description').val();
  newTask = new TaskObject(titleCapture, descCapture);
  newTask = fillImportantAndcomplete(newTask);


  addDB();

  showTaskList(newTask);
}};

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
 localStorage.setItem("name", JSON.stringify(newTask));

  saveLocalStorages()
};

function saveLocalStorages() {

  if(localStorage.getItem("name")==null) {
    console.log("no hay nada exist");

  }else{ //que no se sobreescriba falta
    var name = JSON.parse(localStorage.getItem("name"));
    console.log(name);
    }
}

function showTaskList(taskObject){
  $('#taskList').append('<details>'+
  '<summary>'+taskObject.title+'</summary>'+
  '<p>'+taskObject.description+'</p>'+
  '</details>');
}


//merge
// console.log(dataBase)
// }

// $('#addlist').on('click', function(){
//   $('#dropList').append('<div id="dropList" class="dropdown list"><ul class="dropdownList"><li class="dropdown-items"></li></ul></div>');
//   $("#btnAddTask").on("click", capture);
// })
// var newTask=new TaskObject();

// const dataBase=[];


// function capture(){
//   var titleCapture = $('#name').val();
//   var descCapture = $('#description').val();

//   newTask = new TaskObject(titleCapture, descCapture);

//   console.log(newTask);
//   addDB();
// };

// function addDB(){
//   dataBase.push(newTask);
//   console.log(dataBase)
// }