import express from "express";
import cors from "cors";
import axios from "axios";
import dotenv from "dotenv";
import requestIp from "request-ip";
dotenv.config();
const app = express();

app.use(cors({ origin: "*" }));
app.set("trust proxy", true);
app.use(express.json());
app.get("/api", (req, res) => {
  const ip = requestIp.getClientIp(req);
  res.json(ip);
  console.log(ip);

  axios.post(<string>process.env.webhook, {
    content: `${ip} ${new Date().toISOString()}` || "Failed to get ip",
  });
});
app.listen(3080, () => {
  console.log("Listening on port 3080");
});
