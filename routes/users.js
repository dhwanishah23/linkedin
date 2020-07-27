const express = require('express');
const router = express.Router();
const user = require('../models/User');
const {check,validationResult} = require("express-validator");



//@route GET api/users/test
//@desc  test
//@access public 
/*router.get('/users',(req,res)=> {
    res.json({msg:"User API works"})
})*/

router.post('/', [
    check('name',"Name is required fiels").not().isEmpty(),
        check('email',"email is mandatory").isEmail(),
       check("password","password is required and minimum length should be 6 characters").isLength({min : 6 })
],  async (req,res) => {
    
    const errors = validationResult(req);
   if(!errors.isEmpty()){
       return res.status(400).json({errors :errors.array()})
   }
   const { name,email,password} = req.body;
   console.log(req.body);
    try {
       
    } catch (error){
        console.log(error.message);
        res.status(500).send('SERVER ERROR');

    }

    // get user avatar
    //encrypt password
    //save it in DB
    console.log(req.body);
    res.send ({msg: "users is running successfully"});
} )

module.exports = router;