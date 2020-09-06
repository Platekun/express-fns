import { Request } from 'express';
import { ParamsDictionary, Query } from 'express-serve-static-core';

/**
 * Contains the remote IP address of the request.
 *
 * When the trust proxy {@link https://expressjs.com/4x/api.html#trust.proxy.options.table setting} does not evaluate to false, the value of this property is derived from the left-most entry in the X-Forwarded-For header. This header can be set by the client or by the proxy.
 *
 * @example
 * console.dir(req.ip)
 * // => '127.0.0.1'
 */
export default function getIPFromRequest<
  P = ParamsDictionary,
  ResBody = any,
  ReqBody = any,
  ReqQuery = Query
>(req: Request<P, ResBody, ReqBody, ReqQuery>) {
  return req.ip;
}
