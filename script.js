// Prompt user for title 1
const title1 = prompt("Enter task 1 title:"); // Check if the user entered a title

// Prompt user for description task 1
const desc1 = prompt("Enter task 1 for description:"); // Check if the user entered a description

// Prompt  user for status
let status1 = prompt("Enter Task 1 status (todo, doing, done):").toLowerCase();

while (status1 !== "todo" && status1 !== "doing" && status1 !== "done") {
  alert("Invalid status. Please enter 'todo', 'doing', or 'done'."); // Alert user for invalid status
  console.log("No tasks completed, let's get to work!"); //Display when there are no completed tasks.
  status1 = prompt("Enter Task 2 status (todo, doing, done):").toLowerCase(); // Prompt again
}
// Display the result when there is a completed task.
console.log("Title: Make correction to JSL01, status:" + status1);

// Prompt user for title 2
const title2 = prompt("Enter task 2 title:"); // Check if the user entered a title

// Prompt user for description task 2
const desc2 = prompt("Enter task 2 for description:"); // check if the user entered a description

// Prompt  user for status 2
let status2 = prompt("Enter Task 2 status (todo, doing, done):").toLowerCase();

// Keep prompting until a valid status is entered
while (status2 !== "todo" && status2 !== "doing" && status2 !== "done") {
  alert("Invalid status. Please enter 'todo', 'doing', or 'done'."); // Alert user for invalid status
  console.log("No tasks completed, let's get to work!"); //Display when there are no completed tasks.
  status2 = prompt("Enter Task 2 status (todo, doing, done):").toLowerCase(); // Prompt again
}

// Display the resultwhen there is a completed task.
console.log("Title: Make correction to JSL01, status:" + status2);