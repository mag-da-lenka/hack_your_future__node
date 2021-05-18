const express = require("express");
const app = express();


const moviesRouter = require("./api/movies-router");



// MIDDLEWARE BELOW : : is my browser Chrime? 



// app.use binds middleware to your application. 
// You can give app.use a path and router. 
// The mini router will take care of all requests with the path
app.use("/api/movies", moviesRouter);



// For testing purposes only!! Used to check if the middleware function is implemented correctly
app.get("/middleware-test", async (request, response) => {
    response.send({
        data: { "isChromeBrowser": request.isChromeBrowser }
    });
});







app.get("/", (request, response) => {
    const getHead = require("./head");
    response.send(` 
    ${getHead('node 2 : : class : : movies app')} 
    <body>
        <h1>node 2 : : class : : movies app </h1> <br/>
        
        <h2> : : /middleware-test : : </h2> <br/>

        <a href="http://localhost:3000/middleware-test">     http://localhost:3000/middleware-test   </a> <br/> <br/>
        
        <h2> : : /api/movies : : </h2> <br/>

        <a href="http://localhost:3000/api/mo666ies">        http://localhost:3000/api/mo666ies  </a>  <br/> 
        <a href="http://localhost:3000/api/movies">          http://localhost:3000/api/movies  </a>  <br/> <br/>

        <h2> : : /api/movies/year : : </h2> <br/>

        <a href="http://localhost:3000/api/mov666ies/2002">  http://localhost:3000/api/mov666ies/2002  </a>  <br/>
        <a href="http://localhost:3000/api/movies/2002">     http://localhost:3000/api/movies/2002  </a>  <br/>
        <a href="http://localhost:3000/api/movies/666">      http://localhost:3000/api/movies/666  </a>  <br/> 
        <a href="http://localhost:3000/api/movies/SQUIRRELS">http://localhost:3000/api/movies/SQUIRRELS  </a>  <br/><br/> <br/> 
        
        
        <h2> : : /api/movies? : :  beginYear, endYear : : </h2> <br/>
        <h3> should show films from 1988 to 1989 </h3>
        <a href="http://localhost:3000/api/movies?beginYear=1988&endYear=1989">     
                http://localhost:3000/api/movies?beginYear=1998&endYear=1999  </a>  <br/> <br/>
        <h3> should show films from 1666 to 1777 </h3>
        <a href="http://localhost:3000/api/movies?beginYear=1666&endYear=1777">     
                 http://localhost:3000/api/movies?beginYear=1666&endYear=1777  </a>  <br/> <br/> 
        <h3> should show films from 1666 to 1777 BUT THE PARAMETER IS NOT SUPPORTED </h3>
        <a href="http://localhost:3000/api/movies?begin666Year=1666&endYear=1777">     
                 http://localhost:3000/api/movies?begin666Year=1666&endYear=1777  </a>  <br/> <br/> <br/>


        <h2> : : /api/movies? : :  beginYear, endYear, minRating : : </h2> <br/>
        <h3> should show films from 2017 to 2018 with min 8.666 rating </h3>
        <a href="http://localhost:3000/api/movies?beginYear=2017&endYear=2018&minRating=8.666"> 
                 http://localhost:3000/api/movies?beginYear=2017&endYear=2018&minRating=8.666  </a>  <br/> <br/> 
        <h3> should show films from 1666 to 1777 with min 8.666 rating </h3>
        <a href="http://localhost:3000/api/movies?beginYear=1666&endYear=1777&minRating=8.666"> 
             http://localhost:3000/api/movies?beginYear=1666&endYear=1777&minRating=8.666  </a>  <br/> <br/> 
        <h3> should show films from 2017 to 2018 with min 8.666 rating BUT THE PARAMETER IS NOT SUPPORTED </h3>
        <a href="http://localhost:3000/api/movies?begin666Year=2017&endYear=2018&minRating=8.666"> 
             http://localhost:3000/api/movies?begin666Year=2017&endYear=2018&minRating=8.666  </a>  <br/> <br/>


    </body>
  `);
});




module.exports = app;