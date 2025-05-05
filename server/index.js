import express from "express";
import cors from "cors";
import recordsRouter from "./routes/records.js";

const app = express();
const PORT = 4001;
;

app.use(cors());
app.use(express.json());
app.use("/api/records", recordsRouter);

app.get("/", (req, res) => {
  res.send("Randomizer Hub API running");
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
