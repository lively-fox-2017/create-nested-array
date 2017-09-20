'use strict'

function createNestedArr(jumlahRow, jumlahCol){
let alphabet = ['a','b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'v', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let arr = [];

for(let r=0; r< jumlahRow; r++){
    let row = [];
    for(let col =0; col < jumlahCol; col++){
        row.push(alphabet[Math.floor(Math.random()*25)]);
    }
    arr.push(row);
}
return arr;

}

console.log(createNestedArr(5,3));
console.log(createNestedArr(4,2));