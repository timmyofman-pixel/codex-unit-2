// Level 05 — querySelector starter
// TODO: use document.querySelector('#content') or document.querySelectorAll('.item')
// TODO: log previous content and update nodes (iterate NodeList with forEach)

// Using querySelector for the <ul> element
const ulElement = document.querySelector('ul');
console.log('Before UL innerHTML:', ulElement && ulElement.innerHTML);
if (ulElement) {
  ulElement.innerHTML += '<li class="item">Dynamically Added Item</li>';
}
console.log('After UL innerHTML (added item):', ulElement && ulElement.innerHTML);

