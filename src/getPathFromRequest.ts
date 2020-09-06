import { Request } from 'express';
import { ParamsDictionary, Query } from 'express-serve-static-core';

/**
 * Contains the path part of the request URL.
 *
 * @example
 * // example.com/users?sort=desc
 * console.dir(req.path)
 * // => '/users'
 */
export default function getPathFromRequest<
  P = ParamsDictionary,
  ResBody = any,
  ReqBody = any,
  ReqQuery = Query
>(req: Request<P, ResBody, ReqBody, ReqQuery>) {
  return req.path;
}
