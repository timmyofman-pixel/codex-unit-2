const form4 = document.getElementById("search-form");
const out4 = document.getElementById("out");

if (form4) {
  form4.addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = {
      username: form4.elements[0].value
    };

    const searchParams = new URLSearchParams(data);
    const url = `https://api.jsoning.com/mock/public/users?${searchParams.toString()}`;

    const response = await fetch(url);
    const result = await response.json();

    out4.innerText = JSON.stringify(result, null, 2);
  });
}
