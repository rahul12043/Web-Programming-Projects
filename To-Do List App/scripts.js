// script.js

// Get references to the input, button, and list
const taskInput = document.getElementById("task-input");
const addTaskBtn = document.getElementById("add-task-btn");
const taskList = document.getElementById("task-list");

// Function to add a new task
function addTask(taskText) {
  // Create a new <li> element
  const taskItem = document.createElement("li");

  // Add the task text
  const taskTextNode = document.createTextNode(taskText);
  taskItem.appendChild(taskTextNode);

  // Add a delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("delete-btn");

  // Add click event to the delete button
  deleteBtn.addEventListener("click", function () {
    taskList.removeChild(taskItem);
  });

  // Append the delete button to the task item
  taskItem.appendChild(deleteBtn);

  // Append the task item to the task list
  taskList.appendChild(taskItem);
}

// Add click event to the Add Task button
addTaskBtn.addEventListener("click", function () {
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    addTask(taskText); // Add task if input is valid
    taskInput.value = ""; // Clear the input field
  } else {
    alert("Please enter a task!");
  }
});
