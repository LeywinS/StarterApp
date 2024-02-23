import express from "express";
import mongoose from "mongoose";

const app = express();

app.get("/:id", (req, res) => {
  const { id } = req.params;
  res.json({ id });
});

app.listen(3000, () => {
  console.log("Listenning on port 3000! LOL");
});
