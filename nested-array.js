"use strict"

function createNestedArr(jumlahRow, jumlahCol) {
  var contentArr = 'abcdefghijklmnopqrstuvwxyz';
  var arr = []

  for (let i = 0; i < jumlahCol; i++){
    let newArr = [];
    for (let j = 0; j < jumlahRow; j++){
      let alphabet = contentArr[Math.floor(Math.random()*contentArr.length)];
      // console.log(''+j);
      newArr.push(''+alphabet)
    }
    arr.push(newArr)
  }
  return arr
  // console.log(arr);

}

//drive code

console.log(createNestedArr(5,3));
