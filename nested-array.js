var huruf = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

function createdNestedArr(jumlahRow, jumlahCol) {
  var tampung = [];

  for (var i = 0; i < jumlahCol; i++) {
    tampung.push([]);
    //console.log(tampung);
    for (var j = 0; j < jumlahRow; j++) {
      tampung[i].push(huruf[Math.floor(Math.random() * huruf.length)]) // random index ke berapa
    }
  }
  return tampung
}

console.log(createdNestedArr(5,3));
