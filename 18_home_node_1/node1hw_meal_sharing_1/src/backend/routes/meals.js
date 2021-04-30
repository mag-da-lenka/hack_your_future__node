/*Respond with the json for all the meals. 
For each meal, if there are reviews matching its meal ID, add these reviews to each meal in the form of an array. 
For meals that do not have any reviews, the "reviews" property will be an empty array.*/

const express = require('express');
const app = express();

// data source
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



app.get('/meals', (request, response) => {

   response.send(jsonMeals);

});


module.exports = app; 