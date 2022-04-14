export function createStatement(name, price) {
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
