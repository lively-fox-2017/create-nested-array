function createNestedArr(jumlahRow,jumlahCol){
	var alphabet='abcdefghijklmnopqrstuvwxyz'
	var pisah =alphabet.split('')
	let kosong=[]

	for (var i=0;i<jumlahCol;i++){
    var tampung=[]
    for(var j=0;j<jumlahRow;j++){
			tampung.push(pisah[Math.floor(Math.random()*26)])
		}
		kosong.push(tampung)
	}
	return kosong
}


console.log(createNestedArr(5,3))
console.log('===================');
console.log(createNestedArr(4,2))
