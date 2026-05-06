const btn8 = document.getElementById("get-joke");
const jokeEl = document.getElementById("joke");
const errorEl8 = document.getElementById("error");

if (btn8) {
  btn8.addEventListener("click", async () => {
    try {
      const response = await fetch("https://api.jsoning.com/mock/public/jokes", {
        headers: {
          "X-Api-Key": "mock-api-key-123"
        }
      });

      if (response.ok) {
        const data = await response.json();
        jokeEl.innerText = data[0].joke;
        errorEl8.innerText = "";
      } else {
        errorEl8.innerText = response.status === 401 ? "Invalid API key." : "Failed to fetch joke.";
        jokeEl.innerText = "";
      }
    } catch (error) {
      errorEl8.innerText = "Network error. Please try again.";
      jokeEl.innerText = "";
    }
  });
}
