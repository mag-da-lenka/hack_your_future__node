const express = require("express");
const router = express.Router();

// data source: 
const movies = require("../data/movies.json");





// PATH PARAMS (/:year)
// /api/movies/year > return all movies from the specified year 
// /api/movies/2003 > 2003 is a STRING so convert it to number!!! 

router.get("/:year", async (request, response) => {

  try {

    const requestedParam = Number(request.params.year)

    if (movies.some((movie) => movie.year === requestedParam)) {
      response
        .status(200)
        .send(
          {
            data: movies.filter(
              (movie) => movie.year === Number(request.params.year)
            ),
          }
          // //or 
          // movies.filter(
          //   (movie) => movie.year === Number(request.params.year)
          // ),
        );
    }

    else {
      response
        .status(404)
        .send(`/movies router here! ( /:year) <br/> 
               Movies from : :  year ${requestedParam} : :  NOT FOUND! 
               Try a different year and make sure it is a NUMBER!`);
    }

  }

  catch (err) {
    response
      .status(500)
      .send(`/movies router here! ( /:year )  
            SERVER ERROR 500 : no data`);
  }

});




// QUERY PARAMS (?)
// /api/movies? > all movies with year between beginYear and endYear
// /api/movies? > all movies with year between beginYear and endYear that are also of rating minRating or better 
// do some error handling for cases where beginYear, endYear or minRating are not specified 

router.get("/", async (request, response) => {

  // supported query params:  
  const supportedParams = ['beginYear', 'endYear', 'minRating'];
  // incoming queries: 
  const incomingQuery = Object.keys(request.query)
  // validation check:
  const validatedQueryParam = (anIncomingQueryParam) =>
    supportedParams.includes(anIncomingQueryParam)

  let beginYear = parseInt(request.query.beginYear);
  let endYear = parseInt(request.query.endYear);
  let minRating = parseFloat(request.query.minRating);

  // -----> if anIncomingQueryParam is NOT supported >> kill it now: 
  if (!incomingQuery.every(validatedQueryParam)) {
    response.status(400)
      .send(`movies router here (/?err=...) <br/> 
            ERROR 404: You've searched for: &nbsp; ${incomingQuery} <br/> 
            QUERY/QUERIES NOT VALID!`)
    return;
  }

  try {             // -----> if an IncomingQuery input IS supported: 

    if (('beginYear' && 'endYear' && 'minRating') in request.query) {
      const movies_fromYear_toYear_minRating =
      {
        data: movies.filter((aMovie) =>
          aMovie.year >= beginYear && aMovie.year <= endYear &&
          aMovie.rating >= minRating)
      }
      response
        .status(200)
        .send({ data: movies_fromYear_toYear_minRating });
    }

    if (('beginYear' && 'endYear') in request.query) {
      const movies_fromYear_toYear =
      {
        data: movies
          .filter((aMovie) =>
            aMovie.year >= beginYear && aMovie.year <= endYear)
      }
      response
        .status(200)
        .send(movies_fromYear_toYear);
    }

    else // SHOW ALL MOVIES:
      response
        .status(200)
        .send({ data: [movies] });
  }

  catch (err) { // IN CASE OF UNRESPONSIVE SERVER: 
    response
      .status(500)
      .send(`/movies router here! ( ? )  
          CATCH : : MOVIES SERVER ERROR 500`);
  }

});

module.exports = router;