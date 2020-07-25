const express = require('express');
const router = express.Router();

//@route GET api/users/test
//@desc  test
//@access public 
router.get('/users',(req,res)=> {
    res.json({msg:"User API works"})
})

module.exports = router;