const form2 = document.getElementById("login-form");
const errorEl2 = document.getElementById("error");
const successEl2 = document.getElementById("success");

if (form2) {
  form2.addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = {
      username: form2.elements['username'].value,
      password: form2.elements['password'].value
    };

    const response = await fetch('https://api.jsoning.com/mock/public/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    if (response.ok) {
      successEl2.innerText = "Login successful!";
      errorEl2.innerText = "";
      form2.reset();
    } else {
      errorEl2.innerText = "Login failed. Please check your credentials.";
      successEl2.innerText = "";
    }
  });
}
