// Level 04 — innerHTML starter
// TODO: select an element (e.g. document.getElementById('content'))
// TODO: log previous innerHTML, set a small markup string (e.g. <strong>), then log after value

const el = document.getElementById('content');
console.log('before innerHTML:', el && el.innerHTML);
el.innerHTML = 'This content now has <strong>bold text</strong> and <em>italic text</em> added via innerHTML!';
console.log('after innerHTML:', el && el.innerHTML);
