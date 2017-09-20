function createNestedArr(jumlahRow, jumlahCol){

	let randomchar=[]
	let size=jumlahRow*jumlahCol
	let temp=[]
	let temp1=[]
	let temp2=[]
	let a=0;

	for(let i=0;i<size;i++){
		temp[i]=String.fromCharCode(Math.random()*(122-97)+97);
	}

	for(let i=0;i<jumlahRow;i++){
		for(let j=0;j<jumlahCol;j++){
			temp1.push(temp[a])
			a++
		}
		temp2.push(temp1)
		temp1=[]
	}

	return temp2;
}

//console.log(createNestedArr(5,3))
console.log(createNestedArr(4,2))
