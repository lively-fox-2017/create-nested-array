function createNestedArray(jumlahRow, jumlahCol){
    var arr = [];
    var letter = "abcdefghijklmnopqrstuvwxyz"
    for(var r = 0; r < jumlahRow; r++){
        var row = [];
        for(var col = 0; col < jumlahCol; col++){
            row.push(letter.charAt(Math.floor(Math.random() * letter.length)))
        }
        arr.push(row)
    }
    return arr
}
console.log(createNestedArray(5,3))
