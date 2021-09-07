// Create a function called doMathArray, this function accepts an array and callback as argument

// doMathArray([1,2,3], add1) //[2,3,4]
// doMathArray([1,2,3], divideBy2) //[0.5,1,1.5]

// also create minus2 and multiplyBy5

function doMathArray(arr, callback){
    return callback(arr)
}

function add1(arr){
    newArr = []
    for(i=0; i<arr.length; i++){
        newArr.push(arr[i]+1)
    }
    console.log(newArr)
}

function divideBy2(arr){
        newArr = []
        for(i=0; i<arr.length; i++){
            newArr.push(arr[i]/2)
        }
        console.log(newArr)
}

function minus2(arr){
    newArr = []
    for(i=0; i<arr.length; i++){
        newArr.push(arr[i]-2)
    }
    console.log(newArr)
}

function multiplyBy5(arr){
    newArr = []
    for(i=0; i<arr.length; i++){
        newArr.push(arr[i]*5)
    }
    console.log(newArr)
}

doMathArray([1,2,3], add1)
doMathArray([1,2,3], divideBy2)
doMathArray([1,2,3], minus2)
doMathArray([1,2,3], multiplyBy5)