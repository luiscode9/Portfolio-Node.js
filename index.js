// Import packages
const express = require("express");

// Middlewares
const app = express();
app.use(express.json());

app.set('view engine', 'ejs');

// Routes
app.use(require("./routes/homeRoute"));

// connection
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`port runing in http://localhost:${port}`);
});
