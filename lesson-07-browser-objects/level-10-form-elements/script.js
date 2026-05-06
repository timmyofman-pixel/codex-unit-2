// Level 10 — form-elements starter
// TODO: assign a named function to form.onsubmit that reads a text input value

function handleSubmit(event) {
  event.preventDefault();
  
  const form = event.target;
  const message = form.elements.message.value;
  
  const display = document.getElementById('desc');
  if (display) {
    display.innerText = "You entered: " + message;
  }
  console.log("Captured form value:", message);
}

const form = document.getElementById('sample-form');
if (form) form.onsubmit = handleSubmit;
