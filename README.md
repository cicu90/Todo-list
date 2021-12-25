# Todo-list
 Introduction
It is very common nowadays to have a place to save your notes so you don't forget your tasks. In this project you will have to develop your own Todo list.
What are the main objectives in this project?
Improve your knowledge of JavaScript
Learn to work with the HTML DOM
Learn to work with localStorage
Learn and improve your knowledge in logic processes
1. General analysis
The objective of this project is to put in practice the previous knowledge learned in the master. You will have to develop a Todo List in which you can create new tasks with different options. 
The development will be organized in 3 phases:
1.1 Phase 1
Header Page
The header page should contain the name of the project
Main page
Side bar
It will contain the following options
Tasks
This is the default selected option
This option will show all the tasks that are not in a custom list and are not completed
Important
If you mark tasks as important, you will only see  them by selecting this option
Completed
If  you mark tasks as completed, you will only see  them by selecting this option
Tasks
The main central container of the screen will contain the title of the current section of tasks (Tasks, Important, Completed)
You can add new tasks with the button that will always be visible at the bottom right of the screen
A modal window will be displayed with the information of the task that has been clicked
Each task will contain:
Title (min length 3, max length 50, required)
Description (max length 500, required)
Checkbox if the task is completed (optional)
The tasks that are marked as completed will be shown in the task list with the task details and title letter crossed out. 
Checkbox if the task is important (optional)
In the task list, the tasks that are marked as important will be shown in the list and in the task details with the title letter bold
Select of the custom lists (optional)
If you select a custom list, the task will only display when you access the custom list you have assigned to it
Color of the task (optional)
Task color to choose:
Purple
Green
Yellow
Orange
Grey
Pink
Blue
1.2 Phase 2
The sidebar will have a new option, “custom lists”
Below this option the lists that you have created manually will be shown
In the sidebar there will be a "New list" button that will allow you to create a new list
This button will open a modal window that lets you introduce a list name (max length 25)
The modal must have a button which you can click to close it without creating the list
When you click in a custom list, the central container will show the tasks that belong to this list
If you hover over a custom list with the mouse, a button will be displayed to delete the list
If the list contains at least 1 task, instead of the list being deleted directly, a modal will open indicating that the list is not empty and if you agree to delete it along with all its tasks
You will have two buttons, one to accept and one to cancel
1.3 Phase 3
Filter section in the page header
In the page header there will be a search bar where you can search all the tasks in the app including completed tasks and those belonging to custom lists
The search bar will display the results each time a new letter is entered
You will have to check that the name of the task contains the input value that you have entered
The tasks found with the search engine will be shown in the central page container
In each task of the task list, you will have a button to check if the task was completed without opening it, this will apply the crossed out font style in the task title
When you change a task to completed, it will be hidden from the list and you only can see the task in the completed tasks section
In each task of the task list, you will have a button to check if the task is important without opening it, this will apply the bold font style in the task title
In the task list, if there is a task that has a color selected, a style with that color will be applied to that task in the list
2. Wireframes
Below you have sample wireframes to better understand the project requirements, it is not about implementing the same design, they are only an example.
 
 
Main page: 

 
New task modal:

Important filter:

 
Completed filter:

Custom lists:

3. Requirements
You must develop this project using a single HTML page
You cannot use third-party libraries
You must use localStorage to store all the events, this way, if you reload the page, the events will remain stored in the browser
You must use Git, Github and features branches
You must follow the Git commit best practices in the following guidelines:
https://chris.beams.io/posts/git-commit/  
You must improve the design of the wireframes we provide such that it resembles a real todo app. For this you investigate how existing apps work and use their design as inspiration.
Every input elements and buttons (except checkboxes that should have a size of 20x20px with padding or margin around them) should have a minimum height or height of 44px such that users can interact with them on mobile devices
You must use semantic HTML5 elements for all the contents of the application
You must handle all event listener removal from elements that appear or disappear from the screen such as modal windows
All input elements should have a corresponding label element
You must use the appropriate input element for each type of data
4. Extras 💯 
Once you have implemented the main features of the application you should implement the following extra requirements (that are not specified in any particular order) as a challenge for yourself and your team. However, you can also consider them during the development of the pill if you would like to implement any of them from the beginning, such as the design requirements or the browser compatibility.
It is easier to develop a feature from the beginning than to modify it later.
4.1 Browser compatibility 
You should check that everything is compatible with other current browsers, and, as an extra step, it should also be compatible with older browsers such as IE11.
4.2 Input validation
All the input validation should be done after users have entered a value, this means that you should only validate the value in the input fields after a value has been entered and not before users interact with the inputs. 
The validation should be done when the input field loses focus, that is, users type a value, they change focus to another element, then the field validation runs.
After a validation message is entered and users focus the input element to adjust the value, the validation message and any error styles should be removed until the user has entered a new value and the focus is lost from the input field as before.
4.3 Responsive design
All the screens and steps should be responsive using flexbox and/or grid so that they can be used in any device size.
4.4 Accessibility
You should implement modals in a way that users can only TAB or SHIFT + TAB to focus elements inside the modal window. This means that if users press the TAB or SHIFT + TAB key when a modal window is open, they should only be able to tab through focusable elements inside the modal and not ones outside it.
5. Deliverables
To evaluate the project you will need the following deliverables:
Project repository with the source code and the documentation listed below
A daily log with the main events of the project that happened each day
A presentation in Google Slides explaining:
Explain what lessons you’ve learned during this project
What problems have you encountered when developing this project?

