const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const body_parser = require("body-parser");
require("dotenv").config();
const app = express();

app.use(cors());
app.use(body_parser.json());

// Import the router for "informations"
const info_router = require("./routers/info_router");

// Base URL route
app.get('/', (req, res) => {
     res.status(200).send('Base URL request: Express server is working successfully!');
});

// Use the "/informations" route
app.use("/informations", info_router);

app.listen(process.env.PORT, () => {
     console.log(`Connected PORT: ${process.env.PORT}`);
})
// MongoDB connection
mongoose.connect(process.env.MY_CONNECT)
     .then(() => {
          console.log("MongoDB Connected");
     })
     .catch((error) => {
          console.log(error);
     });

// Export the Express app to be used by Vercel serverless function
module.exports = app;
