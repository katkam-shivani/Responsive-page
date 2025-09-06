// ---------- Contact Form Validation ----------
const form = document.getElementById("contactForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const messageError = document.getElementById("messageError");

form.addEventListener("submit", function(event) {
  let isValid = true;

  // Name
  if (nameInput.value.trim() === "") {
    nameError.textContent = "Name is required";
    isValid = false;
  } else {
    nameError.textContent = "";
  }

  // Email
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(emailInput.value)) {
    emailError.textContent = "Enter a valid email";
    isValid = false;
  } else {
    emailError.textContent = "";
  }

  // Message
  if (messageInput.value.trim() === "") {
    messageError.textContent = "Message is required";
    isValid = false;
  } else {
    messageError.textContent = "";
  }

  if (!isValid) {
    event.preventDefault();
  } else {
    alert("Form submitted successfully!");
  }
});

// ---------- To-Do List ----------
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const addTaskBtn = document.getElementById("addTaskBtn");

addTaskBtn.addEventListener("click", addTask);

function addTask() {
  const taskValue = taskInput.value.trim();
  if (taskValue === "") return;

  const li = document.createElement("li");
  li.textContent = taskValue;

  const removeBtn = document.createElement("button");
  removeBtn.textContent = "Remove";
  removeBtn.onclick = function() {
    li.remove();
  };

  li.appendChild(removeBtn);
  taskList.appendChild(li);

  taskInput.value = "";
}
