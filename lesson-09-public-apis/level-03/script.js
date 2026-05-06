const btn3 = document.getElementById("fetch-btn");
const errorEl3 = document.getElementById("error");

if (btn3) {
  btn3.addEventListener("click", async () => {
    try {
      const response = await fetch("https://api.jsoning.com/mock/public/users");

      if (response.ok) {
        errorEl3.innerText = "";
        console.log("Data successfully retrieved.");
      } else {
        errorEl3.innerText = `Server returned an error: ${response.status}`;
      }
    } catch (error) {
      errorEl3.innerText = "Network error. Please check your connection and try again.";
    }
  });
}
