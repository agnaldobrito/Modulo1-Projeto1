export function createStatement(name, price) {
  const statementBox = document.querySelector('.statement__box');
  const list2 = document.createElement('li');
  const elementName = document.createElement('span');
  const elementPrice = document.createElement('span');

  list2.classList.add('statement__item');
  elementName.classList.add('statement__item--name');
  elementPrice.classList.add('statement__item--price');

  statementBox.append(list2);
  list2.append(elementName);
  list2.append(elementPrice);

  elementName.innerText = name;
  elementPrice.innerText = price.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL'
  });
}
