'use strict' ;

function createNestedArr(jumlahRow,jumlahCol){
    let arr=[];
    for (let r=0 ; r< jumlahRow;r++){
      let row=[];
      for (let c=0 ; c<jumlahCol ; c++){
        let i=Math.floor(Math.random()*26)
        row.push(String.fromCharCode(97+i));
      }
    arr.push(row) ;
    }
    return arr;
}

console.log(createNestedArr(5,3));
console.log(createNestedArr(4,2));
