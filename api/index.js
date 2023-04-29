const express = require('express')
const app =express();

const PORT = process.env.PORT || 5000;

app.get('/',function(req,res){
    res.send('this is babck');
  });

app.listen(PORT, () => console.log(`app is running on port ${PORT}`))

module.exports = app;