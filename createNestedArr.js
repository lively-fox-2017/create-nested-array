function createNeastedArr(col,row){
  const alphabet='abcdefghijklmnopqrstuvwxyz'
  let result=[];
  for (var i = 0; i < row; i++) {
    result.push([]);
    for (var j = 0; j < col; j++) {
      result[i].push(alphabet.charAt(Math.floor(Math.random()*alphabet.length)));
    }
  }
  return result;
}

console.log(createNeastedArr(4,2));
