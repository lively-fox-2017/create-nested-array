function randomAlphabet() {
	return String.fromCharCode(Math.round(Math.random() * (122 - 97) + 97));
}

function createNestedArr(jumlahRow, jumlahCol) {
	let result = [];

	for (let i = 0; i < jumlahRow; i++) {
		let row = [];

		for (let j = 0; j < jumlahCol; j++) {
			row.push(randomAlphabet());
		}

		result.push(row);
	}

	return result;
}


console.log(createNestedArr(5, 3));
console.log(createNestedArr(4, 2));