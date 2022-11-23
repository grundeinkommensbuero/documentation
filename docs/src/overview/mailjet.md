# Mailjet

As a mailing service for newsletters and templates for transactional mails we use [Mailjet](https://app.mailjet.com/signin?lang=de_DE).
Login Data can be found in 1Password. User data of our DynamoDB database is synced upon change. This way we are able to create particular segmentations such as
"Users from Berlin" or "Users who have downloaded a signature list". The syncing script can be found and edited [here](https://github.com/grundeinkommensbuero/backend/blob/master/serverless/src/triggers/mailjet/index.js).

Transactional mails are triggered in backend functions include for example the sending of a signature list pdf or a reminder email to sign and send the list.
