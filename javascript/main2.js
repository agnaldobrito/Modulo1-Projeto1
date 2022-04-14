const storedData = localStorage.getItem('storedData');
let dataArray = [];
if (storedData != null) {
  const storedDataToObject = JSON.parse(storedData);
  dataArray = storedDataToObject;
  calculateTotal();
  dataArray.forEach(object => {
    const objectNameValue = object.itemName;
    const objectPriceValue = object.itemPrice;
    createStatement(objectNameValue, objectPriceValue);
  });
}
const inputItemName = document.querySelector('.header__content--input');
const addBtn = document.querySelector('.header__content--btn');

addBtn.addEventListener('click', () => {
  const value = inputItemName.value;
  if (value.length > 0) {
    //executa função se o input não estiver vazio
    createItem(value);
    inputItemName.setAttribute('placeholder', 'Digite o nome do item aqui');
  } else {
    //consertar
    inputItemName.setAttribute(
      'placeholder',
      'Por favor, digite o nome do item'
    );
  }

  inputItemName.value = '';
});

//////////create item
function createItem(inputValue) {
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
  //organizando a li
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
    dataArray = dataArray.filter(item => {
      return (
        e.target.parentElement.querySelector('.item__name').innerText !==
        item.itemName
      );
    });

    e.target.parentElement.remove();
    calculateTotal();
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

  ////////botao popUpBtn captura o valor do item
  popUpBtn.addEventListener('click', () => {
    const price = parseFloat(popUpInput.value);

    const itemData = {
      itemName: itemName.innerText,
      itemPrice: price
    };

    dataArray.push(itemData);
    const dataArrayToString = JSON.stringify(dataArray);
    localStorage.setItem('storedData', dataArrayToString);
    createStatement(itemData.itemName, itemData.itemPrice);
    calculateTotal();
    popUpContainer.remove();
  });
}
//////////calcula o total do itemData.itemPrice
function calculateTotal() {
  const totalDiv = document.querySelector('.total__price');
  const objArray = dataArray.reduce((prev, curr) => {
    return prev + parseFloat(curr.itemPrice);
  }, 0);
  console.log(objArray);
  const total = objArray.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL'
  });
  console.log(dataArray);
  return (totalDiv.innerText = total);
}

///////criar a lista do extrato
function createStatement(name, price) {
  const statementBox = document.querySelector('.statement__box');
  const list2 = document.createElement('li');
  list2.classList.add('statement__item');
  statementBox.append(list2);
  const elementName = document.createElement('span');
  elementName.classList.add('statement__item--name');
  elementName.innerText = name;
  list2.append(elementName);

  const elementPrice = document.createElement('span');
  elementPrice.classList.add('statement__item--price');
  elementPrice.innerText = price.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL'
  });
  list2.append(elementPrice);
}
