const express=require('express')
const router=express.Router();
const rolesController=require('../controller/roles_controller');
router.post('/assingRole',rolesController.assingRoles);
module.exports=router