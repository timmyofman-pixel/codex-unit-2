// Level 06 starter script
// TODO: Use form.elements (by index) to collect input values into a plain object.
const form = document.getElementById("sample-form");
const out = document.getElementById("data");

function handleSubmit(e) {
  e.preventDefault();
  const data = {
    username: form.elements[0].value,
    email: form.elements[1].value
  };
  out.innerText = JSON.stringify(data, null, 2);
}

if (form) form.onsubmit = handleSubmit;
