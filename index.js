const InputFirstName = document.getElementById("first-name-input");
const InputLastName = document.getElementById("last-name-input");
const InputEmail = document.getElementById("email-input");
const submitButton1 = document.getElementById("submit-button1");
const addButton = document.getElementById("add-button");
const listContainer = document.getElementById('list-container')



function submitPersonalInfo() {

}

function validEmail() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const email = InputEmail.value
    const span = document.createElement('span')

  if (email.includes(emailRegex)) {
    span === input
    console.log("please enter a valid email");
  }
}
//function to check if first + last names entered
// function to check if email is valid

// function to submit all personal info with submit button

//function to add subscription to subs inventory

function addToList(){
    if (submit)
}