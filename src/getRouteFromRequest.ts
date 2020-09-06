import { Request } from 'express';
import { ParamsDictionary, Query } from 'express-serve-static-core';

/**
 * Contains the currently-matched route, a string. For example:
 *
 * @example
 * app.get('/user/:id?', function userIdHandler (req, res) {
 *  console.log(req.route)
 *  res.send('GET')
 * })
 *
 * // { path: '/user/:id?',
 * //   stack: [ { handle: [Function: userIdHandler],
 * //   name: 'userIdHandler',
 * //   params: undefined,
 * //   path: undefined,
 * //   keys: [],
 * //   regexp: /^\/?$/i,
 * //   method: 'get' } ],
 * //   methods: { get: true } }
 */
export default function getRouteFromRequest<
  P = ParamsDictionary,
  ResBody = any,
  ReqBody = any,
  ReqQuery = Query
>(req: Request<P, ResBody, ReqBody, ReqQuery>) {
  return req.route;
}
