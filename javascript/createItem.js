import { calculateTotal } from './calculateTotal.js';
import { createStatement } from './createStatement.js';
import { fetchApi } from './fetchApi.js';

export function createItem(inputValue, dataArray) {
  const listBox = document.querySelector('.list__box');
  const list1 = document.createElement('li');
  list1.classList.add('list__item');
  listBox.appendChild(list1);

  const itemName = document.createElement('span');
  itemName.classList.add('item__name');
  itemName.innerText = inputValue;

  const checkBox = document.createElement('input');
  checkBox.type = 'checkbox';
  checkBox.classList.add('checkBtn');

  const removeItemBtn = document.createElement('button');
  removeItemBtn.classList.add('removeItem');
  removeItemBtn.innerText = 'x';

  list1.append(checkBox);
  list1.append(itemName);
  list1.append(removeItemBtn);

  //////////botao itemCheck
  checkBox.addEventListener('click', e => {
    const itemChecked = e.target.parentElement;
    itemChecked.classList.toggle('checked');
    if (itemChecked.classList.contains('checked')) {
      popUpContainer.classList.remove('hidden');
    } else {
      popUpContainer.classList.add('hidden');
    }
  });

  //////////botao removeItem
  removeItemBtn.addEventListener('click', e => {
    const cart = e.target.parentElement.querySelector('.item__name');
    const statement = document.querySelector('.statement__item');
    const statementName = document.querySelector('.statement__item--name');
    dataArray = dataArray.filter(item => {
      return cart.innerText && statementName.innerText !== item.itemName;
    });
    if (
      e.target.parentElement.querySelector('.item__name').innerText ===
      document.querySelector('.statement__item--name').innerText
    ) {
      statement.remove();
    }

    e.target.parentElement.remove();
    calculateTotal(dataArray);
  });

  const popUpContainer = document.createElement('div');
  popUpContainer.classList.add('popUp', 'hidden');

  itemName.parentNode.insertBefore(popUpContainer, itemName.nextSibling);

  const popUpInput = document.createElement('input');
  popUpInput.classList.add('popUp__input');
  popUpInput.type = 'number';
  const popUpBtn = document.createElement('button');
  popUpBtn.classList.add('popUp__button');
  popUpBtn.innerText = 'Adicionar ao Total';
  popUpContainer.append(popUpInput);
  popUpContainer.append(popUpBtn);

  //////////botao popUpBtn captura o valor do item
  popUpBtn.addEventListener('click', () => {
    const price = parseFloat(popUpInput.value);

    const itemData = {
      itemName: itemName.innerText,
      itemPrice: price
    };

    dataArray.push(itemData);
    const dataArrayToString = JSON.stringify(dataArray);
    localStorage.setItem('storedData', dataArrayToString);
    //cria a lista de extrato
    createStatement(itemData.itemName, itemData.itemPrice);
    //pega a api com o parametro itemName
    fetchApi(itemData.itemName);
    //calcula o total logo após adicionar o valor ao total
    calculateTotal(dataArray);
    popUpContainer.remove();
  });
}
