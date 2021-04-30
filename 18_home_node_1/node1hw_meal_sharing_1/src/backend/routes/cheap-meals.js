/* Respond with the json for all the meals (including it's reviews) that are cheap (you define what a cheap meal is) */

const express = require('express');
const app = express();

// data source
const jsonMeals = require(__dirname + '/../data/meals.json');
const jsonReviews = require(__dirname + '/../data/reviews.json');


const cheapMealsFiltered = jsonMeals.filter((aCheapMeal) => aCheapMeal.price < 107);

cheapMealsFiltered.forEach((aMeal) => {

    aMeal.review = [];

    jsonReviews.forEach((aReview) => {

        if (aReview.mealId === aMeal.id) {
            aMeal.review.push(aReview);
        };

    });

});


app.get('/cheap-meals', (request, response) => {
    response.send(cheapMealsFiltered);
});

module.exports = app;