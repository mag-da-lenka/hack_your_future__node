const express = require("express");
const router = express.Router();

const reservations = require("../data/reservations.json");
// https://httpstatuses.com/

router.get("/", async (req, res) => {

    try {

        const aRandomReservationNumber = Math.floor(reservations.length * Math.random())
        const aRandomReservation = reservations[aRandomReservationNumber];
        // it declared outside --> it won't be refreshing each time, if inside ---> it will

        res.status(200)
            .send(aRandomReservation);
    }

    catch (err) {

        res.status(417)
            .send(`ERROR 417: EXPECTATION FAILED! > EXPECT LESS! `);

    }

})

module.exports = router;