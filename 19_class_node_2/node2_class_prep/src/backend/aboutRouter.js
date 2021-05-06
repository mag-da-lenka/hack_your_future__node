const express = require("express");
// const app = express();

const aboutRouter = express.Router();

aboutRouter.get("/", (request, response) => {
    response.send("this is /about")
})

aboutRouter.get("/squirrel1", (request, response) => {
    response.send("this is /about/squirrel1")
})

aboutRouter.get("/squirrel2", (request, response) => {
    response.send("this is /about/squirrel2")
})



aboutRouter.get("/employers", (request, response) => {
    console.log(request.query);
    if (request.query.skills === 'tech') {
        response.send("this is about/employers?skills=tech  >> Benjamin, Brian")
    }
    response.send("this is /about/employers  >> NO EMPLOYERS")
})

aboutRouter.get("/employers/:name", (request, response) => {
    console.log(request.params)
    if (request.params.name === 'zdzisiek') {
        response.send("this is /about/employers/:name  >> Benjamin, Brian")
    }
    response.send("this is /about/employers  >> NO EMPLOYERS")
})

module.exports = aboutRouter;