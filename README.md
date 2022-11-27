# Node Mandatory 2 - To run the project:

## Server:
Add your mysql databse credenticals in the "connection_mysql.js" file.
After credentials are filled, take following steps:
1. Navigate to /server
2. create a .env file, in this file make sure to have: ACCES_TOKEN_SECRET, EMAIL_TOKEN_SECRET.
    - in the .env file put this in for testing: EMAIL_ACCOUNT ="studie.konto.420@gmail.com",
      EMAIL_PASSWORD="wibecilyptpfjlga"
3. in terminal run: npm i
4. in terminal run: npm run setup-db
5. in terminal run: npm run start-dev

## Client:
1. navigate to /client
2. in terminal run: npm i
3. in terminal run: npm run dev

## To test the application:

2 test users with diffrent roles are added, when the "setup-db" script is run.

redpill user:
mail: red@test.dk
password: red

bluepill user:
mail: blue@test.dk
password: blue