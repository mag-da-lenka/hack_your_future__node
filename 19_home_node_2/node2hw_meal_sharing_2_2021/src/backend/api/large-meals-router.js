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

            const largeMealsFiltered = mealsWithRevs_v2
            .filter((aLargeMeal) =>
              aLargeMeal.maxNumberOfGuests > 15);

        res.status(200)
            .send(largeMealsFiltered);
    }

    catch (err) {

        res.status(417)
            .send(`large_meals router here > ERROR 417 : EXPECTATION FAILED! > EXPECT LESS! `);

    }


})

module.exports = router;
