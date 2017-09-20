function createNestedArray(jumlahRow, jumlahCol){
  'use strict'
  var resultArr=[];
  var randAscii;
//97-122
  for(let i=0; i<jumlahRow; i++){
    resultArr.push([]);
    for(let j=0; j<jumlahCol; j++){
      randAscii=Math.floor(Math.random()*(122-97+1)+97);
      resultArr[i].push(String.fromCharCode(randAscii));
    }
  }
  return resultArr;
}

console.log(createNestedArray(3,5));
