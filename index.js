function createNestedArr(jumlahRow, jumlahCol) {
  let result = [];
  let alphabet = 'abcdefghijklmnopqrstuvwhyz';
  alphabet = alphabet.split("");
  for (let i = 0; i < jumlahRow; i++) {
    let col = [];
    for (let j = 0; j < jumlahCol; j++) {
      col.push(alphabet[Math.floor(Math.random() * alphabet.length)]);
    }
    result.push(col);
  }

  return result;
}

createNestedArr(5, 3);
createNestedArr(4, 2);
