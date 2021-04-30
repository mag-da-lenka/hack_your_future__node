const express = require("express")
const app = express()

const message = "Hello Node World!"
console.log(message)


// HOMEWORK node.js 1 (week-18) by Magdalena /HYF /class 12
// console.log("parallel world connection test");  
// WarmUp ---> Circle calculator ---> https://github.com/HackYourFuture-CPH/node.js/blob/master/week1/homework.md#warmup

class Circle {

    constructor(radius) { this.radius = radius; }
    getDiameter() { return 2 * this.radius; }
    getCircumference() { return 2 * Math.PI * this.radius; }
    getArea() { return Math.PI * Math.pow(this.radius, 2); }

}

const circle10 = new Circle(10);
console.log(circle10.getDiameter());      // 20 
console.log(circle10.getCircumference()); // 62.83185307179586
console.log(circle10.getArea());          // 314.1592653589793 

const circle27 = new Circle(27);
console.log(circle27.getDiameter());      // 54 
console.log(circle27.getCircumference()); // 169.64600329384882
console.log(circle27.getArea());          // 2290.221044466959 

/*
Madzik@DESKTOP-7S4P8PM MINGW64 ~/Downloads/1-coding-hyf/hyf-12-homework-FINAL/hyf-homework/nodejs/week1/circle_calculator (master)
$ node calculator.js
20
62.83185307179586
314.1592653589793
54
169.64600329384882
2290.221044466959 
*/


const getHead = require("./head");

app.get("/", (request, response) => {

    response.send(` 

    ${getHead('circle : : calculator')} 

        <html>
            <body>
                <h1>node 1 : :  hw <br/> circle : : calculator</h1>  
            </body>
        </html>
  `);
});



app.listen(3000, () => {
    console.log("server is ready, yay")
})
