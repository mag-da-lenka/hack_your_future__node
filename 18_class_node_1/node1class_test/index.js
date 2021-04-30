const express = require("express")
const app = express() 

const message = "Hello Node World!"
console.log(message) 

app.get("/", (req, res) => {
    res.send(`
        <html>
            <body>
                <h1>Hello. I'm the index page!</h1>
            </body>
        </html>
    `)
})

app.listen(3000, () => {
    console.log("server is ready, yay")
})