// Level 02 starter script
// TODO: Get & save the form element to `form`, attach onsubmit, and call event.preventDefault().
const form = document.getElementById("sample-form");
const result = document.getElementById("result");

function handleSubmit(event) {
  event.preventDefault();
  result.innerText = "The fetch() method is a built-in JavaScript function used to make asynchronous network requests, allowing you to send or receive data from a server or API without reloading the page.";
}

if (form) form.onsubmit = handleSubmit;
