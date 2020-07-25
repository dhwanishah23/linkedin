const express = require('express');
const router = express.Router();

//@route GET api/profile/test
//@desc  test
//@access public 
router.get('/profile',(req,res)=> {
    res.json({msg:"profile API works"})
})

module.exports = router;