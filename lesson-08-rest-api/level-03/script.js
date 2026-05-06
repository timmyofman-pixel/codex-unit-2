// Level 03 starter script
// TODO: Use async/await when calling fetch inside the submit handler.
const form = document.getElementById("sample-form");
const result = document.getElementById("result");

async function handleSubmit(event) {
  event.preventDefault();
  await fetch('https://api.jsoning.com/mock/public/users');
  result.innerText = "Successfully fetched data from the mock users API using async/await.";
}

if (form) form.onsubmit = handleSubmit;
