// Level 07 — onsubmit function starter
// TODO: implement a named handler that accepts event and logs a short explanation
// TODO: assign the handler to form.onsubmit (use the form's id in the HTML)

function handleSubmit(event) {
  event.preventDefault();
  console.log("The onsubmit event handler was triggered. This function prevents the default browser refresh and allows us to handle form data via JavaScript.");
}

const form = document.getElementById('sample-form');
if (form) {
  form.onsubmit = handleSubmit;
}
