const express = require("express")
const app = express()

const messageFromWebJs = "WEB.js > Hello Node World!"
console.log(`messageFromWebJs: `, messageFromWebJs)


app.get("/", (req, res) => {
    res.send(`
        <html>
            <body>
                <h1> WEB.js > h1 > 
                Hello. I'm the WEB page!</h1>
            </body>
        </html>
    `)
})



module.exports = app



app.listen(3000, () => {
    console.log("\nserver on web is ready, yay")
})