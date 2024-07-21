require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoutes = require("./routes/UserRoutes");
const MONGO_URI = process.env.MONGO_URI;

const app = express();

app.use(cors());
app.use(express.json());
mongoose.connect(MONGO_URI, {
    useNewUrlParser : true,
    useUnifiedTopology : true,
}).then(()=> {
    console.log("DB connected");
});

const PORT = process.env.PORT || 5000;
app.use("/api/user", userRoutes);
app.listen(PORT, console.log("server started"));
