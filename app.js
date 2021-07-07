const express = require('express');
const app = express();
const morgan = require('morgan');
const dotenv = require('dotenv');
// dor env initialize.
dotenv.config();
// required Routes File
const postRoutes = require('./routes/post');

/* Middleware Setup */
app.use(morgan('dev'));
// Routes
app.use('/', postRoutes);

const port = process.env.PORT || 8083;
app.listen(port, () => {
  console.log(`Node js Running on port ${port}`);
});
