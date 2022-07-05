# Directus

## Export Schema from Directus

The Schema contains all information about the data models and fields, but not the actual data. The data is in the database and has to be dumped/imported in a separate step.

When using the DigitalOcean Directus Image, the directus binary is directly available as `directus`, on other sytsmes just use `npx directus`.

```sh
# On instance ONE - Export schema:
directus schema snapshot --format json ./directus-schema.json

# On another instance - Import schema:
directus schema apply ./directus-schema.json
```

# Database dump PostgresSQL

```sh
# To manage the db, login as psql user:
su postgres && cd ~
# Start the psql interface
psql

# On instance ONE - Dump db:
pg_dump directus > directus.sql

# On another instance - Import db:

# To manage the db, login as psql user:
su postgres && cd ~
# Start the psql interface
psql

# Copy the dumped file from the other server (directus.sql)

# Kill all active sessions:
SELECT
	pg_terminate_backend(pg_stat_activity.pid)
FROM
	pg_stat_activity
WHERE
	pg_stat_activity.datname = 'directus'
	AND pid <> pg_backend_pid();

# Drop and recreate db:
DROP DATABASE directus;
CREATE DATABASE directus;
GRANT ALL PRIVILEGES ON DATABASE directus TO directus;

# Exit psql interface -> \q
# Import dump
psql directus < ./directus.sql
```