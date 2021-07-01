const express = require('express');
const app = express();

// required Routes File
const {getPosts}= require('./routes/post')

app.get('/',getPosts);


const port = 8080;
app.listen(port, () => {
  console.log(`Node js Running on port ${port}`);
});
