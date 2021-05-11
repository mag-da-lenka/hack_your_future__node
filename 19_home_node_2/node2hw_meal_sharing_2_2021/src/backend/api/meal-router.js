const express = require("express");
const router = express.Router();

const meals = require("../data/meals.json");
const reviews = require("../data/reviews.json");
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

        aRandomMealNumber = Math.floor(mealsWithRevs_v2.length * Math.random())
        const aRandomMeal = mealsWithRevs_v2[aRandomMealNumber];
        // it declared outside --> it won't be refreshing each time, if inside ---> it will

        res.status(200)
            .send(aRandomMeal);
    }

    catch (err) {

        res.status(417)
            .send(`ERROR 417: EXPECTATION FAILED! > EXPECT LESS! `);

    }

})

module.exports = router;
