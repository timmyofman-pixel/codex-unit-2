// Level 07 starter script
// TODO: Build a data object from form.elements and use fetch POST to https://api.jsoning.com/mock/public/users
const form = document.getElementById("sample-form");
const result = document.getElementById("result");

async function handleSubmit(e) {
  e.preventDefault();
  const data = {
    username: form.elements['username'].value,
    email: form.elements['email'].value
  };

  const response = await fetch('https://api.jsoning.com/mock/public/users', {
    method: 'POST',
    body: data
  });

  result.innerText = 'Posted — inspect response in console or check for errors.';
}

if (form) form.onsubmit = handleSubmit;
