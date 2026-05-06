// Level 11 starter script
// TODO: Implement a complete flow: create form, collect values, POST to echo server, render response fields.
const form = document.getElementById("sample-form");
const r1 = document.getElementById("r1");
const r2 = document.getElementById("r2");
const r3 = document.getElementById("r3");

async function handleSubmit(e) {
  e.preventDefault();
  const data = {
    name: form.elements['name'].value,
    price: form.elements['price'].value,
    category: form.elements['category'].value
  };

  const dataString = JSON.stringify(data);

  const response = await fetch('https://api.jsoning.com/mock/public/products', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: dataString
  });

  const responseData = await response.json();
  const echoedProduct = responseData.json;

  r1.innerText = echoedProduct.name;
  r2.innerText = echoedProduct.price;
  r3.innerText = echoedProduct.category;
}

if (form) form.onsubmit = handleSubmit;
