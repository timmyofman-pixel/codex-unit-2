// Level 08 — preventDefault starter
// TODO: update your submit handler to call event.preventDefault() before other logic

function handleSubmit(event) {
  event.preventDefault();
  console.log("submit handler: preventDefault called to stop page reload.");
}

const form = document.getElementById('sample-form');
if (form) {
  form.onsubmit = handleSubmit;
}
