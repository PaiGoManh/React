const { Schema } = require('mongoose');
const { model } = require('mongoose');

const certSchema = new Schema({
  name: { type: String, required: true },
  grade: { type: String, required: true },
  course: { type: String, required: true },
  certificateID: { type: String, required: true, unique: true },
  dateOfCompletion: { type: Date, required: true },
});

const certificates = model('certificates', certSchema);

module.exports = certificates;
