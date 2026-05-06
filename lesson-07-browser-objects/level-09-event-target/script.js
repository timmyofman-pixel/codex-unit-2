// Level 09 — event.target starter
// TODO: inside submit handler inspect event.target and event.currentTarget

function handleSubmit(event) {
  event.preventDefault();
  console.log("event.target:", event.target);
  console.log("event.currentTarget:", event.currentTarget);
  const form = event.target;
  console.log("Form elements accessed via event.target:", form.elements);
}

const form = document.getElementById('sample-form');
if (form) form.onsubmit = handleSubmit;
