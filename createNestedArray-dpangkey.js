function createNestedArr(jumlahRow, jumlahCol){

    var alphabet = 'abcdefghijklmnopqrstuvwxyz'
    var text = ''
    var split, slice, arr = []
    for(var i = 0; i < jumlahRow; i++){
        arr.push([])
        for(var j = 0; j < jumlahCol; j++){
            text = alphabet.charAt(Math.floor(Math.random() * alphabet.length))
            arr[i].push(text)
        }
    }
    return arr

}

console.log(createNestedArr(3, 5))