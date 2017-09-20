function createNestedArr(jumlahRow, jumlahCol) {
    let hasil = [];
    for (let a = 0; a < jumlahRow; a++) {
        // console.log(a);
        row = [];
        for (let b = 0; b < jumlahCol; b++) {
            // console.log(b);
            row.push(b);
        }
        hasil.push(row);
    }
    return hasil;
}
console.log(createNestedArr(5, 3));

console.log(createNestedArr(4, 2));