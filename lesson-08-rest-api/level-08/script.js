// Level 08 script
// TODO: Build a data object from form.elements and use fetch POST to https://api.jsoning.com/mock/public/users
const form = document.getElementById("sample-form");
const result = document.getElementById("result");

async function handleSubmit(e) {
  e.preventDefault();
  const data = {
    username: form.elements[0].value,
    email: form.elements[1].value,
    id: form.elements[2].value
  };

  const response = await fetch('https://api.jsoning.com/mock/public/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });

  result.innerText = 'The data was collected by index, converted to a JSON string, and attached to the body of the POST request.';
}

if (form) form.onsubmit = handleSubmit;
