function createNestedArray(jumlahRow, jumlahCol){
	let str = "abcdefghijklmnopqrstuvwxyz";
	let arrLuar = [];
	for(let row=0;row<jumlahRow;row++){
		let arrDalem = [];
		for(let col=0;col<jumlahCol;col++){
			arrDalem.push(str[Math.floor(Math.random()*26)]);
		}
		arrLuar.push(arrDalem);
	}
	
	console.log(arrLuar);
}

createNestedArray(5, 3);
createNestedArray(4, 2);