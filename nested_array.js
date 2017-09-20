function nested_array(row,col){
	let alfabet = 'abcdefghijklmnopqrstuvwxyz'
	let text=''
	let board=[];
	for(let i=0;i < col;i++){
		board.push([])
		for(let j=0;j < row;j++){
			text = alfabet.charAt(Math.floor(Math.random()*alfabet.length))
			board[i].push(text)
		}
	}
	return board
}

console.log(nested_array(4,4))
console.log(nested_array(4,2))