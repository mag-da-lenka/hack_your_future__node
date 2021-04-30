// this is index.js
const express = require("express");
const app = express();


// now we are doing the first export (vid2 +/- 1:10:00 ) 
const getHead = require("./head");
//now we can call it inside below ---> 

app.get("/", (request, response) => {
    response.send(`

    ${getHead('My portfolio is in the head')} 
    this is head > func getHead and it grabs title and css for the body <br/> <br/>

    <body>
        <h1>PORTFOLIO ex node.js 1 </h1> <br/>
        <h2>micro squirreloid's server </h2>  <br/>
        <p> Squirreloids are delightful creatures. <br/>
        They eat evil worms. Tadaaam. </p> <br/>
        <a href="http://localhost:3000/about">       http://localhost:3000/about       </a> 
        <a href="http://localhost:3000/contact">     http://localhost:3000/contact     </a> 
        <a href="http://localhost:3000/api-example"> http://localhost:3000/api-example </a> 
    </body>

  `);
});

app.get("/about", (request, response) => {
    response.send(`
    ${getHead('My portfolio is in the head')} 
    <body>
        <h1>http://localhost:3000/about</h1> <br/>
        <p>This is an about page</p>
              <p>Hello. Don't forget the NPM RUN DEV thingy!!!  </p>
    </body>
  `);
});

app.get("/contact", (request, response) => {
    response.send(`
    ${getHead('My portfolio is in the head')} 
    <body>
        <h1>http://localhost:3000/contact</h1> <br/> <br/>
        <a href="https://www.facebook.com/theMagdalenka?ref=bookmarks">
           squirrels on fb
        </a> <br/><br/>
        <form>
            <label>name</label>
            <input placeholder="... write your name ..."> <br/> <br/>
            <button>Contact me</button>
        </form>
    </body> 
  `);
});

app.get("/api-example", (req, res) => {
    res.send(
        {
            "id": 1,
            "title": "Indian food in the summer",
            "maxNumberOfGuests": 5,
            "description": "A nice night out eating delicious indian food",
            "createdAt": "2019/12/7 14:34",
            "price": 67
        }
    )
});

// another version of the above in a normal function syntax 
const apiExample = (req, res) => {
    res.send(
        {
            "id": 1,
            "title": "Indian food in the summer",
            "maxNumberOfGuests": 5,
            "description": "A nice night out eating delicious indian food",
            "createdAt": "2019/12/7 14:34",
            "price": 67
        }
    )
}
app.get("/api-example1", apiExample);


app.listen(3000);

// btw for json requests use POSTMAN!!! 
// (see the vid after the break ---> www.postman.com 7:30 mins )