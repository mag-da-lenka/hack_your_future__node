// HOMEWORK node.js 2 (week-19) by Magdalena /HYF /class 12
// console.log("parallel world connection test");  
// WarmUp ---> small_calculator ---> https://github.com/HackYourFuture-CPH/node.js/blob/master/week2/homework.md#warmup

const express = require("express");
const app = express();


const calcRouter = require("./routes/calc_route")
app.use("/numbers", calcRouter);







const getHead = require("./head");  // for styling purposes :>

app.get("/", (request, response) => {

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


app.listen(3000, () => console.log(`Calculator app on port 3000`))