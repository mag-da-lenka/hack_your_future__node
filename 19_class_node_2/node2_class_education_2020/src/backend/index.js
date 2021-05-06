const express = require("express")
const app = express()

// importing head function
const getHead = require("./head");

app.get("/", (req, res) => {
    res.send(`
    <body>
    ${getHead('NODE 2 class exercise : : middleware (2020)')} 
    <h1>NODE 2 class exercise : : middleware (2020) </h1><br/>
      <a href="http://localhost:3000/">                               http://localhost:3000/                            </a>   <br/> 
      <a href="http://localhost:3000/educations">                     http://localhost:3000/educations                  </a>   <br/>
      <a href="http://localhost:3000/educations?university=true">     http://localhost:3000/educations?university=true  </a>   <br/>
      <a href="http://localhost:3000/educations?university=false">    http://localhost:3000/educations?university=false </a>   <br/>
    </body>
    `)
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
console.log(educations)


app.get("/educations", (req, res) => {

    const filteredEducations = educations.filter((education) => {
        if (req.query["is-university"]) {
            return education.university === (req.query["is-university"] === "true")
        } else {
            return true
        }
    })

    res.send(`
        <body>
        ${getHead('NODE 2 class exercise : : middleware (2020)')}
            <ul>
                ${filteredEducations.map((education) =>
                    `<li>${education.name}</li>`).join('')}
            </ul>
        </body>
    `)

})

app.listen(3000)