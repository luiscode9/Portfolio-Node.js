// Import packages
const express = require("express");

// Middlewares
const app = express();
app.use(express.json());

// Routes
app.use(require("./routes/home"));

// connection
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`port runing in http://localhost:${port}`);
});
