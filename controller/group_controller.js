const { authenticate, Client } = require('./keycloak')
async function createGroup(req, res) {
    const group = req.body.groupName
    try {

        await authenticate().then(async(resp) => {
            const user = await Client.groups.create({
                realm: "IVC",
                name: group
            })
            if(user){
                return res.status(200).send({message:"Group has formed"})
            }
        }).catch((err) => {
            console.log('Error:', err);
            return res.status(404).send({ message: "Groups can not be formed" })
        })

    } catch (error) {
        console.log("Error:", error);
        return res.status(404).send({ message: "Group can not created" })
    }


}

module.exports = {
    createGroup
}