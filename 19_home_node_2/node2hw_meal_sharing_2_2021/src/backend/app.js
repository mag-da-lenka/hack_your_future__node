const express = require("express");
const app = express();

// import the 3 routers REQUIRED FOR HOMEWORK
// give app.use a path and router 
// app.use binds middleware to the app  

const mealsRouter =
    require("./api/meals-router");
app.use("/api/meals", mealsRouter);

const reservationsRouter =
    require("./api/reservations-router");
app.use("/api/reservations", reservationsRouter);

const reviewsRouter =
    require("./api/reviews-router");
app.use("/api/reviews", reviewsRouter);



// OTHER ROUTERS

const cheapMealsRouter =
    require("./api/cheap-meals-router");
app.use("/api/cheap-meals", cheapMealsRouter);

const largeMealsRouter =
    require("./api/large-meals-router");
app.use("/api/large-meals", largeMealsRouter);

const mealRouter =
    require("./api/meal-router");
app.use("/api/meal", mealRouter);

const reservationRouter =
    require("./api/reservation-router");
app.use("/api/reservation", reservationRouter);

// this is just for me (skip)
const myTestRouter =
    require("./api/my_test-router");
app.use("/api/my_test", myTestRouter);



// MAIN (for a better UX :>)
const getHead = require("./head");

app.get("/", async (request, response) => {
    response.send(`
    ${getHead('node 2 : : hw : : meal sharing app 2')} 
    <body>
      <h1>node 2 : : hw : : meal sharing app 2 v.2021 </h1> <br/>
           
      <h2> : : my_test to see the initial json files : : </h2><br/>

      <a href="http://localhost:3000/api/my_test">          http://localhost:3000/api/my_test </a>   <br/><br/> 

      <h2> : : tasks from node 2 mealsharing app 2 : : </h2> <br/> 

      <h3> 01) /api/meals/:id </h3> 
      <a href="http://localhost:3000/api/meals/3">          http://localhost:3000/api/meals/3 </a> <br/>
      <a href="http://localhost:3000/api/meals/666">        http://localhost:3000/api/meals/666 </a> <br/>
      <a href="http://localhost:3000/api/meals/k">          http://localhost:3000/api/meals/k </a> <br/>
      <a href="http://localhost:3000/api/meals/lol">        http://localhost:3000/api/meals/lol </a> <br/><br/>
      <h3> 02) /api/meals </h3> 
      <a href="http://localhost:3000/api/meals">            http://localhost:3000/api/meals </a> <br/><br/>
      <h3> 03) /api/reservations/:id </h3> 
      <a href="http://localhost:3000/api/reservations/3">   http://localhost:3000/api/reservations/3 </a> <br/>
      <a href="http://localhost:3000/api/reservations/666"> http://localhost:3000/api/reservations/666 </a> <br/>
      <a href="http://localhost:3000/api/reservations/g">   http://localhost:3000/api/reservations/g </a> <br/>
      <a href="http://localhost:3000/api/reservations/lol"> http://localhost:3000/api/reservations/lol </a> <br/><br/>
      <h3> 04) /api/reservations </h3> 
      <a href="http://localhost:3000/api/reservations">     http://localhost:3000/api/reservations </a> <br/><br/>
      <h3> 05) /api/reviews/:id </h3> 
      <a href="http://localhost:3000/api/reviews/3">        http://localhost:3000/api/reviews/3 </a> <br/>
      <a href="http://localhost:3000/api/reviews/666">      http://localhost:3000/api/reviews/666 </a> <br/>
      <a href="http://localhost:3000/api/reviews/r">        http://localhost:3000/api/reviews/r </a> <br/>
      <a href="http://localhost:3000/api/reviews/lol">      http://localhost:3000/api/reviews/lol </a> <br/><br/>
      
      <h3> 06) /api/reviews </h3> 
      <a href="http://localhost:3000/api/reviews">          http://localhost:3000/api/reviews </a> <br/><br/>

      <h2> : : more tasks on /api/meals/ : : </h2> <br/> 
      
      <h3> 07) /api/meals?maxPrice=90 </h3> 
      <a href="http://localhost:3000/api/meals?maxPrice=90">              http://localhost:3000/api/meals?maxPrice=90 </a> <br/>
      <a href="http://localhost:3000/api/meals?maxPrice=blabla">          http://localhost:3000/api/meals?maxPrice=blabla </a> <br/><br/>
      <h3> 08) /api/meals?title=Indian%20platter </h3> 
      <a href="http://localhost:3000/api/meals?title=food">               http://localhost:3000/api/meals?title=food </a> <br/> 
      <a href="http://localhost:3000/api/meals?title=pink">               http://localhost:3000/api/meals?title=pink </a> <br/>
      <a href="http://localhost:3000/api/meals?title=floyd">              http://localhost:3000/api/meals?title=floyd </a> <br/>
      <a href="http://localhost:3000/api/meals?title=flamingo">           http://localhost:3000/api/meals?title=flamingo </a> <br/>
      <a href="http://localhost:3000/api/meals?title=Indian%20platter">   http://localhost:3000/api/meals?title=Indian%20platter </a> <br/>
      <a href="http://localhost:3000/api/meals?title=copenhagen&=food">   http://localhost:3000/api/meals?title=copenhagen&=food </a> <br/><br/>
      <h3> 09) /api/meals?createdAfter=2019-04-05 </h3> 
      <a href="http://localhost:3000/api/meals?createdAfter=2019-04-05">  http://localhost:3000/api/meals?createdAfter=2019-04-05 </a> <br/>
      <a href="http://localhost:3000/api/meals?createdAfter=2020-04-05">  http://localhost:3000/api/meals?createdAfter=2020-04-05 </a> <br/>
      <a href="http://localhost:3000/api/meals?createdAfter=2020-04-055"> http://localhost:3000/api/meals?createdAfter=2020-04-055 </a> <br/><br/>    
      <h3> 10) /api/meals?limit=4 </h3> 
      <a href="http://localhost:3000/api/meals?limit=5">                  http://localhost:3000/api/meals?limit=5 </a> <br/> 
      <a href="http://localhost:3000/api/meals?limit=bzz">                http://localhost:3000/api/meals?limit=bzz </a> <br/><br/> 
      <h3> 11) = 01) What if there is no meal with the requested id in meals.json? -></h3> 
      <a href="http://localhost:3000/api/meals/666">                      http://localhost:3000/api/meals/666 </a> <br/><br/> 
      <h3> 12) = 01) =03) =05) What if the users writes a string as id? fx "/meals/lol"</h3> 
      <a href="http://localhost:3000/api/meals/lol">                      http://localhost:3000/api/meals/lol </a> <br/><br/> 
      <h3> 13) What if the users writes a query parameter that is not supported?</h3>
      <a href="http://localhost:3000/api/meals?xxxPrice=90">              http://localhost:3000/api/meals?xxxPrice=90 </a> <br/>
      <a href="http://localhost:3000/api/meals?xxxtitle=food">            http://localhost:3000/api/meals?xxxtitle=food </a> <br/>
      <a href="http://localhost:3000/api/meals?xcreatedAfter=2019-04-05"> http://localhost:3000/api/meals?xcreatedAfter=2019-04-052 </a> <br/>
      <a href="http://localhost:3000/api/meals?xxxlimit=2">               http://localhost:3000/api/meals?xxxlimit=2 </a> <br/><br/>
      
      
      <h2> : : old tasks from node 1 : : </h2><br/>

      <h3> 14) /api/meal (random, with reviews)</h3> 
      <a href="http://localhost:3000/api/meal">          http://localhost:3000/api/meal         </a>   <br/><br/> 
      <h3> 15) = 02) /api/meals (with reviews) </h3> 
      <a href="http://localhost:3000/api/meals">         http://localhost:3000/api/meals        </a>   <br/><br/>
      <h3> 16) /api/large-meals (with reviews) </h3>
      <a href="http://localhost:3000/api/large-meals">   http://localhost:3000/api/large-meals  </a>   <br/><br/> 
      <h3> 17) /api/cheap-meals (with reviews) </h3>
      <a href="http://localhost:3000/api/cheap-meals">   http://localhost:3000/api/cheap-meals  </a>   <br/><br/> 
      <h3> 18) /api/reservation (random)</h3>
      <a href="http://localhost:3000/api/reservation">   http://localhost:3000/api/reservation  </a>   <br/><br/>
      <h3> 19) = 04) /api/reservations  </h3>
      <a href="http://localhost:3000/api/reservations">  http://localhost:3000/api/reservations </a>   <br/><br/>

    </body>    
  `);
});




module.exports = app;