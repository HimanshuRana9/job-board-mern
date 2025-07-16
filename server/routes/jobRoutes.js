const express = require('express');
const router = express.Router();
const { createJob, getJobs } = require('../controllers/jobController');

// @route   POST /api/jobs
// @desc    Create a new job posting
router.post('/', createJob);

// @route   GET /api/jobs
// @desc    Get all job postings
router.get('/', getJobs);

module.exports = router;
