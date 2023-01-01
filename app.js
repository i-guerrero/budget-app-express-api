// DEPENDENCIES
const express = require("express");

// CONFIGURATION
const app = express();

// ROUTES

app.get("/", (req, res) => {
  res.send("Welcome to the Budgeting App");
});

// EXPORT
module.exports = app;
