// Level 13 — form-reset starter
// TODO: validate one field in submit handler, on success display summary and call form.reset()

function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const username = form.elements.username.value;
  const resultDisplay = document.getElementById('result');

  if (username.length >= 3) {
    if (resultDisplay) {
      resultDisplay.innerText = `Success: User "${username}" has been recorded, and the form has been reset.`;
    }
    form.reset();
  } else {
    if (resultDisplay) {
      resultDisplay.innerText = "Validation Error: Please enter at least 3 characters.";
    }
  }
}

const form = document.getElementById('sample-form');
if (form) form.onsubmit = handleSubmit;
