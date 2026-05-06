// Level 14 — mini-project starter
// TODO: build a small form handler that prevents default, reads values via form.elements, validates, displays summary, and resets the form

function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;

  // Read values via form.elements
  const name = form.elements.name.value;
  const message = form.elements.message.value;
  const volume = form.elements.volume.value;
  const color = form.elements.color.value;
  const subscribe = form.elements.subscribe.checked;

  // Simple validation
  if (!name || !message) {
    alert("Please fill out the name and message fields.");
    return;
  }

  // Display summary
  const summary = document.getElementById('result');
  if (summary) {
    summary.innerText = `Submission Summary:
    Name: ${name}
    Message: ${message}
    Volume Setting: ${volume}
    Favorite Color: ${color}
    Newsletter: ${subscribe ? "Subscribed" : "Not Subscribed"}`;
  }

  // Reset form
  form.reset();
}

const form = document.getElementById('sample-form');
if (form) form.onsubmit = handleSubmit;
