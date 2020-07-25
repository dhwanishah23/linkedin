const express = require('express');
const router = express.Router();

//@route GET api/posts/test
//@desc  test
//@access public 
router.get('/posts',(req,res)=> {
    res.json({msg:"posts API works"})
})

module.exports = router;