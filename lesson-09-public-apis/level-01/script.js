const form = document.getElementById("login-form");
const errorEl = document.getElementById("error");
const successEl = document.getElementById("success");

if (form) {
  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const data = {
      username: form.elements['username'].value,
      password: form.elements['password'].value
    };

    const response = await fetch('https://api.jsoning.com/mock/public/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    if (response.ok) {
      successEl.innerText = "Login successful!";
      errorEl.innerText = "";
    } else {
      errorEl.innerText = "Login failed. Please check your credentials.";
      successEl.innerText = "";
    }
  });
}
