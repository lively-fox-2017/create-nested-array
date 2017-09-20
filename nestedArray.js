function createNestedArr(jumlahRow, jumlahCol)
{
  let words = 'abcdefghijklmnopqrstuvwxyz'
  let arr = [];
  for (x = 0; x < jumlahRow; x++){
    let collum = [];
    // arr.push(collum)
    for (j = 0; j < jumlahCol; j++){
      collum.push(words[Math.floor(Math.random() * words.length)]);
      // collum.push(randomWord('abcdefghijklmnopqrstuvwxyz'));
    }
    arr.push(collum);
  }
  console.log(arr);
}

// function randomWord(words) {
//   return words[Math.floor(Math.random() * words.length)];
// }


createNestedArr(5,3);
createNestedArr(4,2);
