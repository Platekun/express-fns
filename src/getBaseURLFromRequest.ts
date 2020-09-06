import { Request } from 'express';
import { ParamsDictionary, Query } from 'express-serve-static-core';

/**
 * The URL path on which a router instance was mounted.
 *
 * The req.baseUrl property is similar to the {@link https://expressjs.com/en/4x/api.html#app.mountpath mountpath} property of the app object, except app.mountpath returns the matched path pattern(s).
 *
 * @example
 * var greet = express.Router()
 * greet.get('/jp', function (req, res) {
 *      console.log(req.baseUrl) // /greet
 *      res.send('Konichiwa!')
 * })
 *
 * app.use('/greet', greet) // load the router on '/greet'
 */
export default function getOriginalUrlFromRequest<
  P = ParamsDictionary,
  ResBody = any,
  ReqBody = any,
  ReqQuery = Query
>(req: Request<P, ResBody, ReqBody, ReqQuery>) {
  return req.originalUrl;
}
