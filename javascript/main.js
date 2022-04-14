import { createItem } from './createItem.js';
import { calculateTotal } from './calculateTotal.js';
import { createStatement } from './createStatement.js';

//localStorage
const storedData = localStorage.getItem('storedData');
let dataArray = [];
if (storedData != null) {
  const storedDataToObject = JSON.parse(storedData);
  dataArray = storedDataToObject;
  //calcula o total após o recarregamento da página
  calculateTotal(dataArray);
  dataArray.forEach(object => {
    const objectNameValue = object.itemName;
    const objectPriceValue = object.itemPrice;
    //cria a lista do extrato depois de recarregar a página
    createStatement(objectNameValue, objectPriceValue);
  });
}
const inputItemName = document.querySelector('.header__content--input');
const addBtn = document.querySelector('.header__content--btn');

//////////botao que irá ativar o createItem()
addBtn.addEventListener('click', () => {
  const value = inputItemName.value;
  if (value.length > 0) {
    //executa função se o input não estiver vazio
    createItem(value, dataArray);
    inputItemName.setAttribute('placeholder', 'Digite o nome do item aqui');
    inputItemName.classList.remove('redLine');
  } else {
    //consertar
    inputItemName.setAttribute(
      'placeholder',
      'Por favor, digite o nome do item'
    );
    inputItemName.classList.add('redLine');
  }

  inputItemName.value = '';
});
