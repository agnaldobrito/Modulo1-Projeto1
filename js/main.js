import { checkItem } from './checkItem.js';
import { itemRemove } from './itemRemove.js';
const inputItem = document.querySelector('.header__content--input');
const addBtn = document.querySelector('.header__content--btn');
//função irá criar itens dentro do ul
function createItem() {
  // event.preventDefault();
  const ul = document.querySelector('ul');
  const li = document.createElement('li');
  li.classList.add('list__item');
  const p = document.createElement('p');
  p.classList.add('item__name');
  p.innerText = inputItem.value;
  ul.appendChild(li);
  li.appendChild(p);
  //o afterbegin é alocar o elemento antes da li
  li.insertAdjacentElement('afterbegin', checkItem());
  //beforeend é alocar o elemento depois da li
  li.insertAdjacentElement('beforeend', itemRemove());
  //após ele ter criado a li com os elementos dentro ele irá apagar o que tiver escrito no input
  inputItem.value = '';
}

addBtn.addEventListener('click', createItem);
