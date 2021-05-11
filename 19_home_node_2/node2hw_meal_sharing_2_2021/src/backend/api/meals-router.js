const express = require("express");
const router = express.Router();
// const { request, response } = require("express");

const meals = require("./../data/meals.json");
// https://httpstatuses.com/


// task 01) meals with a corresponding /:id

router.get("/:id", async (req, res) => {

  const an_ID = parseInt(req.params.id);

  try {

    if (an_ID <= meals.length) {
      const aMealWithId = meals
        .find(aReview =>
          aReview.id === an_ID)
      res.status(200)
        .send(aMealWithId);
    }

    else if (isNaN(an_ID)) {
      res.status(400)
        .send(`ERROR 400: Not a Number > ENTER A NUMBER!`);
    }

    else if (an_ID !== meals.length) {
      res.status(404)
        .send(`ERROR 404: ID ${an_ID} > NOT FOUND!`);
    }

    else {
      res.status(418)
        .send(`ERROR 418: I'm a teapot > fill me with coffee.`);
    }

  }

  catch (err) {

    res.status(417)
      .send(`ERROR 417: EXPECTATION FAILED! > EXPECT LESS! `);

  }

})
















router.get("/", async (req, res) => {

  try {


    // task 07) meals that have a price < maxPrice; data type: Number; path example	/api/meals?maxPrice=90
    if ('maxPrice' in req.query) {
      const maxPrice = parseInt(req.query.maxPrice);
      const mealsWithMaxPrice = meals
        .filter((aMeal) => aMeal.price <= maxPrice)

      if (isNaN(maxPrice)) {
        res.status(400)
          .send(`ERROR 400: Not a Number > ENTER A NUMBER!`);
        return
      }
      res.status(200)
        .send(mealsWithMaxPrice)
    }


    // task 08) meals that partially match a title. Rød grød med will match the meal with the title Rød grød med fløde; 
    //          data type: String; path example: /api/meals?title=Indian%20platter 
    if ('title' in req.query) {
      const titleInputParam = req.query.title.toLowerCase();
      const titleMatchingMeals = meals
        .filter((aMeal) => aMeal.title
          .toLowerCase()
          .includes(titleInputParam));
      res.status(200)
        .send(titleMatchingMeals);
      return
    }
    // I tried 666mln times to respond with status(400) and send(`ERROR 400: NOT A VALID TITLE > TRY STH ELSE!`); 
    // and NOTHING WORKED ---> HELP!!!


    // task 09) meals that has been created after the date; data type: Date; path example: /api/meals?createdAfter=2019-04-05 
    if ('createdAfter' in req.query) {
      const dateInputParam = req.query.createdAfter;
      const meal_createdAfter_date = new Date(dateInputParam)
      if (!meal_createdAfter_date.getDate()) {
        res.status(400)
          .send('ERROR 400: NOT A VALID DATE TYPE > ENTER STH LIKE THIS: 2019-04-05 !')
        return
      }
      const mealsCreatedAfter_dateInputParam = meals
        .filter(aMeal => new Date(aMeal.createdAt) > new Date(dateInputParam))
      res.status(200)
        .send(mealsCreatedAfter_dateInputParam);
    }


    // task 10) limit	: : only specific number of meals; data type: Number; path example:	/api/meals?limit=4 
    if ('limit' in req.query) {
      const limitInputParam = req.query.limit;
      if (isNaN(limitInputParam)) {
        res.status(400)
          .send(`ERROR 400: Not a Number > ENTER A NUMBER!`);
        return
      }
      const limitedNumberOfMeals = meals
        // .splice(0, limitInputParam) // to alter the old array 
        .slice(0, limitInputParam)     // to create a new array 
      res.status(200)
        .send(limitedNumberOfMeals);
    }


    // task 02) all meals ---> HAS TO BE at the end!!!
    else {
      res.status(200)
        .send(meals);
    }

    // // instead of
    // router.get("/", async (req, res) => {
    //   res.status(200)
    //     .send(meals);
    // });


  }

  catch (err) {

    res.status(417)
      .send(`ERROR 417: EXPECTATION FAILED! > EXPECT LESS! `);

  }

})





















module.exports = router;
