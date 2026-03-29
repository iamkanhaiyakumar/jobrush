import express from "express";
import Job from "../models/Job.js";

const router = express.Router();

// Add Job
router.post("/", async (req, res) => {
  if (req.body.adminPass !== process.env.ADMIN_PASS) {
    return res.status(403).send("Unauthorized");
  }

  const job = new Job(req.body);
  await job.save();
  res.json(job);
});

// Get Jobs (Filters)
router.get("/", async (req, res) => {
  const { search, location, category } = req.query;

  let query = {};

  if (search) query.title = { $regex: search, $options: "i" };
  if (location) query.location = { $regex: location, $options: "i" };
  if (category) query.category = category;

  const jobs = await Job.find(query).sort({ createdAt: -1 });
  res.json(jobs);
});

// Get Single Job
router.get("/:id", async (req, res) => {
  const job = await Job.findById(req.params.id);
  res.json(job);
});

export default router;