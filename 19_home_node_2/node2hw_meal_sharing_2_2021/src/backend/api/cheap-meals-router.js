const express = require("express");
const router = express.Router();

const meals = require("./../data/meals.json");
const reviews = require("./../data/reviews.json");
// https://httpstatuses.com/

router.get("/", async (req, res) => {

    try {

        const mealsWithRevs_v2 = meals
            .map((aMeal) => {
                aMeal.reviews = reviews
                    .filter((aReview) =>
                        aReview.mealId === aMeal.id);
                return aMeal;
            })

        const cheapMealsFiltered = mealsWithRevs_v2
            .filter((aCheapMeal) => aCheapMeal.price < 66.6);

        res.status(200)
            .send(cheapMealsFiltered);
    }

    catch (err) {

        res.status(417)
            .send(`cheap_meals router here > ERROR 417 : EXPECTATION FAILED! > EXPECT LESS! `);

    }

})

module.exports = router;
