// controllers/jobController.js
const Job = require('../models/jobModel');

// Create a new job
const createJob = async (req, res) => {
  try {
    const { title, description, company, location, salary } = req.body;

    const job = new Job({ title, description, company, location, salary });
    await job.save();

    res.status(201).json({ message: 'Job created successfully', job });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all jobs
const getAllJobs = async (req, res) => {
  try {
    const jobs = await Job.find();
    res.status(200).json(jobs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createJob,
  getAllJobs
};
