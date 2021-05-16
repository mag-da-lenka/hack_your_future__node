const express = require("express");
const router = express.Router();


const meals = require("./../data/meals.json");
const reviews = require("./../data/reviews.json");
// https://httpstatuses.com/





// PATH parameters /:id

router.get("/:id", async (req, res) => {

  const an_ID = Number(req.params.id);

  try {


    // bind meals with reviews: 
    const mealsWithRevs = meals
      .map((aMeal) => {
        aMeal.reviews = reviews
          .filter((aReview) =>
            aReview.mealId === aMeal.id);
        return aMeal;
      })


    if (an_ID <= meals.length) {
      const aMealWithId = mealsWithRevs // from meals with reviews 
        .find((aReview) =>
          aReview.id === an_ID)
      res.status(200)
        .json(aMealWithId);
    }

    if (isNaN(an_ID)) {
      res.status(400)
        .send(`meals router here (/:id) <br/>
               ERROR 400 (/:id): Not a Number > ENTER A NUMBER!`);
    }

    if (an_ID !== meals.length) {
      res.status(404)
        .send(`meals router here (/:id) <br/> 
               ERROR 404 (/:id): ID no: ${an_ID} > NOT FOUND!`);
    }

    else {
      res.status(418)
        .send(`meals router here (/:id) <br/> 
               ERROR 418 (/:id): I'm a teapot > fill me with coffee.`);
    }

  }

  catch (err) {

    res.status(417)
      .send(`catch > meals router here (/:id) <br/> 
             ERROR 417 (/:id) : EXPECTATION FAILED! > EXPECT LESS! `);

  }

})







// (/) and QUERY parameters

router.get("/", async (req, res) => {


  try {


    // meals to be shown with reviews > "join": 
    const mealsWithRevs = meals
      .map((aMeal) => {
        aMeal.reviews = reviews
          .filter((aReview) =>
            aReview.mealId === aMeal.id);
        return aMeal;
      })


    // supported query params:  
    const supportedParams = ['maxPrice', 'title', 'createdAfter', 'limit'];
    // incoming queries: 
    const incomingQuery = Object.keys(req.query)
    // validation check:
    const validatedQueryParam = (anIncomingQueryParam) =>
      supportedParams.includes(anIncomingQueryParam)


    // -----> if anIncomingQueryParam is NOT supported >> kill it now: 
    if (!incomingQuery.every(validatedQueryParam)) {
      res.status(400)
        .send(`meals router here (/?err=...) <br/> 
               ERROR 404: You've searched for >> ${incomingQuery} >> QUERY NOT VALID!`)
      return;
    }


    // -----> else if anIncomingQueryParam IS supported:   



    // ***** maxPrice *****  path example:	/api/meals?maxPrice=90
    // meals that have a price < maxPrice; data type: Number; 
    if ('maxPrice' in req.query) {
      const maxPrice = Number(parseInt(req.query.maxPrice));
      const mealsWithMaxPrice = mealsWithRevs // from meals with reviews 
        .filter((aMeal) => aMeal.price <= maxPrice)
      if (isNaN(maxPrice)) {
        res.status(400)
          .send(`meals router here (/?maxPrice=NaN) <br/>
                 ERROR 400: Not a Number > ENTER A NUMBER to search for maxPrice!`);
        return
      }
      res.status(200)
        .send(mealsWithMaxPrice)
    }



    // ***** title (partial match) ***** path example: /api/meals?title=Indian%20platter
    // Rød grød med will match the meal with the title Rød grød med fløde; data type: String; 
    if ('title' in req.query) {
      const titleInputParam = req.query.title.toLowerCase();
      const titleMatchingMeals = meals
        .filter((aMeal) => aMeal.title
          .toLowerCase()
          .includes(titleInputParam));
      // //  how do I formulate a condition to respond the way below?  
      // res.status(404)
      //   .send(`meals router here (/?title=NO_MATCH) <br/>
      //        ERROR 404: TITLE NOT FOUND > try a different TITLE!`)
      res.status(200)
        .send(titleMatchingMeals);
    }



    // ***** createdAfter ***** path example: /api/meals?createdAfter=2019-04-05
    // meals that has been created after the date; data type: Date;  
    if ('createdAfter' in req.query) {
      const dateInputParam = req.query.createdAfter;
      const meal_createdAfter_date = new Date(dateInputParam)
      if (!meal_createdAfter_date.getDate()) {
        res.status(400)
          .send(`meals router here (/?createdAfter=NOT_VALID) <br/>
                 ERROR 400: NOT A VALID DATE TYPE > ENTER STH LIKE THIS: 2019-04-05 !`);
        return
      }
      const mealsCreatedAfter_dateInputParam = meals
        .filter((aMeal) => new Date(aMeal.createdAt) > new Date(dateInputParam))
      res.status(200)
        .send(mealsCreatedAfter_dateInputParam);
    }



    // ***** limit ***** path example:	/api/meals?limit=4 
    // limit	: : only specific number of meals; data type: Number; 
    if ('limit' in req.query) {
      const limitInputParam = req.query.limit;
      if (isNaN(limitInputParam)) {
        res.status(400)
          .send(`meals router here (/?limit=NaN) <br/>
                 ERROR 400: Not a Number > ENTER A NUMBER!`);
        return
      }
      const limitedNumberOfMeals = meals
        // .splice(0, limitInputParam) // to alter the old array 
        .slice(0, limitInputParam)     // to create a new array 
      res.status(200)
        .send(limitedNumberOfMeals);
    }




    // ELSE > all meals 
    else {  // with REVIEWS
      res.status(200)
        .send(mealsWithRevs);
    }


    // WITHOUT REVIEW is possible, but that would require: 
    // 1. disconnecting of reviews from meals.json
    // 2. removing reviews.json from the required data)  
    // 3. changing the mealsWithRevs into meals_copy 




  }




  catch (err) {

    res.status(417)
      .send(` catch: meals router here (/) <br/> 
              ERROR 417: EXPECTATION FAILED! > EXPECT LESS! `);

  }

});




module.exports = router;
