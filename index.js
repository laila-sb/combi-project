const InputFirstName = document.getElementById("first-name-input");
const InputLastName = document.getElementById("last-name-input");
const InputEmail = document.getElementById("email-input");
const submitButton1 = document.getElementById("submit-button");
const addButton = document.getElementById("add-button");
const listContainer = document.getElementById("list-container");

const isFirstNameValid = false;
const isLastNameValid = false;
const isEmailValid = false;

function validFirstName() {
  const firstNameError = document.getElementById("first-name-feedback");
  if (!InputFirstName.value) {
    firstNameError.innerHTML = "Must enter a valid first name";
    isFirstNameValid = false;
  } else {
    isFirstNameValid = true;
  }
}

function validLastName() {
  const lastNameError = document.getElementById("last-name-feedback");

  if (!InputLastName.value) {
    lastNameError.innerHTML = "Must Enter a valid Last name";
    isLastNameValid = false;
  } else {
    isLastNameValid = true;
  }
}

function validEmail() {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const email = InputEmail.value;
  const emailError = document.getElementById("email-feedback");

  if (!email.match(emailRegex)) {
    emailError.innerHTML = "Invalid email entered";
    // alert("please enter a valid email");
    isEmailValid = false;
  } else {
    isEmailValid = true;
  }
}

function submitPersonalInfo() {
  if (isFirstNameValid && isLastNameValid && isEmailValid == true) {
    alert(`Thanks ${InputFirstName}`);
    console.log("good to go");
  } else {
    alert("Please enter all required information");
  }
}

submitButton1.addEventListener("click", (submitPersonalInfo));

//function to check if first + last names entered
// function to check if email is valid

// function to submit all personal info with submit button

//function to add subscription to subs inventory

function addToList() {
  if (submit);
}
