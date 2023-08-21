const express = require('express')
const PORT = 3000;
const app = express();


// const bodyParser=require('body-parser')

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: false }));
// app.use(express.bodyParser())




/*async function getUser() {
    try {
        await authenticate('admin','Admin','password','dev').then(async(res)=>{
            const user=await Client.users.find();
            console.log(user);
            console.log(user[1].username);
        }).catch((err)=>{
            
        })
    
    } catch (error) {
        console.log('Error fetching iuser:',error)
    }
}*/

/*async function CreateUser(req,res)
{
    try {
        
        const Payload  = req.body;
        await authenticate('admin','Admin','password','dev').then(async(res)=>{

            await Client.users.create(Payload)

        }).catch((err)=>{
            
        })

    } catch (error) {
        return res.status(400).json({message:error.message});
    }
}*/

//getUser();



app.use('/',require('./routes'))

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
