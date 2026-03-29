import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import jobRoutes from "./routes/jobs.js";

dotenv.config();

const app = express();

app.use(cors({ origin: "*" }));
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("DB Connected"))
.catch(err => console.log(err));

app.use("/api/jobs", jobRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server running on ${process.env.PORT}`);
});