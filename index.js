const express = require('express');
const app = express();

app.use(express.static(`${__dirname}/public`));

// args = port number, handler
app.listen(3000, () => {
  console.log("App works on 3000, yay");
});
