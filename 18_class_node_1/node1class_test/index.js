// importing the functions inside an object
const stuffFromOperations = require("./utils/operations.js")

console.log(`\ntypeof stuffFromOperations: `,
    typeof stuffFromOperations) // object 


const addition = stuffFromOperations.add
const multiplication = stuffFromOperations.multiply
// console.log(addition, multiplication)

const messageFromOperations = `
The return of function called addNumbers 
imported===required from operations.js: 
${addition(2, 7)} \n 
The return of function called multiplyNumbers 
imported===required from operations.js: 
${multiplication(2, 7)} \n `
console.log(messageFromOperations);


const stuffFromWeb = require("./web.js") // hmmmmm.....
console.log(`\ntypeof stuffFromWeb: `,
    typeof stuffFromWeb) // function  


// // version wih destructured object (add & multiply are the KEYS)
// const { add, multiply } = require("./utils/operations")

// const messageOfDestruction = `
// The return of function from KEY > add
// imported===required from operations.js: 
// ${add(2, 7)} \n 
// The return of function from KEY > multiply 
// imported===required from operations.js: 
// ${multiply(2, 7)} \n `

// console.log(messageOfDestruction);