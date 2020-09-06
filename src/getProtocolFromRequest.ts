import { Request } from 'express';
import { ParamsDictionary, Query } from 'express-serve-static-core';

/**
 * Contains the request protocol string: either http or (for TLS requests) https.
 *
 * When the trust proxy {@link https://expressjs.com/en/4x/api.html#trust.proxy.options.table setting} does not evaluate to false, this property will use the value of the X-Forwarded-Proto header field if present. This header can be set by the client or by the proxy.
 *
 * @example
 * console.dir(req.protocol)
 * // => 'http'
 */
export default function getProtocolFromRequest<
  P = ParamsDictionary,
  ResBody = any,
  ReqBody = any,
  ReqQuery = Query
>(req: Request<P, ResBody, ReqBody, ReqQuery>) {
  return req.protocol;
}
