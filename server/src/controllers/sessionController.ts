import * as express from 'express'
import { v1 as uuid } from 'uuid';
import { BaseController } from './baseController';

export class SessionController extends BaseController {
    // Session get request implmentation
    sessionId;

    protected async getImpl(req: express.Request, res: express.Response) {
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

    protected async postImpl(req: express.Request, res: express.Response) {
        try {
            this.ok(res);
        } catch(err) {
            this.fail(res, err.toString());
        }
    }
}