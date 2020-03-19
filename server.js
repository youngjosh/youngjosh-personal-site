const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3000;

let app = express();

app.use(function(req, res, next) {
  res.setHeader("X-Frame-Options", "sameorigin");
  res.setHeader("X-XSS-Protection", "1; mode=block");
  res.setHeader("X-Content-Type-Options", "nosniff");
  next();
});

app.get("/health", function(req, res) {
  res
    .status(200)
    .json({ status: "UP" })
    .end();
});

app.use(express.static(path.join(__dirname, "build")));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
