const express = require("express")
const router = express.Router()


const users = require("../MOCK_DATA.json");
console.log(`users: \n`, users)


router.get("/:id", (req, res) => {

    const id = parseInt(req.params.id)
    console.log(`id before: `, id, typeof id)

    if (isNaN(id)) {
        res.status(404).json({ error: "User IDs must be integers" })
        return
    }

    console.log("id after:", id, typeof id)

    const user = users.find(user => user.id === id)

    if (user) {
        res.json(user)
    } else {
        res.status(404)
            .json({ error: "User was not found" })
    }

    // LINKS TO PLAY WITH - THEY HAVE NO RIGHT TO WORK :>
    // http://localhost:3000/1
    // http://localhost:3000/2
    // http://localhost:3000/3

})


router.get("/", (req, res) => {

    let filteredUsers = users

    // console.log(`filteredUsers: \n`, filteredUsers)

    // if there is a min ID then filter by it  
    if ('minID' in req.query) {
        const minID = parseInt(req.query.minID)

        if (isNaN(minID)) {
            res
                .status(400)
                .json({ error: "minID must be an integer" })
            return
        }

        filteredUsers = filteredUsers
            .filter(user => user.id >= minID)

    }

    // if there is a max ID then filter by it 
    if ('maxID' in req.query) {
        const maxID = parseInt(req.query.maxID)

        if (isNaN(maxID)) {
            res
                .status(400)
                .json({ error: "maxID must be an integer" })
            return
        }

        filteredUsers = filteredUsers
            .filter(user => user.id <= maxID)
    }





    // filter by first letter in first name (how to filter over multiple letters?)

    if ('letter' in req.query) {

        const letters = [...req.query.letter]
            .map(letter => letter.toLowerCase())

        filteredUsers = filteredUsers.filter(user => {
            return letters
                .includes(user.first_name.charAt(0)
                    .toLowerCase())
        })

    }


    res.json({ data: filteredUsers })


    // LINKS TO PLAY WITH 
    // if http://localhost:3000/users?minID=2
    // if http://localhost:3000/users?maxID=2
    // if http://localhost:3000/users?minID=heyblablabla
    // if http://localhost:3000/users?maxID=heyblablabla


    // http://localhost:3000/users?letter=m // this will work
    // http://localhost:3000/users?letter=z // or any other than m will show []
})











module.exports = router