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
    console.log("hi2")
    res.send("create user")
})


// get user information 
// NOTE : dynamic path always put at the bottom
// if put in front, all the path behind will all go into 
// this condition as it match this path
// whatever that's after / is the id

// router.get("/:id",(req,res)=>{
//     // params = id , whatever after : is the param name
//     res.send(`Get USer with ID ${req.params.id}`)
// })

// // update the user
// router.put("/:id",(req,res)=>{
//     // params = id , whatever after : is the param name
//     res.send(`update USer with ID ${req.params.id}`)
// })

// // delete the user
// router.delete("/:id",(req,res)=>{
//     // params = id , whatever after : is the param name
//     res.send(`delete USer with ID ${req.params.id}`)
// })


// converting above code to neater code
// since they share the same path we can use .route function

router.route("/:id").get((req,res)=>{
    // params = id , whatever after : is the param name
    console.log(req.user)
    res.send(`Get USer with ID ${req.params.id}`)
}).put((req,res)=>{
    // params = id , whatever after : is the param name
    res.send(`update USer with ID ${req.params.id}`)
}).delete((req,res)=>{
    // params = id , whatever after : is the param name
    res.send(`delete USer with ID ${req.params.id}`)
})

// .param() function is use to find a match parameter 
// it's a middleware function, will run this before the responds
// run it when user request, when finish run the responds

const users = [{name:"paul"},{name:"ting"}]
router.param("id",(req,res,next,id)=>{
    console.log(id) // run this before the responds
    // set a random variable to use "user" here
    // this req.user can be access at anywhere that
    // has the req object
    req.user = users[id]
    next()
})

// NOTE :  next key word normally use for middleware

module.exports = router