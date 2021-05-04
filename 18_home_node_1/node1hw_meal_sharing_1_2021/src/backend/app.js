const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");


// imported data
const jsonMeals = require("./data/meals"); 
const jsonMealsCloned = JSON.parse(JSON.stringify(jsonMeals)); 
jsonMeals === jsonMealsCloned // false
const jsonReservations = require("./data/reservations")
const jsonReviews = require("./data/reviews");

// console.log(`jsonMeals: `, jsonMeals); 
// console.log(`jsonMealsCloned: `, jsonMealsCloned);
// console.log(`jsonReservations: `, jsonReservations);
// console.log(`jsonReviews: `, jsonReviews);



// this is where you will be adding your routes

const getHead = require("./head");
const { json } = require("express");

// 0.1 MAIN

app.get("/", async (request, response) => {

  response.send(`

    ${getHead('node 1 : : hw : : meal sharing app 1')} 

    <body>

      <h1>node 1 : : hw : : meal sharing app 1 v.2021 </h1> <br/>

      <a href="http://localhost:3000/test">          
               http://localhost:3000/test &nbsp; === all objects &nbsp; 
      </a>   <br/> <br/> 

      <a href="http://localhost:3000/meal">          http://localhost:3000/meal         </a>   <br/> 
      <a href="http://localhost:3000/meals">         http://localhost:3000/meals        </a>   <br/>
      <a href="http://localhost:3000/large-meals">   http://localhost:3000/large-meals  </a>   <br/> 
      <a href="http://localhost:3000/cheap-meals">   http://localhost:3000/cheap-meals  </a>   <br/> 
      <a href="http://localhost:3000/reservation">   http://localhost:3000/reservation  </a>   <br/>
      <a href="http://localhost:3000/reservations">  http://localhost:3000/reservations </a>   <br/>

    </body>

  `);

});


// 0.2 /TEST (SHOULD BE unchanged json files but meals is WITH reservations. 
//            WHYYYY? (mapping should not change the original array!!! wtf))

app.get('/test', (reqest, response) => {
  const dataObjects = {
    json_1_MEALS: jsonMeals,
    json_2_REVIEWS: jsonReviews,
    json_3_RESERVATIONS: jsonReservations
  }
  response.send(dataObjects)
});


// 1.0 /MEALS

// // v1
// jsonMeals.forEach((aMeal) => { // looploop to add reviews 
//   aMeal.review = [];
//   jsonReviews.forEach((aReview) => {
//     if (aReview.mealId === aMeal.id) {
//       aMeal.review.push(aReview);
//     }
//   });
// });
// app.get('/meals', (req, res) => {
//   res.send(jsonMeals);
// });

// v2
const mealsWithRevs_v2 = jsonMealsCloned
  .map((aMeal) => {
    aMeal.jsonReviews = jsonReviews
      .filter((aReview) =>
        aReview.mealId === aMeal.id);
    return aMeal;
  })
app.get("/meals", (req, res) => {
  res.send(mealsWithRevs_v2);
});

console.log(`jsonMeals: `, jsonMeals);
console.log(`mealsWithRevs_v2: `, mealsWithRevs_v2);


// 2.0 /CHEAP MEALS
// const cheapMealsFiltered = jsonMeals

const cheapMealsFiltered = mealsWithRevs_v2
  .filter((aCheapMeal) => aCheapMeal.price < 66.6);

app.get('/cheap-meals', (req, res) => {
  res.send(cheapMealsFiltered);
});



// 3.0 /LARGE MEALS  (ny number of guests)

const largeMealsFiltered = mealsWithRevs_v2
  .filter((aLargeMeal) =>
    aLargeMeal.maxNumberOfGuests > 16);

app.get('/large-meals', (req, res) => {
  res.send(largeMealsFiltered);
});




// 4.0 /MEAL 

app.get('/meal', (req, res) => {

  aRandomMealNumber = Math.floor(mealsWithRevs_v2.length * Math.random())
  const aRandomMeal = mealsWithRevs_v2[aRandomMealNumber];
  // it declared outside --> it won't be refreshing each time, if inside ---> it will

  res.send(aRandomMeal);
});




// 5.0 /RESERVATIONS 

app.get('/reservations', (req, res) => {
  res.json(jsonReservations);
});



// 6.0 /RESERVATION

app.get('/reservation', (req, res) => {

  const aRandomReservationNumber = Math.floor(jsonReservations.length * Math.random())
  const aRandomReservation = jsonReservations[aRandomReservationNumber];
  // it declared outside --> it won't be refreshing each time, if inside ---> it will

  res.send(aRandomReservation)
});


module.exports = app;
