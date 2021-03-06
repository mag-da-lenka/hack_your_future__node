const express = require("express");
const router = express.Router();

const reviews = require("./../data/reviews.json");
// https://httpstatuses.com/


// task 05) reviews with a corresponding /:id

router.get("/:id", async (req, res) => {

  const an_ID = parseInt(req.params.id);

  try {

    if (an_ID <= reviews.length) {
      const aReviewWithId = reviews
        .find(aReview =>
          aReview.id === an_ID)
      res.status(200)
        .send(aReviewWithId);
    }

    else if (isNaN(an_ID)) {
      res.status(400)
        .send(`reviews router here > ERROR 400: Not a Number > ENTER A NUMBER!`);
    }

    else if (an_ID !== reviews.length) {
      res.status(404)
        .send(`reviews router here > ERROR 404: ID ${an_ID} > NOT FOUND!`);
    }

    else {
      res.status(418)
        .send(`reviews router here > ERROR 418: I'm a teapot > fill me with coffee.`);
    }

  }

  catch (err) {

    res.status(417)
      .send(`reviewsss router here (/:id) > ERROR 417 : EXPECTATION FAILED! > EXPECT LESS! `);

  }

})

// task 06) all reviews
router.get("/", async (req, res) => {

  try {

    res.status(200)
      .send(reviews);

  }

  catch (err) {

    res.status(417)
      .send(`reviews router here ( / ) > ERROR 417 : EXPECTATION FAILED! > EXPECT LESS! `);

  }
});

module.exports = router;