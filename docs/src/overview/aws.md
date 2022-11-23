# AWS and serverless backend

We use AWS for various servies.
- DynamoDB as database
- Cognito as user management
- S3 to store files
- Route53 to manage domains
- AWS Lambda as part of our serverless backend

Login data can be found on 1Password. To deploy the backend you need to [configure serverless using the aws credentials](https://www.serverless.com/framework/docs/providers/aws/guide/credentials/). 

The backend is built using the serverless framework. Check out our [repo](https://github.com/grundeinkommensbuero/backend) for further info. We also use redoc cli to deploy
[api docs](https://grundeinkommensbuero.github.io/backend/index.html).
