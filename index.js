function createNestedArr(rows, cols) {

  // result array
  let result = [];

  // a char
  let minCode = 97;
  // z char
  let maxCode = 122;

  // generate rows
  for (let i = 0; i < rows; i++) {

    result.push([]);

    for (let j = 0; j < cols; j++) {

      // random code
      let randomCode = Math.floor(Math.random() * (maxCode - minCode + 1) + minCode);

      result[i].push(String.fromCharCode(randomCode));

    }

  }

  return result;

}

console.log(createNestedArr(5, 3));
console.log(createNestedArr(4, 2));
