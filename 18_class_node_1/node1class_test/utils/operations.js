function addNumbers(a, b) {
    return a + b
}

function multiplyNumbers(a, b) {
    return a * b
}

// exporting whatever we want from this file 

// this is wrong
// module.exports = addNumbers, multiplyNumbers 

// this is ok --> make an object 

module.exports = {
    add: addNumbers,
    multiply: multiplyNumbers
}