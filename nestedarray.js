function createNestedArr(jumlahRow, jumlahCol) {
  var arr = []
  var baris = []
  for(var i = 0; i < jumlahRow; i++) {
    baris = []
    for(var j = 0; j < jumlahCol; j++) {
      baris.push(alphabetGenerator())
    }
    arr.push(baris)
  }
  return arr
}

function alphabetGenerator() {
  var angka = Math.floor((Math.random() * (122 - 97)) + (97))
  return String.fromCharCode(angka)
}


console.log(createNestedArr(5, 3));
console.log(createNestedArr(4, 2));
