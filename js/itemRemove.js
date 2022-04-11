export function itemRemove() {
  const removeItemBtn = document.createElement('button');
  removeItemBtn.classList.add('removeItem');
  removeItemBtn.innerText = 'x'; //propriedade temporária
  removeItemBtn.addEventListener('click', removeItem);
  return removeItemBtn;
}
function removeItem(e) {
  const toRemove = e.target.parentElement;
  toRemove.remove();
}
