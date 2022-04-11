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
  if (itemChecked.classList.contains('checked')) {
    insertPrice();
  }
}

function insertPrice() {
  const popUpDiv = document.querySelector('.popUp');
  popUpDiv.classList.remove('hidden');
  const popUpBtn = document.querySelector('.popUp__btn');
  popUpBtn.addEventListener('click', () => {
    const popUpInput = document.querySelector('.popUp__input');
    let total = parseFloat(document.querySelector('.total__price').value);
    console.log(total);
  });
}
