// Level 05 starter script
// TODO: Fetch GET https://api.jsoning.com/mock/public/users, await response.json(), and read display the data.
const form = document.getElementById("sample-form");
const pUsername = document.getElementById("username");
const pEmail = document.getElementById("email");
const pId = document.getElementById("id");

async function handleSubmit(e) {
  e.preventDefault();
  const response = await fetch("https://api.jsoning.com/mock/public/users");
  const users = await response.json();
  
  const user = users[0];
  pUsername.innerText = user.username;
  pEmail.innerText = user.email;
  pId.innerText = user.id;
}

if (form) form.onsubmit = handleSubmit;
