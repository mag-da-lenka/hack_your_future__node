const express = require("express");
const app = express();


const getHead = require("./head");  // for styling purposes :>

app.get("/", (request, response) => {
    response.send(` 
    ${getHead(': : node 2 : : class ex : : users / 2021 : :')} 
    <body>
        <h1>: : node 2 : : class ex : : <br/> : : users / 2021 : :</h1> <br/> 
        <a href="http://localhost:3000/">                           http://localhost:3000/                         </a>   <br/>
        <a href="http://localhost:3000/list">                       http://localhost:3000/list                     </a>   <br/>
        <a href="http://localhost:3000/users">                      http://localhost:3000/users                    </a>   <br/>
        <a href="http://localhost:3000/users?minID=2">              http://localhost:3000/users?minID=2            </a>   <br/>
        <a href="http://localhost:3000/users?minID=heyblablabla">   http://localhost:3000/users?minID=heyblablabla </a>   <br/>
        <a href="http://localhost:3000/users?maxID=2">              http://localhost:3000/users?maxID=2            </a>   <br/>
        <a href="http://localhost:3000/users?maxID=heyblablabla">   http://localhost:3000/users?maxID=heyblablabla </a>   <br/> <br/>
        <h2>: :  the below ones have no right to work : :</h2>  <br/>  
        <a href="http://localhost:3000/1">                          http://localhost:3000/1                        </a>   <br/> 
        <a href="http://localhost:3000/2">                          http://localhost:3000/2                        </a>   <br/> 
        <a href="http://localhost:3000/3">                          http://localhost:3000/3                        </a>   <br/> <br/>
        <h2>: :  more middleware : :</h2>  <br/>
        <a href="http://localhost:3000/users?x-hyf-key=sekret">     http://localhost:3000/users?x-hyf-key=sekret   </a>   <br/> <br/>
        <h2>: :  m vs. other letters : :</h2>  <br/>  
        <a href="http://localhost:3000/users?letter=m">             http://localhost:3000/users?letter=m           </a>   <br/> 
        <a href="http://localhost:3000/users?letter=y">             http://localhost:3000/users?letter=y           </a>   <br/> 
    </body>
  `);
});


app.get("/list", (req, res) => {
    // asking for a JSON explicitly                // Postman's results:
    res.json({ hello: "node world" })              // application/json; charset=utf-8 
    // vs.
    res.send(`Hello, I'm a string from res.send`)  // text/html; charset=utf-8
    // vs.
    res.json(`Hello, I'm a string from res.json`)  // application/json; charset=utf-8 !!! 
    // vs. 
    res.status(404)
        .json({ error: "No squirrels found!" })    // application/json; charset=utf-8 
}) // BTW if all above lines stay uncommented, only the 1st one is 'active'



const usersRouter = require("./routers/users")


// // this is suuuch a blocker!!! Jeez 
// // if you want to experiment > keep it commented out
// app.use((req, res, next) => {

//     console.log(`HEADERS: `, req.headers)
//     // try the below with Postman
//     // http://localhost:3000/users?x-hyf-key=sekret
//     console.log(`x-hyf-key: `, req.headers["x-hyf-key"])

//     if (req.headers["x-hyf-key"] === 'sekret') {
//         next()
//     } else {
//         res.status(403)
//             .json({ error: "x-hyf-key header contains invalid value" })
//     }

//     next()
// })


// so this will be pretty much blocked
app.use("/users", usersRouter) // MIDDLEWARE inside :) 




// USERS MOVED TO ROUTERS/USERS >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// const users = require("./MOCK_DATA.json");
// console.log(`users: \n`, users) 

// app.get("/users/:id", (req, res) => {
//     const id = parseInt(req.params.id)
//     console.log(`id before: `, id, typeof id)
//     if (isNaN(id)) {
//         res.status(404).json({ error: "User IDs must be integers" })
//         return
//     }
//     console.log("id after:", id, typeof id)
//     const user = users.find(user => user.id === id)
//     if (user) {
//         res.json(user)
//     } else {
//         res.status(404)
//             .json({ error: "User was not found" })
//     }
//     // LINKS TO PLAY WITH - THEY HAVE NO RIGHT TO WORK :>
//     // http://localhost:3000/1
//     // http://localhost:3000/2
//     // http://localhost:3000/3
// })


// app.get("/users", (req, res) => {
//     let filteredUsers = users
//     // console.log(`filteredUsers: \n`, filteredUsers)
//     // if there is a min ID then filter by it  
//     if ('minID' in req.query) {
//         const minID = parseInt(req.query.minID)
//         if (isNaN(minID)) {
//             res
//                 .status(400)
//                 .json({ error: "minID must be an integer" })
//             return
//         }
//         filteredUsers = filteredUsers
//             .filter(user => user.id >= minID)
//     }
//     // if there is a max ID then filter by it 
//     if ('maxID' in req.query) {
//         const maxID = parseInt(req.query.maxID)
//         if (isNaN(maxID)) {
//             res
//                 .status(400)
//                 .json({ error: "maxID must be an integer" })
//             return
//         }
//         filteredUsers = filteredUsers
//             .filter(user => user.id <= maxID)
//     }
//     res.json({ data: filteredUsers })
//     // LINKS TO PLAY WITH 
//     // if http://localhost:3000/users?minID=2
//     // if http://localhost:3000/users?maxID=2
//     // if http://localhost:3000/users?minID=heyblablabla
//     // if http://localhost:3000/users?maxID=heyblablabla
// })

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>



app.listen(3000, () => {
    console.log("Hello Node World 2! USERS app listening on port 3000!");
});



// module.exports = app; 