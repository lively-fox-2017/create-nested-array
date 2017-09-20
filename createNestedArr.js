function creatNestedArr(jumlahRow, jumlahCol) {
    let arr = [];
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')


    for (let r = 0; r < jumlahRow; r++) {
        // console.log(r)
        var row = [];
        for (let c = 0; c < jumlahCol; c++) {
            // buat random index yang berulang
            let index = Math.floor(Math.random() * alphabet.length); 
            row.push(alphabet[index]) // dan push alphabet sesui index yang keluar.
        }
        arr.push(row)
    }
    return arr

}

console.log(creatNestedArr(5, 3));
console.log(creatNestedArr('----'));
console.log(creatNestedArr(4, 3));