const express = require('express')
const dotenv = require('dotenv')
dotenv.config()

const path = require("path");

const app = express()
app.use(express.static('src/frontend/'))
app.use(express.json())

// Ensures that the client router works on reload aswell.
// Sends all requests back to index.html where the routing lib takes over
app.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname, "./src/frontend/index.html"), function(err) {
    if (err) {
      res.status(500).send(err);
    }
  });
});

app.listen(process.env.PORT, () => {
  console.log(`App listens on ${process.env.PORT}`)
})
