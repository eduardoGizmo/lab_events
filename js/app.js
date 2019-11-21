document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

    const form = document.querySelector('#new-item-form');
    form.addEventListener('submit', handleFormSubmit);

})

  const handleFormSubmit = function (event) {
    event.preventDefault();

    const list = document.querySelector('#reading-list');
    item = document.createElement('div');
    item.classList.add('box');
    list.appendChild(item);

    t = event.target.title.value;
    const title = document.createElement('h1');
    title.classList.add('title');
    title.textContent = t ;
    item.appendChild(title)

    a = event.target.author.value;
    const auth = document.createElement('h1');
    auth.classList.add('author');
    auth.textContent = a ;
    item.appendChild(auth);

    c = event.target.category.value;
    const category = document.createElement('h1');
    category.classList.add('category');
    category.textContent = c ;
    item.appendChild(category);

  };
