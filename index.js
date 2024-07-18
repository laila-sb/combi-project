const InputFirstName = document.getElementById("first-name-input");
const InputLastName = document.getElementById("last-name-input");
const InputEmail = document.getElementById("email-input");
const submitButton1 = document.getElementById("submit-button");
const addButton = document.getElementById("add-button");
const listContainer = document.getElementById("list-container");

function submitPersonalInfo() {
  // const firstNameError = document.getElementById('first-name-feedback')
  // const firstLastError = document.getElementById('last-name-feedback')

  if (!InputFirstName.value && !InputLastName.value && !InputEmail.value) {
    alert("Please fill in all required information");
  }
}


function validEmail() {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const email = InputEmail.value;
  const span = document.createElement("span");
  const emailError = document.getElementById("email-feedback");

  if (!email.match(emailRegex)) {
    emailError.innerHTML = "Invalid email entered";
    // alert("please enter a valid email");
    return false;
  }
  return true;
}

//function to check if first + last names entered
// function to check if email is valid

// function to submit all personal info with submit button

//function to add subscription to subs inventory

function addToList() {
  if (submit);
}
