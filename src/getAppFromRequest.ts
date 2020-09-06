import { Request } from 'express';
import { ParamsDictionary, Query } from 'express-serve-static-core';

/**
 * This property holds a reference to the instance of the Express application that is using the middleware.
 *
 * If you follow the pattern in which you create a module that just exports a middleware function and require() it in your main file, then the middleware can access the Express instance via req.app
 *
 * @example
 * // index.js
 * app.get('/viewdirectory', require('./mymiddleware.js'))
 *
 * // mymiddleware.js
 * module.exports = function (req, res) {
 *  res.send('The views directory is ' + req.app.get('views'))
 * }
 */
export default function getAppFromRequest<
  P = ParamsDictionary,
  ResBody = any,
  ReqBody = any,
  ReqQuery = Query
>(req: Request<P, ResBody, ReqBody, ReqQuery>) {
  return req.app;
}
