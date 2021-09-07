// function doMath(num, add) {
//   return add(num)
// }

// function add(num) {
//   return num + 1;
// }

// doMath(1, add)

function doMath(num, callback) {
	return callback(num);
}

function add(num) {
	return num + 1;
}

function minus(num) {
	return num - 1;
}

doMath(1, add);
doMath(1, minus);

