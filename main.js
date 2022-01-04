//var config= require('./object.js')
import TaskObject from './object.js'

$('#tasksBtn').on('click', function(){
  $('#dinamic').append('<input id="name" type="text" placeholder="Task" class="form-control my-2"><input id="description" type="text" placeholder="Description task" class="form-control my-2"><button id="btnAddTask" class="btn btn-success" type="reset" >New Task</button>');
  $("#btnAddTask").on("click", capture);
})
var newTask=new TaskObject();

const dataBase=[];


function capture(){
  var titleCapture = $('#name').val();
  var descCapture = $('#description').val();

  newTask = new TaskObject(titleCapture, descCapture);

  console.log(newTask);
  addDB();
};

function addDB(){
  dataBase.push(newTask);
  console.log(dataBase)
}