const {authenticate,Client}=require('./keycloak')
async function getClient(req,res){
    try {
            await authenticate().then(async(resp)=>{
                const client=await Client.clients.find();
                //console.log(client);
                return res.status(200).send(client)
            }).catch((error)=>{
                console.log(error)
                return res.status(404).send({message:"Can not get the clients"})
            }) 
    } catch (error) {
        console.log("Error in getClient function",error)
        return res.status(404).send({message:"Can not get the clients"})
    }
}

async function createClient(req,res){
    const Payload=req.body;
    await authenticate().then(async(resp)=>{
        Client.clients.create(Payload);
        return res.status(200).send({message:"clients is being created"})
    }).catch((err)=>{
        console.log('Error:',err);
        return res.status(404).send({message:"Can not get the clients"})
    })
}

async function deleteClient(req,res){
    const id=req.params.id;
    try {
        await authenticate().then(async(resp)=>{
           // const user=await Client.clients.delClient(id);
           const user=await Client.clients.del({
            id:id
           })
            //console.log(user);
            return res.status(200).send({message:"Client is being deleted"})
        }).catch((err)=>{
            console.log('Error:',err);
            return res.status(404).send({message:"Can not delete the client"});
        })
    } catch (error) {
        console.log('Erro:',error);
        return res.status(404).send({message:"Can not delete the client"});
    }
}

module.exports={
    getClient,
    createClient,
    deleteClient
}