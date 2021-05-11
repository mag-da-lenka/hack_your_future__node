const express = require("express");
const router = express.Router();

const reservations = require("./../data/reservations.json");
// https://httpstatuses.com/


// task 03) reservations with a corresponding /:id

router.get("/:id", async (req, res) => {

    const an_ID = parseInt(req.params.id);

    try {

        if (an_ID <= reservations.length) {
            const aReservationWithId = reservations
                .find(aReview =>
                    aReview.id === an_ID)
            res.status(200)
                .send(aReservationWithId);
        }

        else if (isNaN(an_ID)) {
            res.status(400)
                .send(`ERROR 400: Not a Number > ENTER A NUMBER!`);
        }

        else if (an_ID !== reservations.length) {
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

// task 04) all reservations
router.get("/", async (req, res) => {
    res.status(200)
        .send(reservations);
});

module.exports = router;