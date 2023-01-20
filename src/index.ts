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
  const user_ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress || (req.socket ? req.socket.remoteAddress : null);
  console.log(user_ip);
  res.json(user_ip);
  axios.post(<string>process.env.webhook, {
    content: `${user_ip} ${new Date().toISOString()}` || "Failed to get ip",
  });
});
app.listen(3080, () => {
  console.log("Listening on port 3080");
});
