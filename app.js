class Model {
    constructor() {
      this.items = [];
    }
  
    addItem(item) {
      this.items.push(item);
    }
  
    removeItem(item) {
      this.items = this.items.filter(i => i !== item);
    }
  }
  
  class View {
    constructor() {
      this.form = document.querySelector('form');
      this.input = document.querySelector('#item');
      this.list = document.querySelector('#list');
    }
  
    render(items) {
      this.list.innerHTML = '';
      items.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        this.list.appendChild(li);
      });
    }
  }
  
  class Controller {
    constructor(model, view) {
      this.model = model;
      this.view = view;
  
      this.view.form.addEventListener('submit', (event) => {
        event.preventDefault();
        const item = this.view.input.value;
        this.view.input.value = '';
        this.model.addItem(item);
        this.view.render(this.model.items);
      });
    }
  }
  
  const app = new Controller(new Model(), new View());
  