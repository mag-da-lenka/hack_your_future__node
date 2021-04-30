//  Respond with the json for all reservations

const express = require('express');
const app = express();

// data source: 
const jsonReservations = require(__dirname + '/../data/reservations.json');

app.get('/reservations', (request, response) => {

    response.json(jsonReservations);

});

module.exports = app;