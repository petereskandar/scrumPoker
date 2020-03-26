"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sessionController_1 = require("./../controllers/sessionController");
var express_1 = require("express");
var sessionRouter = express_1.Router();
exports.sessionRouter = sessionRouter;
var sessionController = new sessionController_1.SessionController();
// get randomic sessionId
sessionRouter.get("", function (req, res) {
    sessionController.getSessionId(req, res);
});
// create new session
sessionRouter.post("", function (req, res) {
    sessionController.createNewSession(req, res);
});
// get session by Id
sessionRouter.get("/:id", function (req, res) {
    sessionController.getSessionById(req, res);
});
