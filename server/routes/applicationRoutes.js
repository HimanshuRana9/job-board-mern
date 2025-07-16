const express = require('express');
const { applyToJob, getApplications } = require('../controllers/applicationController');

const router = express.Router();

router.post('/apply', applyToJob);
router.get('/', getApplications);

module.exports = router;
