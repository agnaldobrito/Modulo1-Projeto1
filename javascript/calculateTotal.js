export function calculateTotal(dataArray) {
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
