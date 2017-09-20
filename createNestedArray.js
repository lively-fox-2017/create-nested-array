'use strict';

function createNestedArr(jumlahRow, jumlahCol){
	let x = 'abcdefghijklmnopqrstuvwxyz';
	
	let row = [];

	for(let i = 0; i < jumlahRow; i++){
		let kolom = [];
		for(let j = 0; j < jumlahCol; j++){
			kolom.push(x[Math.floor((Math.random() * x.length))])
		}
		row.push(kolom)
	}

	return row;
	
}

console.log(createNestedArr(5, 3))
console.log(createNestedArr(4, 4))