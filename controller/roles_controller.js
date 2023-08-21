const {authenticate,Client}=require('./keycloak')

async function assingRoles(req,res){
    //console.log(req.body);

    const {userId,roleName,clientId}=req.body;
    try {
            await authenticate().then(async(resp)=>{
                const user=await Client.users.findOne({id:userId});
                const client=await Client.clients.findOne({id:clientId});
                //const role=await Client.clients.findRole(clientId,roleName);

                const role=await Client.clients.findRole({
                    id:clientId,
                    roleName:roleName
                })

                // console.log("User:",user)
                // console.log("Client:",client)
                // console.log("Role:",role);



                if (!user || !client || !role) {
                    console.log('User, client, or role not found');
                    return res.status(400).send({ message: 'User, client, or role not found' });
                }


                // console.log("UserId:",user.id);
                // console.log("ClieId:",client.id);
                // console.log("RoleId:",role.id);

                 await Client.users.addClientRoleMappings({
                    id:user.id,
                    clientUniqueId: client.id,
                    roles: [role.id]
                });
                return res.status(200).send({ message: 'Role assigned successfully' });
            }).catch((err)=>{
                console.log(err);
                return res.status(500).send({message:"Failed to assing the roles"})
            })
        
    } catch (error) {
        return res.status(500).send({message:"Failed to assing roles"})
    }
}

module.exports={
    assingRoles
}