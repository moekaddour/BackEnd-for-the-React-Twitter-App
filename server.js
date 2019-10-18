const express = require('express')
const routes = require('./src/routes/twitterApiRoutes')
const app = express()



const PORT = 5000;



routes(app)
app.listen(PORT, () => {
    console.log(`listenin on post ${PORT}`);
  });