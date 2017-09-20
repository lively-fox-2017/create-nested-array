function createNestedArr(jumlahRow, jumlahCol){
	
	var arr = [];

	for ( i = 0; i < jumlahRow; i++) {
 	arr[i]=[];
 	// console.log(arr[i])
 		for (j=0; j < jumlahCol;j++) {
  				arr[i][j]=randomString(1);
  				// console.log(arr[i][j]);
 			}
	}
	return arr;
}
console.log(createNestedArr(5,3));
console.log(createNestedArr(4,2));


function randomString(panjangStr) {
  	let str = '';
  	
  	let randomChar = function() {
    	let n = Math.floor(Math.random() * 26);
    	return String.fromCharCode(n + 97);
  	}
  	
  	while (str.length < panjangStr) 
  		str += randomChar();
  		return str;
}
