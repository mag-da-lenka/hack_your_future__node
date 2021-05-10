// HOMEWORK node.js 2 (week-19) by Magdalena /HYF /class 12
// console.log("parallel world connection test");  
// WarmUp ---> small_calculator ---> https://github.com/HackYourFuture-CPH/node.js/blob/master/week2/homework.md#warmup

const express = require('express');
const route = express();



const getHead = require("./head");  // for styling purposes :>

route.get("/", (request, response) => {

    response.send(` 

    ${getHead(': : node 2 : : homework : : small calculator / 2021 : :')} 

    <body>

        <h1>: : node 2 : : homework : : <br/> : : small calculator / 2020 : :</h1> <br/> 
        <a href="http://localhost:3000/">    
                 http://localhost:3000/ </a> <br/> <br/>  

        <h2> : : part 1 : : query params [+] [*] [/] [+ /] : : </h2> <br/> 

        <a href="http://localhost:3000/numbers/add?firstNumber=39&secondNumber=560">    
                 http://localhost:3000/numbers/add?firstNumber=39&secondNumber=560 </a> <br/> 

        <a href="http://localhost:3000/numbers/multiply?firstNumber=39&secondNumber=560">    
                 http://localhost:3000/numbers/multiply?firstNumber=39&secondNumber=560 </a> <br/>  
        
        <a href="http://localhost:3000/numbers/divide?firstNumber=39&secondNumber=560">    
                 http://localhost:3000/numbers/divide?firstNumber=39&secondNumber=560 </a> <br/> 

        <a href="http://localhost:3000/numbers/addthendivide?firstNumber=39&secondNumber=560&thirdNumber=2">    
                 http://localhost:3000/numbers/addthendivide?firstNumber=39&secondNumber=560&thirdNumber=2 </a> <br/> <br/> 

        <h2> : : part 2 : : path params : :  [+] [*] : : </h2> <br/> 

        <a href="http://localhost:3000/numbers/add/39/560 ">    
                 http://localhost:3000/numbers/add/39/560  </a> <br/> 

        <a href="http://localhost:3000/numbers/multiply/39/560 ">    
                 http://localhost:3000/numbers/multiply/39/560  </a> <br/> 

    </body>
  `);
});


// part 1 
// GET `/numbers/add?first=<number here>&second=<number here>`. 
// in response send sum (first + second).

route.get('/numbers/add', function (req, res) {
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

route.get('/numbers/multiply/', function (req, res) {
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

route.get('/numbers/divide/', function (req, res) {
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

route.get('/numbers/addthendivide/', function (req, res) {
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

route.get('/numbers/add/:firstNumber/:secondNumber', function (req, res) {
    let number1 = Number(req.params.firstNumber);
    let number2 = Number(req.params.secondNumber);
    let sumBoth = (number1 + number2).toString();
    res.send(` 
    ${getHead(': : node 2 : : homework : : small calculator / 2021 : :')} 
    <p> MULTIPLICATION: </p>
    <p> http://localhost:3000/numbers/add/39/560 </p>
    <p> firstNumber ${number1} * secondNumber ${number2}  = sumBoth ${sumBoth} </p>  
    `);
});

route.get('/numbers/multiply/:firstNumber/:secondNumber', function (req, res) {
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


route.listen(3000);