const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");


// imported data
const jsonMeals = require("./data/meals");
const jsonReservations = require("./data/reservations")
const jsonReviews = require("./data/reviews");
// console.log(`meals: `, meals);
// console.log(`reservations: `, reservations);
// console.log(`reviews: `, reviews);


// this is where you will be adding your routes

// 0. HOME 

const getHead = require("./head");

app.get("/", async (request, response) => {
  response.send(`

    ${getHead('node 1 : : hw : : meal sharing app 1')} 

    <body>
      <h1>node 1 : : hw : : meal sharing app 1 v.2021 </h1> <br/>
      <a href="http://localhost:3000/meal">          http://localhost:3000/meal         </a>   <br/> 
      <a href="http://localhost:3000/meals">         http://localhost:3000/meals        </a>   <br/>
      <a href="http://localhost:3000/large-meals">   http://localhost:3000/large-meals  </a>   <br/> 
      <a href="http://localhost:3000/cheap-meals">   http://localhost:3000/cheap-meals  </a>   <br/> 
      <a href="http://localhost:3000/reservation">   http://localhost:3000/reservation  </a>   <br/>
      <a href="http://localhost:3000/reservations">  http://localhost:3000/reservations </a>   <br/>
    </body>
  `);
});




// 1. /MEALS

jsonMeals.forEach((aMeal) => {

  aMeal.review = [];

  jsonReviews.forEach((aReview) => {
    if (aReview.mealId === aMeal.id) {
      aMeal.review.push(aReview);
    };
  });
});
// 
app.get('/meals', (request, response) => {
  
  response.send(jsonMeals);
});


// 2. /CHEAP MEALS

const cheapMealsFiltered = jsonMeals
  .filter((aCheapMeal) => aCheapMeal.price < 107);

cheapMealsFiltered.forEach((aMeal) => {

  aMeal.review = [];

  jsonReviews.forEach((aReview) => {
    if (aReview.mealId === aMeal.id) {
      aMeal.review.push(aReview);
    };
  });
});
// 
app.get('/cheap-meals', (request, response) => {
  
  response.send(cheapMealsFiltered);
});


// 3. /LARGE MEALS 

const largeMealsFiltered =
  jsonMeals.filter((aLargeMeal) =>
    aLargeMeal.maxNumberOfGuests > 16);

largeMealsFiltered.forEach((aMeal) => {

  aMeal.review = [];

  jsonReviews.forEach((aReview) => {
    if (aReview.mealId === aMeal.id) {
      aMeal.review.push(aReview);
    };
  });
});
//
app.get('/large-meals', (request, response) => {
  
  response.send(largeMealsFiltered);
});


// 4. /MEAL 

jsonMeals.forEach((aMeal) => {
  aMeal.review = [];
  jsonReviews.forEach((aReview) => {
    if (aReview.mealId === aMeal.id) {
      aMeal.review.push(aReview);
    };
  });
});
//
app.get('/meal', (request, response) => {
  
  aRandomMealNumber = Math.floor(jsonMeals.length * Math.random())
  const aRandomMeal = jsonMeals[aRandomMealNumber];
  // it declared outside --> it won't be refreshing each time, if inside ---> it will
  
  response.send(aRandomMeal);
});


// 5. /RESERVATIONS 

app.get('/reservations', (request, response) => {
  
  response.json(jsonReservations);
});


// 6. /RESERVATION

app.get('/reservation', (request, response) => {

  const aRandomReservationNumber = Math.floor(jsonReservations.length * Math.random())
  const aRandomReservation = jsonReservations[aRandomReservationNumber];
  // it declared outside --> it won't be refreshing each time, if inside ---> it will
  
  response.send(aRandomReservation)
});


module.exports = app;
