# Directus

## Setup a new Directus instance

Setting up Directus with the Digital Ocean "Directus-Image" is pretts straight forward. After the setup just follow the instructions (visible after login on the server) to enable https for the target domain.

Now we just need to add `CORS_ENABLED="true"` to the `/var/directus/.env` env file and reboot the server after that step.

## Export Schema from Directus

The Schema contains all information about the data models and fields, but not the actual data. The data is in the database and has to be dumped/imported in a separate step.

When using the DigitalOcean Directus Image, the directus binary is directly available as `directus`, on other sytsmes just use `npx directus`.

```sh
# On instance ONE - Export schema:
directus schema snapshot --format json ./directus-schema.json

# On another instance - Import schema:
directus schema apply ./directus-schema.json
```

## Database dump with PostgreSQL

```sh
# To manage the db, login as postgres user:
su postgres && cd ~

# On instance ONE - Dump db:
pg_dump directus > directus.sql

# On another instance - Import db:
# To manage the db, login as postgres user:
su postgres && cd ~

# Copy the dumped file from the other server (directus.sql)
# You can use scp for that: https://unix.stackexchange.com/questions/106480/how-to-copy-files-from-one-machine-to-another-using-ssh

# Start the psql interface
psql

# Kill all active sessions (copy as one command):
SELECT pg_terminate_backend(pg_stat_activity.pid)
FROM pg_stat_activity
WHERE pg_stat_activity.datname = 'directus'
AND pid <> pg_backend_pid();

# Drop db:
DROP DATABASE directus;
# Recreate db:
CREATE DATABASE directus;
# Set access rights:
GRANT ALL PRIVILEGES ON DATABASE directus TO directus;

# Exit psql interface -> \q
# Import dump
psql directus < ./directus.sql

# Reboot server (maybe there is a better way)
reboot
```
