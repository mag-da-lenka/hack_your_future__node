const express = require("express")
const routeR = express.Router(); 

const getHead = require("../head");  // for styling purposes :>

// part 1 
// GET `/numbers/add?first=<number here>&second=<number here>`. 
// in response send sum (first + second).

routeR.get('/add', function (req, res) { // WRONG: routeR.get('/numbers/add', function (req, res) {
    let number1 = Number(req.query.firstNumber);
    let number2 = Number(req.query.secondNumber);
    let sumBoth = (number1 + number2).toString();
    res.send(` 
    ${getHead(': : node 2 : : homework : : small calculator / 2021 : :')} 
    <p> ADDITION: </p>
    <p> http://localhost:3000/numbers/add?firstNumber=39&secondNumber=560 </p>
    <p> firstNumber ${number1} + secondNumber ${number2}  =   sumBoth ${sumBoth} </p>  
    `);
});

routeR.get('/multiply/', function (req, res) {
    let number1 = Number(req.query.firstNumber);
    let number2 = Number(req.query.secondNumber);
    let multiplyBoth = (number1 * number2).toString();
    res.send(` 
    ${getHead(': : node 2 : : homework : : small calculator / 2021 : :')} 
    <p> MULTIPLICATION: </p>
    <p> http://localhost:3000/numbers/multiply?firstNumber=39&secondNumber=560 </p>
    <p> firstNumber ${number1} * secondNumber ${number2}  =   multiplyBoth ${multiplyBoth} </p>  
    `);
});

routeR.get('/divide/', function (req, res) {
    let number1 = Number(req.query.firstNumber);
    let number2 = Number(req.query.secondNumber);
    let divideBoth = (number1 / number2).toString();
    res.send(`
    ${getHead(': : node 2 : : homework : : small calculator / 2021 : :')}  
    <p> DIVISION: </p>
    <p> http://localhost:3000/numbers/divide?firstNumber=39&secondNumber=560 </p>
    <p> firstNumber ${number1} / secondNumber ${number2}  =   divideBoth ${divideBoth} </p>  
    `);
});

routeR.get('/addthendivide/', function (req, res) {
    let number1 = Number(req.query.firstNumber);
    let number2 = Number(req.query.secondNumber);
    let number3 = Number(req.query.thirdNumber);
    let AddThendivide = ((number1 + number2) / (number3)).toString();
    res.send(` 
    ${getHead(': : node 2 : : homework : : small calculator / 2021 : :')} 
    <p> ADDITION, then ---> DIVISION: </p>
    <p> http://localhost:3000/numbers/addthendivide?firstNumber=39&secondNumber=560&thirdNumber=2 </p>
    <p> firstNumber (${number1} + secondNumber ${number2}) / thirdNumber ${number3}  =   AddThendivide ${AddThendivide} </p> 
    `);
});


// part 2 
// GET `/numbers/multiply/<first number here>/<second number here>` 
// in response send multiplication (first \* second)

routeR.get('/add/:firstNumber/:secondNumber', function (req, res) {
    let number1 = Number(req.params.firstNumber);
    let number2 = Number(req.params.secondNumber);
    let sumBoth = (number1 + number2).toString();
    res.send(` 
    ${getHead(': : node 2 : : homework : : small calculator / 2021 : :')} 
    <p> ADDITION: </p>
    <p> http://localhost:3000/numbers/add/39/560 </p>
    <p> firstNumber ${number1} * secondNumber ${number2}  = sumBoth ${sumBoth} </p>  
    `);
});

routeR.get('/multiply/:firstNumber/:secondNumber', function (req, res) {
    let number1 = Number(req.params.firstNumber);
    let number2 = Number(req.params.secondNumber);
    let multiplyBoth = (number1 * number2).toString();
    res.send(` 
    ${getHead(': : node 2 : : homework : : small calculator / 2021 : :')} 
    <p> MULTIPLICATION: </p>
    <p> http://localhost:3000/numbers/multiply/39/560 </p>
    <p> firstNumber ${number1} * secondNumber ${number2}  = multiplyBoth ${multiplyBoth} </p>  
    `);
});





module.exports = routeR;