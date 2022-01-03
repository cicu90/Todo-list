var moment = require('moment');

export const Task={
    title:"",
    description:"",
    dateInit: moment().format("MM DD YY"),
    completed: false,
    important: false
}



console.log(Task);
var date= new Date();
Task.dateInit= moment(date).format("MMM Do YY");
console.log(Task.dateInit);
