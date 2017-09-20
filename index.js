function pemisah(col, row) {
	var text = "";
  	var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
	text += possible.charAt(Math.floor(Math.random() * possible.length));

	let temp = [];

	for (let i=0; i<col; i++) {
		let temp2 = [];
		for (let j=0; j<row; j++) {
			let text = possible.charAt(Math.floor(Math.random() * possible.length));
			// temp[i].push(text);
			temp2.push(text)
		}
		temp.push(temp2)
	}
	return temp;



}



console.log(pemisah(4,3));