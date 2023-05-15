function basicmath(word) {
  const [num1, operator, num2] = word.trim().split(/\b\s+(?!$|by\b)/);
  
  let res;
  switch (operator) {
    case 'plus':
      res = num1 + num2;
      break;
    case 'minus':
      res = num1 - num2;
      break;
    case 'times':
      res = num1 * num2;
      break;
    case 'divided by':
      res = num1 / num2;
      res = res.toFixed(2);
      break;
    default:
      console.log(`Invalid operator: ${operator}`);
      return;
  }
  return res;
}

console.log(basicmath('19 plus 12'));
console.log(basicmath('10 minus 11'));
console.log(basicmath('9 times 15'));
console.log(basicmath('100 dividedby 23.1'));