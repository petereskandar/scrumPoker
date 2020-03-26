const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// session schema
const SessionSchema = new Schema({
    moderatorName:  { type: String, required: true},
    moderatorEmail: { type: String, required: true},
    sessionDesc: { type: String, required: true }
});

export const Session = mongoose.model('Session', SessionSchema);