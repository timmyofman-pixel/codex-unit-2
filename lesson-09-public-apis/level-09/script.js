const formTag = document.getElementById("challengeForm");
formTag.onsubmit = handleSubmit;

if (challengeForm) {
  challengeForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    
    // Reset UI state
    resultsEl.innerHTML = "Loading...";
    errorEl9.innerText = "";
    paginationEl.innerHTML = "";

    try {
      const formData = new FormData(challengeForm);
      const searchParams = new URLSearchParams(formData);
      const url = `https://api.jsoning.com/mock/public/products?${searchParams.toString()}`;

      const response = await fetch(url);
      if (!response.ok) throw new Error(`Server error: ${response.status}`);

      const products = await response.json();
      resultsEl.innerHTML = ""; 

      if (products.length === 0) {
        resultsEl.innerText = "No products found matching your search.";
      } else {
        products.forEach(product => {
          const item = document.createElement("div");
          item.innerText = `${product.name} - $${product.price}`;
          resultsEl.appendChild(item);
        });
        paginationEl.innerHTML = '<button type="button">Next Page</button>';
      }
    } catch (err) {
      resultsEl.innerHTML = "";
      errorEl9.innerText = "An error occurred: " + err.message;
    }
  });
}
