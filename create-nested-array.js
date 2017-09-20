function createNestedArray(row,col) {

let huruf = ['a','b','c','d','e','f','g','h','i','j','k'
            ,'l','m','n','o','p','q','r','s','t','u','v',
            'w','x','y','z']
let array = [];
//Buat array kosong []
for (var i = 0; i < row; i++) {
  array.push([])
  //Buat Kolom
  for (var j = 0; j < col; j++) {
    //Cari Angka Random Berdasarkan Jumlah Panjang Huruf
    let randomKata = Math.floor(Math.random()*huruf.length)
    //Deklarasi variabel char = isi dari huruf[index randomKata]
    char = huruf[randomKata]
    //push array[i] dengan huruf yang sudah dirandom
    array[i].push(char)
  }
}
//kembalikan nilai array dalam fungsi
return array
}
// ===DRIVE CODE===
console.log(createNestedArray(3,5));
console.log(createNestedArray(5,3));
console.log(createNestedArray(4,2));
