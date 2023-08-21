const express=require('express')
const router=express.Router();
const clientsController=require('../controller/client_controller');
router.get('/getClients',clientsController.getClient);
router.post('/createClient',clientsController.createClient);
router.delete('/delClient/:id',clientsController.deleteClient);
module.exports=router