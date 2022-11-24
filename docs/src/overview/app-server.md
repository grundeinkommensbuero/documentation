# App server

We have hosted our app server using docker on digital ocean. The whole thing is a bit complex, so just reach out to Vali, if needed. 
Login data using ssh can be found in 1Password.
One thing, which needs to be done is to renew the ssl certificate every few months. 

## Renew ssl certificate

Before running certbot you need to stop the server by stopping the docker instance. Just list all instances using `docker ps` and execute `docker stop` {id} 
with the corresponding id of (only) the server. Then execute certbot renew. The certificate files are saved in etc/letsencrypt.

Along the lines of [this doc](https://gitlab.com/kybernetik/sammel-app/-/wikis/TLS-Zertifikt-austauschen) you also need to create a key a store. 
`openssl pkcs12 -export -in fullchain.pem -inkey privkey.pem -name server -out sammel-app.prod-keystore.p12`

As password set the one that is already defined in 1Password. You need to save the key store file inside ~/server/server-work-dir/secrets. 
Permissions of the file need to be 755 and belong to user 1000:1000.
