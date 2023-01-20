import express from "express";
import cors from "cors";

const app = express();

app.use(cors({ origin: "*" }));
app.set("trust proxy", true);
app.use(express.json());
app.get("/api", (req, res) => {
  console.log(req.ip);
  res.json(req.ip);
});
app.listen(3080, () => {
  console.log("Listening on port 3080");
});
