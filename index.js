const InputFirstName = document.getElementById("first-name-input");
const InputLastName = document.getElementById("last-name-input");
const InputEmail = document.getElementById("email-input");
const submitButton1 = document.getElementById("submit-button");
const addButton = document.getElementById("add-button");
const listContainer = document.getElementById("list-container");

let isFirstNameValid = false;
let isLastNameValid = false;
let isEmailValid = false;

function validFirstName() {
  const firstNameError = document.getElementById("first-name-feedback");
  if (!InputFirstName.value) {
    firstNameError.innerHTML = "Must enter a valid first name";
    isFirstNameValid = false;
  } else {
    firstNameError.innerHTML = "";
    isFirstNameValid = true;
  }
}

function validLastName() {
  const lastNameError = document.getElementById("last-name-feedback");

  if (!InputLastName.value) {
    lastNameError.innerHTML = "Must Enter a valid Last name";
    isLastNameValid = false;
  } else {
    lastNameError.innerHTML = "";
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
    emailError.innerHTML = "";
    isEmailValid = true;
  }
}


submitButton1.addEventListener("click", (e) => {  // e is the call back function that will be exce when the event occurs
  e.preventDefault();
  validFirstName();
  validLastName();
  validEmail();
  if (!isFirstNameValid || !isLastNameValid || !isEmailValid) {
    alert("Please enter all required information");
  } else {
    alert(`Thanks ${InputFirstName.value}`);
    console.log("good to go");
  }
});


//function to add subscription to subs inventory

function addToList() {
  if (submit);
}


