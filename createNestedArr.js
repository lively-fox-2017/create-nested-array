function createNestedArr(jumlahRow, jumlahCol) {
    // YOUR CODE HERE ...
    var chars = "abcdefghiklmnopqrstuvwxyz";
    var hasil = [];
    for (let r = 0; r < jumlahRow; r++) {
        let row = [];
        for (let c = 0; c < jumlahCol; c++) {
            // row.push(c); 
            row.push(chars.charAt(Math.random() * chars.length));
        }
        hasil.push(row);
    }
    return hasil;
}

createNestedArr(5, 3);
console.log(createNestedArr(5, 3));
// output: 
// [['a', 'q', 'r'],['x', 'q', 'z'],['a', 'qw', 'r'],['az', 'q', 'v'],['a', 'q', 't']]

createNestedArr(4, 2);
console.log(createNestedArr(4, 2));
// output: 
// [['a', 'q'],['v', 'q'],['a', 'e'],['l', 'q']]