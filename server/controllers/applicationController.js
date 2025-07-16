const Application = require('../models/Application');

// @desc Apply to a job
const applyToJob = async (req, res) => {
  try {
    const { userId, jobId, resumeLink } = req.body;
    const application = await Application.create({ userId, jobId, resumeLink });
    res.status(201).json(application);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc Get all applications
const getApplications = async (req, res) => {
  try {
    const applications = await Application.find();
    res.json(applications);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  applyToJob,
  getApplications
};
