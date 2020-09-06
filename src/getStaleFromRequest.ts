import { Request } from 'express';
import { ParamsDictionary, Query } from 'express-serve-static-core';

/**
 * Indicates whether the request is “stale,” and is the opposite of req.fresh. For more information, see req.fresh.
 *
 * @example
 * console.dir(req.stale)
 * // => true
 */
export default function getStaleFromRequest<
  P = ParamsDictionary,
  ResBody = any,
  ReqBody = any,
  ReqQuery = Query
>(req: Request<P, ResBody, ReqBody, ReqQuery>) {
  return req.stale;
}
