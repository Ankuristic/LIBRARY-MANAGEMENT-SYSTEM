 const express = require('express');
 const router=express.Router();
 const bookController=require('../controllers/bookContreoller');


// create, find, update,delete
router.get('/', bookController.view);
// Router 
router.get('',(req,res)=> {
    res.sender('home');
})
 module.exports=router;