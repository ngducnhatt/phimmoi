const express = require("express");
const app = express();
const port = 3000;

// Static file serving
app.use(express.static("public"));

// Template engine setup
app.set("view engine", "ejs");

// Data
const episodes = [
  { id: "EP01", src: "#" },
  { id: "EP02", src: "#" },
  { id: "EP03", src: "#" },
  { id: "EP04", src: "https://short.ink/54O51FtUw" },
  { id: "EP05", src: "https://short.ink/1_Y9NUY95" },
  { id: "EP06", src: "https://short.ink/Ojyt4UpgO" },
  { id: "EP07", src: "https://short.ink/vV2a7F9PK" },
  { id: "EP08", src: "https://short.ink/lCtxODqs3" },
  { id: "EP09", src: "https://short.ink/mX6AnQS4d" },
];

// Routes
app.get("/", (req, res) => {
  res.render("index", { episodes });
});

app.get("/arcaneS02/:id", (req, res) => {
  const episode = episodes.find((ep) => ep.id === req.params.id);
  if (!episode) {
    return res.status(404).send("Episode not found");
  }
  res.render("episode", { episode });
});

// Start server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
