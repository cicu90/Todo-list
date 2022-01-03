var moment = require('moment');


 function TaskObject(title,description,dateInit,completed,important){
    this.title=title;
    this.description=description;
    this.dateInit= dateInit;
    this.completed= completed;
    this.important= important;
}


var task1= new TaskObject("Estudiar");
console.log(task1);

module.exports = TaskObject;