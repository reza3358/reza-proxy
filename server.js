import express from "express";
import request from "request";

const app = express();

app.use((req, res) => {
  const target = req.query.url;
  if (!target) return res.status(400).send("Missing ?url=");

  const options = {
    url: target,
    headers: {
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"
    }
  };

  request(options).pipe(res);
});

const PORT = process.env.PORT || 10000;

app.listen(PORT, () => {
  console.log("Proxy running on port " + PORT);
});
