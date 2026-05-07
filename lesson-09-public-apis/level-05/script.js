const formTag = document.getElementById("queryForm");
formTag.onsubmit = handleSubmit;

if (triviaForm) {
  triviaForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = new FormData(triviaForm);
    const searchParams = new URLSearchParams(data);
    const url = `https://api.jsoning.com/mock/public/trivia?${searchParams.toString()}`;

    const response = await fetch(url);
    const result = await response.json();

    questionEl.innerText = result[0].question.text;
  });
}
