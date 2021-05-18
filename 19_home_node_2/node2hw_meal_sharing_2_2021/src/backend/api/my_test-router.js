const express = require("express");
const router = express.Router();


// imported data 

const meals =
    require("./../data/meals");
const reservations =
    require("./../data/reservations")
const reviews =
    require("./../data/reviews");


const meals_INITIAL =
    JSON.parse(JSON.stringify(meals));
const reservations_INITIAL =
    JSON.parse(JSON.stringify(reservations));
const reviews_INITIAL =
    JSON.parse(JSON.stringify(reviews));



router.get('/', async (reqest, response) => {

    try {

        const jsons = {
            "a) this is": "------- my_test for jsons I'm using for this app --------",
            json_1_MEALS: meals,
            json_2_REVIEWS: reviews,
            json_3_RESERVATIONS: reservations,
            "b) this is": "------- my_test for INITIAL jsons before they were transformed --------",
            json_1_MEALS_INITIAL: meals_INITIAL,
            json_2_REVIEWS_INITIAL: reviews_INITIAL,
            json_3_RESERVATIONS_INITIAL: reservations_INITIAL
        }

        response.json(jsons)
        // link to check:
        // http://localhost:3000/api/my_test     
    }

    catch (err) {

        res.status(417)
            .send(`ERROR 417 from my_test router: EXPECTATION FAILED! > EXPECT LESS! `);

    }


});


module.exports = router;