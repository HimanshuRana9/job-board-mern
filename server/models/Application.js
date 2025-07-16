const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
  job: { type: mongoose.Schema.Types.ObjectId, ref: 'Job', required: true },
  applicant: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  resumeLink: { type: String, required: true },
  status: { type: String, default: 'submitted' }
}, { timestamps: true });

module.exports = mongoose.model('Application', applicationSchema);