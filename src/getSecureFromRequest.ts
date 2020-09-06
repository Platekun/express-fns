import { Request } from 'express';
import { ParamsDictionary, Query } from 'express-serve-static-core';

/**
 * A Boolean property that is true if a TLS connection is established. Equivalent to:
 *
 * @example
 * console.dir(req.protocol === 'https')
 * // => true
 */
export default function getSecureFromRequest<
  P = ParamsDictionary,
  ResBody = any,
  ReqBody = any,
  ReqQuery = Query
>(req: Request<P, ResBody, ReqBody, ReqQuery>) {
  return req.secure;
}
