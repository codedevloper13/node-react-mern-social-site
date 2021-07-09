const express = require('express');
const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
// dor env initialize.
dotenv.config();

// Mongoose connect

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log('DB Connected'))
  .catch((err) => console.log(err));

// required Routes File
const postRoutes = require('./routes/post');

/* Middleware Setup */
app.use(morgan('dev'));
app.use(bodyParser.json());
// Routes
app.use('/', postRoutes);

const port = process.env.PORT || 8083;
app.listen(port, () => {
  console.log(`Node js Running on port ${port}`);
});
