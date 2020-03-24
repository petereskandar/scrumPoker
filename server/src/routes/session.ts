import { SessionController } from './../controllers/sessionController';
import * as express from 'express'
import { Router } from 'express'

const sessionRouter: Router = Router();
const sessionController = new SessionController();

// get randomic sessionId
sessionRouter.get("", (req, res) => {
    sessionController.get(req, res);
});

// get randomic sessionId
sessionRouter.post("", (req, res) => {
    sessionController.post(req, res);
});

export { sessionRouter }