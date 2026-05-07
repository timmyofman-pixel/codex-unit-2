const formTag = document.getElementById("jokeForm");
formTag.onsubmit = handleSubmit;

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
