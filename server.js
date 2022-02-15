const express = require('express')
const app =express()

app.set('view engine','ejs')
// create route
// route path follow by function, request and respond and next function
// but normally we just need request and respond 
app.get('/',(req,res)=>{
    // request at local console when ppl get to the link
    console.log('here') 
    // 1.responds that we send to the website to the user
    // res.send('hi')
    // 2. send status with messages
    // res.status(500).send("hi2")

    // 3. send json file , a successful 200 status
    // res.json({message:"error"})

    // 4. let the user to download the file
    // res.download("server.js")

    // 5. run the html file
    // need a view engine in order to make it run
    // using ejs view engine
    // second parameter for sending message from server
    // to the user normally is an object
    // u can access this info in index.ejs using <%
    res.render("index",{text:'world'})
})

const userRouter = require('./routes/users')

// app.use is for linking a route to a path
// app.use() used to Mounts the middleware function or 
//mount to a specified path,the middleware function is
// executed when the base path matches.
app.use("/users",userRouter)
app.listen(3000)