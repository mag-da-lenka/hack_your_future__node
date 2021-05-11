const express = require("express");
const router = express.Router();


// imported data 

const meals_ORIGINAL =
    require("./../data/meals");
const reservations_ORIGINAL =
    require("./../data/reservations")
const reviews_ORIGINAL =
    require("./../data/reviews");


const meals =
    JSON.parse(JSON.stringify(meals_ORIGINAL));
const reservations =
    JSON.parse(JSON.stringify(reservations_ORIGINAL));
const reviews =
    JSON.parse(JSON.stringify(reviews_ORIGINAL));



router.get('/', (reqest, response) => {

    const jsons = {
        "a) this is": "------- my_test for ORIGINAL jsons--------",
        json_1_MEALS_ORIGINAL: meals_ORIGINAL,
        json_2_REVIEWS_ORIGINAL: reviews_ORIGINAL,
        json_3_RESERVATIONS_ORIGINAL: reservations_ORIGINAL,
        "b) this is": "------- my_test for NEW jsons aka jsons :> --------",
        json_1_MEALS: meals,
        json_2_REVIEWS: reviews,
        json_3_RESERVATIONS: reservations
    }

    response.send(jsons)
    // link to check:
    // http://localhost:3000/api/my_test 

});


module.exports = router;