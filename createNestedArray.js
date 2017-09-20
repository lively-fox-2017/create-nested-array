function createNestedArr(jumlahRow, jumlahCol){
  var alphabeth = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  var result = [];
  for(var i=0;i<jumlahRow;i++){
    var temp = [];
    for(var j=0;j<jumlahCol;j++){
      temp.push(alphabeth[Math.floor((Math.random() * (0 - 25) + 25))]);
    }
    result.push(temp);
  }
  return result
}

console.log(createNestedArr(5,3));
console.log(createNestedArr(4,2));
