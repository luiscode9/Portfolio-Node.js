// Import packages
const express = require("express");
const path = require('path');

// Middlewares
const app = express();
app.use(express.json());

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Routes
app.use(require("./routes/homeRoute"));

// connection
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`port runing in http://localhost:${port}`);
});
