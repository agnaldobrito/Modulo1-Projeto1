export function calculateTotal(dataArray) {
  const totalPrice = document.querySelector('.total__price');
  const objArray = dataArray.reduce((prev, curr) => {
    return prev + parseFloat(curr.itemPrice);
  }, 0);
  console.log(objArray);
  const total = objArray.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL'
  });
  console.log(dataArray);

  return (totalPrice.innerText = total);
}
