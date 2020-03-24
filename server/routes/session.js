"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sessionController_1 = require("./../controllers/sessionController");
var express_1 = require("express");
var sessionRouter = express_1.Router();
exports.sessionRouter = sessionRouter;
var sessionController = new sessionController_1.SessionController();
// get randomic sessionId
sessionRouter.get("", function (req, res) {
    sessionController.get(req, res);
});
// get randomic sessionId
sessionRouter.post("", function (req, res) {
    sessionController.post(req, res);
});
