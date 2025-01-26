const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const body_parser = require("body-parser");
require("dotenv").config();
const app = express();
app.use(cors());
app.use(body_parser.json());

const info_router = require("./routers/info_router")

app.get('/', (req, res) => {
     res.status(200).send('Base URL sorğusuna cavab: Express server uğurla işləyir!');
});

app.use("/informations", info_router);

app.listen(process.env.PORT, () => {
     console.log(`Connected PORT: ${process.env.PORT}`);
});

mongoose.connect(process.env.MY_CONNECT).then(() => {
     console.log("MongoDB Connected");
}).catch((error) => {
     console.log(error);
})
