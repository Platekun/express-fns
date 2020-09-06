import { Request } from 'express';
import { ParamsDictionary, Query } from 'express-serve-static-core';

/**
 * req.url is not a native Express property, it is inherited from Node’s http module.
 *
 * This property is much like req.url; however, it retains the original request URL, allowing you to rewrite req.url freely for internal routing purposes. For example, the “mounting” feature of {@link https://expressjs.com/en/4x/api.html#app.use app.use()} will rewrite req.url to strip the mount point.
 *
 * @example
 * app.use('/admin', function (req, res, next) { // GET 'http://www.example.com/admin/new'
 *  console.dir(req.originalUrl) // '/admin/new'
 *  console.dir(req.baseUrl) // '/admin'
 *  console.dir(req.path) // '/new'
 *  next()
 * })
 */
export default function getOriginalUrlFromRequest<
  P = ParamsDictionary,
  ResBody = any,
  ReqBody = any,
  ReqQuery = Query
>(req: Request<P, ResBody, ReqBody, ReqQuery>) {
  return req.originalUrl;
}
