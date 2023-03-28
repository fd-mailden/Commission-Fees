
Hi!

Please do not forget to add the .env file

You need to perform several operations in the terminal:
    1. docker build -t commission-fees-image .
    2. docker run -it --rm  commission-fees-image build/app.js input-data/input.json

For testing, you will need to write:
    1. npm install
    2. npm run test

