function CreateNestedArr(row, col) {
  let alphabet = 'abcdefghijklmnopqrstuvwqyz' //dictionary alphabet
  let nestedArr = []; // inisialisasi array kosong untuk membuat 'wadah' array
  for (i = 0; i < col; i++) { // buat wadah array sebanyak col yang dibutuhkan
    nestedArr.push([])
    for (j = 0; j < row; j++) { // looping untuk menentukan berapa isi array yg di push kedalam wadah
      let randomAlpha = alphabet[Math.floor(Math.random() * alphabet.length)] // randoman alphabet
      nestedArr[i].push(randomAlpha) // push random alphabet ke wadah array
    }
  }
  return nestedArr;
}

console.log(CreateNestedArr(5,3));
console.log('============================');
console.log(CreateNestedArr(4,2));
