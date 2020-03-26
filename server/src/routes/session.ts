import { SessionController } from './../controllers/sessionController';
import * as express from 'express'
import { Router } from 'express'

const sessionRouter: Router = Router();
const sessionController = new SessionController();

// get randomic sessionId
sessionRouter.get("", (req, res) => {
    sessionController.getSessionId(req, res);
});

// create new session
sessionRouter.post("", (req, res) => {
    sessionController.createNewSession(req, res);
});

// get session by Id
sessionRouter.get("/:id", (req, res) => {
    sessionController.getSessionById(req, res);
});

export { sessionRouter }