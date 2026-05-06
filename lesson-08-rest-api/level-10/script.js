// Level 10 starter script
// TODO: POST pre-processed data, parse JSON response, and display three selected values.
const form = document.getElementById("sample-form");
const v1 = document.getElementById("v1");
const v2 = document.getElementById("v2");
const v3 = document.getElementById("v3");

async function handleSubmit(e) {
  e.preventDefault();
  const data = {
    username: form.elements[0].value,
    email: form.elements[1].value,
    id: form.elements[2].value
  };

  const response = await fetch('https://api.jsoning.com/mock/public/echo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });

  const responseData = await response.json();

  v1.innerText = `Username: ${responseData.username}`;
  v2.innerText = `Email: ${responseData.email}`;
  v3.innerText = `ID: ${responseData.id}`;
}

if (form) form.onsubmit = handleSubmit;
