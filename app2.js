const form = document.querySelector('form');
const input = document.querySelector('#item');
const list = document.querySelector('#list');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const item = input.value;
  input.value = '';
  const li = document.createElement('li');
  li.textContent = item;
  list.appendChild(li);
});
