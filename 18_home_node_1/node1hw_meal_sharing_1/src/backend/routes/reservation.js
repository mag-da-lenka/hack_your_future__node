// Respond with the json for a random reservation

const express = require('express');
const app = express();

// data source 
const jsonReservations = require(__dirname + '/../data/reservations.json');


app.get('/reservation', (request, response) => {

   const aRandomReservation = jsonReservations[Math.floor(jsonReservations.length * Math.random() )];
   // it declared outside --> it won't be refreshing each time, if inside ---> it will

   response.send(aRandomReservation)

});

module.exports = app;
