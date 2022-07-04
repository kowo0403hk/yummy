# Lighthouse Labs Midterm Project - **Pizza King**

This project is built by Alex Cheung and Xiang Li from Jun 3 - Jun 8, 2022 as a mid-term project for Lighthouse Labs Full-Time Web Development Bootcamp.

The stacks used to build this project includes: Node, Express, jQuery, PostgresQL, SASS and Twilio API.

## About the project

Pizza King is a online pizza ordering web application that allows customers to order their favorite items in no time.

Once an order is placed, a customer will receive a SMS message as confirmation. At the same time, the owner of Pizza King will also receive a SMS message reminding him/her a new order has been placed. The owner can then interact with the message by replying the time required to prepare for the order. The customer will then receive another SMS message indicating how long the order will take to prepare. Once the specified time has passed, the customer will receive a final SMS message reminding him/her that the order is ready.

**For demonstration purposes, the gif below uses the same phone number to play both the owner and the customer roles.**

**There is no login function implemented given the timelimit we had during the midterm period.**

## Getting started

1. run `npm install`
2. Create a `.env` by using `.env.example` as a reference
3. Create a database in PostgresQL with the following information:

- username: `labber`
- password: `labber`
- database: `midterm`

4. Reset the database: `npm run db:reset`
5. Run the server: `npm start`
6. Visit `http://localhost:8080/`

## Dependencies

- node 10.x or above
- npm 5.x or above
- express
- pg 6.x or above
- sass
- normalized css
- twilio

## Setting up twilio API

### Installing twilio-cli

Please refer to this page for installation and login instructions: https://www.twilio.com/docs/twilio-cli/quickstart

### Receving inbound messages

This part is to set up a ngrok host to process incoming messages (from the owner of Pizza King to tell customers how long the order will take).

You can following the instructions on Twilio website: https://www.twilio.com/docs/runtime/quickstart/serverless-functions-receive-inbound-sms

Or, run this on a new terminal:
`twilio phone-numbers:update "+{your_twilio_number_here}" --sms-url="http://localhost:8080/{your_REST_route_here}"`

## Product outlook

Home Page:
![Home Page](https://github.com/kowo0403hk/yummy/blob/master/docs/Pizza-Home.png?raw=true)

Order Page:
![Order Page](https://github.com/kowo0403hk/yummy/blob/master/docs/Pizza-Order.png?raw=true)

Order List:
![Order History](https://github.com/kowo0403hk/yummy/blob/master/docs/Pizza-History.png?raw=true)

Owner receives an order:
![Owner receives order](https://github.com/kowo0403hk/yummy/blob/master/docs/Owner-receive-order.png?raw=true)

Owner replies with time needed:
![Owner reply](https://github.com/kowo0403hk/yummy/blob/master/docs/Owner-reply-with-time.png?raw=true)

Customer receives notice:
![Customer notice](https://github.com/kowo0403hk/yummy/blob/master/docs/Customer-receive-notice.png?raw=true)

## **Enjoy!**
