# Task Input and Status Validation System

## 📌 Project Description

This project is a JavaScript-driven **Task Input and Status Validation System** designed to collect and validate task entries from users. Users are guided through entering two tasks, with inputs for task titles, descriptions, and statuses. The system ensures that the status is valid (`todo`, `doing`, or `done`) and automatically formats inputs for consistency. It also outputs relevant information to the console depending on the task completion status.

---

## 🚀 Technologies Used

- **HTML5** – Structure and layout
- **CSS3** – Styling and presentation
- **JavaScript** – Logic, interactivity, and validation

---

## ✨ Features

- Prompts the user for two task entries, including:
  - Task title
  - Task description
  - Task status
- Automatically converts the status input to lowercase for consistency
- Validates the status input to accept only `todo`, `doing`, or `done`
- Displays:
  - Titles and statuses of tasks marked as "done" in the console
  - A motivational message if no tasks are completed
- Ensures clean code with:
  - Descriptive variable names
  - Inline comments explaining functionality

---

## 🧰 Setup Instructions

To run this project on your local machine:

1. Ensure you have completed and corrected your **JSL01** project.
2. Clone this repository or download the project folder to your machine.
3. Open the `index.html` file in your browser.
4. Open the developer console (`Ctrl+Shift+I` or `Cmd+Option+I`) to view prompts and output messages.

---

## 📁 Folder Structure

```
project-folder/
│
├── index.html         # Main HTML file
├── style.css          # CSS file for basic styling
├── script.js          # JavaScript file containing all logic
└── README.md          # Project documentation
```

---

## 🧪 Usage Example

When the project runs, users will be prompted to:

1. Enter the **title**, **description**, and **status** of **Task 1**.
2. Enter the **title**, **description**, and **status** of **Task 2**.

✅ If a task is marked as `"done"`:

```console
Task 1 - Status: done
```

❌ If the status input is invalid (e.g., "in progress"):

```console
Alert: Invalid status. Please enter "todo", "doing", or "done".
```

⚠️ If no task is marked as `"done"`:

```console
No tasks completed, let's get to work!
```

---

## 📋 User Stories

- As a user, I want to enter two tasks so that I can manage my workflow.
- As a user, I want the system to guide me if I enter an invalid task status.
- As a user, I want feedback if none of my tasks are completed to stay motivated.
- As a developer, I want clean and maintainable code to allow easy updates.

---

## 🧼 Code Quality Notes

- The JavaScript code follows best practices for readability and maintainability.
- Comments are added throughout the script to explain logic and validation steps.
- All user-facing text is formatted to enhance clarity and interaction.

---

## 🕓 Commit History

- `Add initial HTML and CSS structure from corrected JSL01 project`
- `Add JavaScript file with basic structure and variable declarations`
- `Implement prompts for task title, description, and status`
- `Add validation loop for task status input`
- `Convert all status inputs to lowercase`
- `Log completed tasks to console or show motivational message if none`
- `Refactor code for readability and maintainability`
- `Add inline comments to explain key logic steps`
- `Update README.md with detailed setup and usage instructions`
- `Fix grammar and formatting in README.md`

---
