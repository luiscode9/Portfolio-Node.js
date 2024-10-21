// Import packages
const express = require("express");

// Middlewares
const app = express();
app.use(express.json());

app.use("/resources", express.static("public"));
app.set('view engine', 'ejs');

// Routes
app.use(require("./routes/index.route"));

// connection
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`port runing in http://localhost:${port}`);
});
