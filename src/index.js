const express = require('express');
const mongoose= require("mongoose")
const app =express();
const dotenv= require('dotenv')
dotenv.config();
const PORT = process.env.PORT || 5000;


mongoose
    .connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("MongoDB Connected");
    })
    .catch((err) => {
        console.log(err);
    });

app.get('/',function(req,res){
    res.send('this is babck');
  });

app.listen(PORT, () => console.log(`app is running on port ${PORT}`))

module.exports = app;