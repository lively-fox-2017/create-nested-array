'use strict'

var arrLuar = [];
function createNestedArr(row, col) {
  let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  for (let i = 0; i < row; i++) {
    let arrDalam = [];
    for (let j = 0; j < col; j++) {
      let acak = Math.round(Math.random() * alphabet.length);
      arrDalam.push(alphabet[acak]);
    }
    arrLuar.push(arrDalam);
  }
  // return alphabet[acak];
  return arrLuar;
}

console.log(createNestedArr(5, 3));
