export function checkItem() {
  const checkBox = document.createElement('input');
  checkBox.type = 'checkbox';
  checkBox.classList.add('checkBtn');
  checkBox.addEventListener('click', itemCheck);

  return checkBox;
}

function itemCheck(e) {
  const itemChecked = e.target.parentElement;
  itemChecked.classList.toggle('checked');
  //condição
  itemChecked.classList.contains('checked')
    ? popUpDiv.classList.remove('hidden')
    : popUpDiv.classList.add('hidden');
}
const popUpDiv = document.querySelector('.popUp');
const popUpBtn = document.querySelector('.popUp__btn');
const showTotal = document.querySelector('.total__price');

const array = [];
let total = 0;

// popUpBtn.addEventListener('click', () => {
//   const popUpInput = document.querySelector('.popUp__input');
//   const inputValue = parseFloat(popUpInput.value);

//   // array.push(parseFloat(popUpInput.value));
//   array.push(inputValue);
//   console.log(array);
//   total = array.reduce((prev, curr) => {
//     return prev + curr;
//   }, 0);
//   const convertedValue = total.toLocaleString('pt-br', {
//     style: 'currency',
//     currency: 'BRL'
//   });

//   showTotal.innerText = `${convertedValue}`;
//   popUpDiv.classList.add('hidden');
//   popUpInput.value = null;
// });
popUpBtn.addEventListener('click', () => {
  const popUpInput = document.querySelector('.popUp__input');
  const inputValue = parseFloat(popUpInput.value);
  const itemName = document.querySelector('.item__name').innerHTML;
  console.log(itemName);
  const itemInfo = { name: itemName, price: inputValue };
  array.push(itemInfo);
  console.log(array);
  total = array.reduce((prev, curr) => {
    return prev + curr;
  }, 0);
  const convertedValue = total.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL'
  });

  showTotal.innerText = `${convertedValue}`;
  popUpDiv.classList.add('hidden');
  popUpInput.value = null;
});
