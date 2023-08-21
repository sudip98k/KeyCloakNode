const express=require('express');
const router=express.Router();
console.log("router loaded");

router.use('/users',require('./user'));
router.use('/roles',require('./roles'));
 router.use('/clients',require('./client'));
 router.use('/groups',require('./group'));

module.exports=router
