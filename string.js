function randomAlph () {
	var text = '';
	var alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	return text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
}

// console.log(randomAlph());

let createNestedArr = (rows, cols) => {
	let arr = [];
	for (let i = 0; i < rows; i++) {
		arr.push([]);
		for (let j = 0; j < cols; j++) {
			arr[i].push(randomAlph());
		}
	}
	return arr;
}


console.log(createNestedArr(3, 3));
console.log('-------------------');
console.log(createNestedArr(3, 8));
