const camelize = (str) => {
  let arrStr = str.split('');
  let newArr = [];
  let metHyphen = false;

  arrStr.forEach(element => {
    if (element === '-') {
      metHyphen = true;
    } else {
      if (!metHyphen) {
        newArr.push(element);
      } else {
        newArr.push(element.toUpperCase());
        metHyphen = false;
      }
    }
  });
  let result = newArr.join('');
  return result;
};

console.log(camelize("background-color")); // 'backgroundColor';
console.log(camelize("list-style-image")); // 'listStyleImage';
console.log(camelize("-webkit-transition")); // 'WebkitTransition';