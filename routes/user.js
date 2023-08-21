const express=require('express')
const router=express.Router();
const userController=require('../controller/user_controller');
router.get('/getUser',userController.getUser);
router.post('/createUser',userController.createUser);
router.delete('/deleteUser/:id',userController.deleteUser);
module.exports=router
