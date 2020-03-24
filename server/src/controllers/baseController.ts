import * as express from 'express'
import * as nconf from 'nconf';

export abstract class BaseController {

  // get request Implementation
  protected abstract getImpl (
    req: express.Request, res: express.Response
  ): Promise<void | any>;

  // post request Implementation
  protected abstract postImpl (
    req: express.Request, res: express.Response
  ): Promise<void | any>;

  public async get (
    req: express.Request, res: express.Response
  ): Promise<void> {

    try {
      await this.getImpl(req, res);
    } catch (err) {
      console.log(`[BaseController]: Uncaught controller error`);
      this.fail(res, 'An unexpected error occurred')
    }
  }

  public async post (
    req: express.Request, res: express.Response
  ): Promise<void> {

    try {
      await this.postImpl(req, res);
    } catch (err) {
      console.log(`[BaseController]: Uncaught controller error`);
      this.fail(res, 'An unexpected error occurred')
    }
  }

  public static jsonResponse (
    res: express.Response, code: number, message: string
  ) {
    return res.status(code).json({ message })
  }

  public ok<T> (res: express.Response, dto?: T) {
    if (!!dto) {
      res.type('application/json');
      return res.status(200).json(dto);
    } else {
      return res.sendStatus(200);
    }
  }

  // save local data
  public saveData(key, value) {
    nconf.file('../config/app.json');
    nconf.set(key, value);
  }

  
  public created (res: express.Response) {
    return res.sendStatus(201);
  }

  public clientError (res: express.Response, message?: string) {
    return BaseController.jsonResponse(res, 400, message ? message : 'Unauthorized');
  }

  public fail (res: express.Response, error: Error | string) {
    return res.status(500).json({
      message: error.toString()
    })
  }
}