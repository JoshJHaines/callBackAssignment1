//function accepts the 2 params.

function doSomething(array, callback) {
//callback allows multiple functions to be used as a callback
    for (let i = 0; i < array.length; i++) {
		callback(array[i]);
	}
}

function greeting(name) {
	console.log(`Hello, ${name}`);
}

function sayBye(name) {
	console.log(`Good bye, ${name}`);
}

doSomething(["Bart", "Homer", "Lisa"], greeting);
doSomething(["Bart", "Homer", "Lisa"], sayBye);
