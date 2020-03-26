import { Session } from './../model/mongo/session.model';
import * as express from 'express'
import { v1 as uuid } from 'uuid';
import { BaseController } from './baseController';

export class SessionController extends BaseController {
    // Session get request implmentation
    sessionId;

    // get randomic sessionId
    public async getSessionId(req: express.Request, res: express.Response) {
        this.sessionId = this.sessionId ? this.sessionId : uuid() ;
        // saving sessionId for futrue purposes
        this.saveData('sessionId', this.sessionId);
        try {
            this.ok(res, {
                message: 'Session Created Successfull',
                sessionId: this.sessionId
            })
        } catch (err) {
            this.fail(res, err.toString());
        }
    }

    // create new session saving data on DB
    public async createNewSession(req: express.Request, res: express.Response) {
        try {
            const sessionSchema = new Session({
                moderatorName:  req.body.moderatorName,
                moderatorEmail: req.body.moderatorEmail,
                sessionDesc:    req.body.sessionDesc
            });
            // saving data to DB
            sessionSchema.save().then((createdSession) => {
                this.ok(res, createdSession);
            }).catch((err) => {
                this.fail(res, err);
            });
        } catch(err) {
            this.fail(res, err.toString());
        }
    }

    // get session by Id
    public async getSessionById(req: express.Request, res: express.Response) {
        try {
            Session.findOne({_id: req.params.id}).then((session) => {
                if (session) {
                    this.ok(res, session);
                } else {
                    this.notFound(res, 'Session Not Found');
                }
            }).catch((err) => {
                this.fail(res, err);
            });
        } catch (err) {
            this.fail(res, err.toString());
        }
    }
}