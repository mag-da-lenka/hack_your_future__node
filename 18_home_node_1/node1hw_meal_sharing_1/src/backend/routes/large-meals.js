// Respond with the json for all the meals (including it's reviews) that can fit lots of people

const express = require('express');
const app = express();

// data source
const jsonMeals = require(__dirname + '/../data/meals.json');
const jsonReviews = require(__dirname + '/../data/reviews.json');


const largeMealsFiltered = jsonMeals.filter((aLargeMeal) => aLargeMeal.maxNumberOfGuests > 16);

largeMealsFiltered.forEach((aMeal) => {

    aMeal.review = [];

    jsonReviews.forEach((aReview) => {

        if (aReview.mealId === aMeal.id) {
            aMeal.review.push(aReview);
        };

    });

});


app.get('/large-meals', (request, response) => {
    response.send(largeMealsFiltered);
});

module.exports = app;