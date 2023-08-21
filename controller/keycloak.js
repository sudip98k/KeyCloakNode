import KcAdminClient from 'keycloak-admin';
const Client = new KcAdminClient({
    baseUrl: 'http://localhost:8080',
    realmName: 'IVC'
});

function authenticate() {
    return Client.auth({
        username:"admin",
        password:"Admin",
        grantType:"password",
        clientId:"dev"
    });
}

module.exports = { authenticate,Client }