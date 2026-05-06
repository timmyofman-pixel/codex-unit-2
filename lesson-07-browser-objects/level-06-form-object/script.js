// Level 06 — form-object starter
// TODO: select the form element (e.g. document.getElementById('sample-form'))
// TODO: log form.id, form.name, form.elements.length, form.enctype, form.className

const form = document.getElementById('sample-form');

if (form) {
  console.log('Form ID:', form.id);
  console.log('Form Name:', form.name);
  console.log('Elements Length:', form.elements.length);
  console.log('Method:', form.method);
  console.log('Action:', form.action);
  console.log('Enctype:', form.enctype);
  console.log('Class Name:', form.className);
}
