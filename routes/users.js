const express = require('express')
// mini app which is independent from the main app
// router work exactly the same as the app
const router =express.Router()


// NOTE : Express Run From Top To Bottom to check for Path
// benefit is that we can nested route a path in 
//a parent route
// route = /users so we just put / will do
// home page for users
router.get('/',(req,res)=>{
    res.send("User List")
})

//for creating a new form
router.get('/new',(req,res)=>{
     res.send("user new form ")
})

// creating user      
router.post("/",(req,res)=>{
    res.send("create user")
})


// get user information 
// NOTE : dynamic path always put at the bottom
// if put in front, all the path behind will all go into 
// this condition as it match this path
// whatever that's after / is the id
router.get("/:id",(req,res)=>{
    // params = id , whatever after : is the param name
    res.send(`Get USer with ID ${req.params.id}`)
})
module.exports = router