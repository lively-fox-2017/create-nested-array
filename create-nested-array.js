'use strict'

function createNestedArr(jumlahRow, jumlahCol){
    let arr = genRow(jumlahRow);
    
    for(let i = 0; i < jumlahRow ; i++){
        for(let j = 0; j < jumlahCol ; j++){
            arr[i].push(genAlphabet());
        }
    }

    return arr;
}

function genRow(jumlahRow){
    let arr = [];
    for(let i = 0; i < jumlahRow; i++){
        arr.push([]);
    }
    console.log(arr);
    return arr;
}

function genAlphabet(){
    return String.fromCharCode(Math.random()* (122 - 97) + 97);
}

console.log(createNestedArr(3,4));