// // explain express comes from node_modules that comes from writing npm install express -s
// // Take a look inside the folder!
// const express = require("express");
// const app = express();
// const moviesRouter = require("./api/movies-router");

// // This is where you want to create your is chrome browser middleware (second exercise)


// // app.use binds middleware to your application. You can give app.use a path and router. The mini router will take care of all requests with the path
// app.use("/api/movies", moviesRouter);


// // For testing purposes only!! Used to check if the middleware function is implemented correctly
// app.get("/middleware-test", async (request, response) => {
//     response.send({ data: 
//         { "isChromeBrowser": request.isChromeBrowser }
//     });
// });

// module.exports = app; 




////////////////////////////////////////////////////////////////////////////////////////////

const express = require("express");
const app = express();

/////////////////////////////////////////////////////

// MIDDLEWARE FUNCTION (key, key, func) !!!

app.use((request, response, next) => {

    console.log(request.headers)
    // and now the request will be blocked

    // unless we use next() to decide what to do 
    // next() will decide what to do with the request
    next()

}); 

// app.use((request, response, next) => {
//     request.isOnFirefoxBrowser =
//         request.headers['user-agent'].includes('Mozilla')
//     next()
// });

/////////////////////////////////////////////////////

// importing head function
const getHead = require("./head");

app.get("/", async (request, response) => {
    response.send(`

    ${getHead('node 2 : : preparation vids v.2021')} 

    <body>

      <h1>node 2 : : preparation vids v.2021 </h1> <br/>

      <h2>basic way </h2> <br/>
      <a href="http://localhost:3000/">            http://localhost:3000/           </a>   <br/> 
      <a href="http://localhost:3000/magda">       http://localhost:3000/magda      </a>   <br/>
      <a href="http://localhost:3000/squirrels">   http://localhost:3000/squirrels  </a>   <br/>  
      <a href="http://localhost:3000/flufflings">  http://localhost:3000/flufflings </a>   <br/>  <br/> 
     
      <h2>aboutRouter </h2> <br/>
      <a href="http://localhost:3000/about">            http://localhost:3000/about           </a>   <br/> 
      <a href="http://localhost:3000/about/squirrel1">  http://localhost:3000/about/squirrel1 </a>   <br/>
      <a href="http://localhost:3000/about/squirrel2">  http://localhost:3000/about/squirrel2 </a>   <br/> <br/>
     
      <h2>_query parameters </h2> <br/>
      <a href="http://localhost:3000/about/employers">              http://localhost:3000/about/employers             </a>   <br/> <br/> 
      
      <h2>_____?skills=tech <br/> request.query.skills === 'tech'</h2> <br/>
      <a href="http://localhost:3000/about/employers?skills=tech">  http://localhost:3000/about/employers?skills=tech </a>   <br/> <br/>
       
      <h2>_____:name <br/> request.params.name === 'zdzisiek' </h2> <br/>
      <a href="http://localhost:3000/about/employers/zdzisiek">     http://localhost:3000/about/employers/zdzisiek    </a>   <br/> <br/>
    
      </body>
      
    `);
});

app.get("/magda", async (request, response) => {
    response.send(`
    this is /magda
    `);
});

app.get("/squirrels", async (request, response) => {
    response.send(`
    this is /squirrels
    `);
});

app.get("/flufflings", async (request, response) => {
    response.send(`
    this is /flufflings
    `);
});



// but instead them messy code above we can make ROUTERS <3 
// any request on /about path will be handled by router 
// but the router will go to a separate file 
// COPIED to aboutRouter file:

// const aboutRouter = express.Router();
// aboutRouter.get("/", async (request, response) => {
//     response.send("this is /about")
// })
// aboutRouter.get("/squirrel1", async (request, response) => {
//     response.send("this is Squirrel_1 inside /about")
// })
// aboutRouter.get("/squirrel2", async (request, response) => {
//     response.send("this is Squirrel_2 inside /about")
// })



// importing ./aboutRouter
const aboutRouter = require("./aboutRouter");
const { request } = require("express");

app.use("/about", aboutRouter)








module.exports = app;