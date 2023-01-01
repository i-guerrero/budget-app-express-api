// DEPENDENCIES
const express = require("express");
const transactionsController = require("./controllers/transactionsController");

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(express.json()); // Parse incoming JSON

// ROUTES
app.get("/", (req, res) => {
  res.send("Welcome to the Budgeting App");
});

app.use("/transactions", transactionsController);

// 404 catch all
app.get("*", (req, res) => {
  res.status(404).json({ error: "Page not found" });
});

// EXPORT
module.exports = app;
