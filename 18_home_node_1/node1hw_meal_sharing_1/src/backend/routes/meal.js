// Respond with the json for a random meal (including it's reviews)

const express = require('express');
const app = express();

// data source:
const jsonMeals = require(__dirname + '/../data/meals.json');
const jsonReviews = require(__dirname + '/../data/reviews.json');


jsonMeals.forEach((aMeal) => {

   aMeal.review = [];

   jsonReviews.forEach((aReview) => {

      if (aReview.mealId === aMeal.id) {
         aMeal.review.push(aReview);
      };

   });

});



app.get('/meal', (request, response) => {

   const aRandomMeal = jsonMeals[Math.floor(jsonMeals.length * Math.random())];
   // it declared outside --> it won't be refreshing each time, if inside ---> it will

   response.send(aRandomMeal);

});

module.exports = app;