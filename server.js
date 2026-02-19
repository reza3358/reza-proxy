import express from "express";
import request from "request";

const app = express();

app.use((req, res) => {
  const target = req.query.url;
  if (!target) return res.status(400).send("Missing ?url=");

  req.pipe(request(target)).pipe(res);
});

const PORT = process.env.PORT || 10000;

app.listen(PORT, () => {
  console.log("Proxy running on port " + PORT);
});
