"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// session schema
var SessionSchema = new Schema({
    moderatorName: { type: String, required: true },
    moderatorEmail: { type: String, required: true },
    sessionDesc: { type: String, required: true }
});
exports.Session = mongoose.model('Session', SessionSchema);
