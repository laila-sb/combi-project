const InputFirstName = document.getElementById("first-name-input");
const InputLastName = document.getElementById("last-name-input");
const InputEmail = document.getElementById("email-input");
const submitButton1 = document.getElementById("submit-button");
const addButton = document.getElementById("add-button");
const listContainer = document.getElementById("list-container");

let isFirstNameValid = false;
let isLastNameValid = false;
let isEmailValid = false;

const subName = document.getElementById("sub-name");
const subType = document.getElementById("sub-type");
const startDate = document.getElementById("start-date");
const endDate = document.getElementById("end-date");

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

submitButton1.addEventListener("click", (event) => {
  // e is the call back function that will be exce when the event occurs
  event.preventDefault();
  validFirstName();
  validLastName();
  validEmail();
  if (!isFirstNameValid || !isLastNameValid || !isEmailValid) {
    alert("Please enter all required information");
  } else {
    alert(`Thanks ${InputFirstName.value}`);
    console.log("signed in");
  }
});

//function to add subscription to subs inventory

let subList = [];

function addToList(name, type) {
  let existing = subList.find(
    (sub) => sub.name.toLowerCase() === name.toLowerCase()
  );
  if (existing) {
    alert("You have already added that subscription");
    return;
  }
  subList.push({ name, type });
  updateSubs();
}

function updateSubs(){
  listContainer.innerHTML = ''

  subList.forEach((sub) => {
    const list = document.createElement('li')
    list.textContent = `${sub.name} and ${sub.type}`;
    listContainer.appendChild(list)
  })
  }
addButton.addEventListener("click", () => {
  const name = subName.value;
  const type = subType.value;
  if (name && type) {
    addToList(name, type);

  } else {
    alert("please fill in both name and type of sub");
  }
});

