const express=require('express')
const router=express.Router();
const groupsController=require('../controller/group_controller');
router.post('/createGroup',groupsController.createGroup);
module.exports=router