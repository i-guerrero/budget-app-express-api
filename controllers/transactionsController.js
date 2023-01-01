const express = require("express");
const transactions = express.Router();
const transactionsArray = require("../models/transactions.js");

transactions.get("/", (req, res) => {
  res.json(transactionsArray);
});

transactions.get("/:id", (req, res) => {
  const id = req.params.id;
  if (transactionsArray[id]) {
    res.json(transactionsArray[id]);
  } else {
    res.redirect("/*");
  }
});

transactions.post("/", (req, res) => {
  transactionsArray.push(req.body);
  res.json(transactionsArray[transactionsArray.length - 1]);
});

// 404 Catch all
// transactions.get("*", (req, res) => {
//   res.json({ error: "Page not found" });
// });

module.exports = transactions;
