const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require('stripe')('sk_test_51JtZE0LcuY9EIOVN5RLix9XRKSs7D1d73Uq09OKA5KKmbQ3LLCGKQsCS96B95zXFjG1FhHJtpou6rR3xIG42V7WT00zxHHgMZ1')

//API

//App config
const app = express()

//Middlewares
app.use(cors({ orgin: true}))
app.use(express.json());

//API routes

app.get('/',(request, response) => response.status(200).send("siema"))

app.post("/payments/create", async (request,response) => {
    const total =request.query.total;

    console.log("Payment Requester boom for amount", total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd",
    });
    
    response.status(201).send({
        clientSecret : paymentIntent.client_secret,
    })
})

//Listen command
exports.api = functions.https.onRequest(app)