const Strawberry = (orders, cash) => {
  //codehere
  let newOrders = orders;
  let paycash = cash;
  let ordersCost = 40;
  let discountOrders = Math.floor(orders / 3) * 100;
  let remainingOrders = orders % 3;
  let change;

  if (newOrders % 3 == 0) {
    change = paycash - discountOrders;
  } else {
    change = paycash - (ordersCost * remainingOrders + discountOrders);
  }

  if (change < 0) {
    console.log("insufficient funds");
  } else {
    return "change: " + change;
  }

  return "";
};

console.log(Strawberry(8, 500));
console.log(Strawberry(6, 200));
console.log(Strawberry(15, 200));
console.log(Strawberry(1, 39));

/* =================== this is my inefficient code ===================

const Strawberry = (orders, cash) => {
  //codehere
  let newOrders = orders;
  let paycash = cash;
  let ordersCost = 40;
  let discountOrders = Math.floor(orders / 3) * 100;
  let remainingOrders = orders % 3;
  let change;

  if (newOrders % 3 == 0) {
    return (change = discountOrders - paycash);
  }
  if (newOrders % 3 != 0) {
    return (change = discountOrders + remainingOrders * ordersCost - paycash);
  } else {
    console.log("insufficient funds");
  }
};

console.log(Strawberry("change: " + 8, 500));
 */
