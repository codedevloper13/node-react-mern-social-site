const express = require('express');
const app = express();
const morgan= require('morgan');

// required Routes File
const postRoutes= require('./routes/post')

/* Middleware Setup */
app.use(morgan)
// Routes 
app.use('/',postRoutes);


const port = 8080;
app.listen(port, () => {
  console.log(`Node js Running on port ${port}`);
});
