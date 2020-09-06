import { Request } from 'express';
import { ParamsDictionary, Query } from 'express-serve-static-core';

/**
 * When the trust proxy {@link https://expressjs.com/4x/api.html#trust.proxy.options.table setting} does not evaluate to false, this property contains an array of IP addresses specified in the X-Forwarded-For request header. Otherwise, it contains an empty array. This header can be set by the client or by the proxy.
 *
 * For example, if X-Forwarded-For is client, proxy1, proxy2, req.ips would be ["client", "proxy1", "proxy2"], where proxy2 is the furthest downstream.
 */
export default function getIPSFromRequest<
  P = ParamsDictionary,
  ResBody = any,
  ReqBody = any,
  ReqQuery = Query
>(req: Request<P, ResBody, ReqBody, ReqQuery>) {
  return req.ips;
}
