function createNestedArr(jumlahRow, jumlahCol) {
  let arr = []
  let abc = 'abcdefghijklmnopqrstuvwxyz'
  for (var r = 0; r < jumlahRow; r++) {
    let col = []
    for (var c = 0; c < jumlahCol; c++) {
      let abcArr = abc.split('')
      let random = Math.floor(Math.random() * abc.length)
      col.push(abcArr[random])
    }
    arr.push(col)
  }
  return arr;
}

console.log(createNestedArr(5, 3))
console.log(createNestedArr(4, 2))
