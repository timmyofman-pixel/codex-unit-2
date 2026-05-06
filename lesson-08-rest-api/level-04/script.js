// Level 04 starter script
// TODO: Await fetch and call response.json() to parse the body.
const form = document.getElementById("sample-form");
const result = document.getElementById("result");

async function handleSubmit(event) {
  event.preventDefault();
  const response = await fetch("https://api.jsoning.com/mock/public/users");
  const data = await response.json();

  result.innerText = `Successfully fetched ${data.length} users and parsed the JSON body using async/await.`;
}

if (form) form.onsubmit = handleSubmit;
 