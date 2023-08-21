const {authenticate,Client}=require('./keycloak')

async function getUser(req,res){
    try {
            await authenticate().then(async(resp)=>{
                const user=await Client.users.find();
                return res.status(200).send(user);
            }).catch((error)=>{
                console.log(error);
                return res.status(404).send({message:"Can not get the users"})
            })
           
    } catch (error) {
        console.log('Error in getUser function',error);
    }
}
async function createUser(req,res){
    try {
        const Payload=req.body;
        await authenticate().then(async(resp)=>{
           Client.users.create(Payload);
            return res.status(200).send({message:"User is created successfully"})
        }).catch((err)=>{
            console.log(err);
            return res.status(404).send({message:"User is not create successfully"})
        })
    } catch (error) {
        console.log('Error',error.message);
        return res.status(404).send({message:"Can not create the users"})
    }
}


async function deleteUser(req,res){
    try {
        let id=req.params.id;
        console.log(id);
        await authenticate().then(async(resp)=>{
           //const user= await Client.users.del(id)
           const user=await Client.users.del({
            id:id
           })
            return res.status(200).send({user,message:"User has been deleted"});
        }).catch((err)=>{
            console.log(err);
            return res.status(404).send({message:"User is not deleted successfully"})
        })

         } catch (error) {
        console.log('Error',error);
        return res.status(200).send({message:"Can not delete the user"});
    }
}

module.exports ={
    getUser,
    createUser,
    deleteUser
}