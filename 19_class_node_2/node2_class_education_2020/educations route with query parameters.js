const express = require("express")
const app = express()

app.get("/", (req, res) => {
    res.send('Root')
})

const educations = [
    {
        name: "Elementary School",
        university: false,
    },
    {
        name: "DTU",
        university: true
    }
]

app.get("/educations", (req, res) => {
    const filteredEducations = educations.filter(education => {
        if (req.query["is-university"]) {
            return education.university === (req.query["is-university"] === "true")
        } else {
            return true
        }
    })
    res.send(`
        <body>
            <ul>
                ${filteredEducations.map(education => `<li>${education.name}</li>`).join('')}
            </ul>
        </body>
    `)
})

app.listen(3000)