// Level 03 — innerText starter
// TODO: select an element (e.g. document.getElementById('desc'))
// TODO: console.log the previous innerText, set a new innerText, then log the new value

const el = document.getElementById("desc");
console.log("before:", el && el.innerText);
el.innerText = "This text has been dynamically updated using the innerText property!";
console.log("after:", el && el.innerText);
