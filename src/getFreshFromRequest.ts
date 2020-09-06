import { Request } from 'express';
import { ParamsDictionary, Query } from 'express-serve-static-core';

/**
 * When the response is still “fresh” in the client’s cache true is returned, otherwise false is returned to indicate that the client cache is now stale and the full response should be sent.
 *
 * When a client sends the Cache-Control: no-cache request header to indicate an end-to-end reload request, this module will return false to make handling these requests transparent.
 *
 * Further details for how cache validation works can be found in the {@link https://tools.ietf.org/html/rfc7234 HTTP/1.1 Caching Specification}.
 *
 * @example
 * console.dir(req.fresh)
 * // => true
 */
export default function getFreshFromRequest<
  P = ParamsDictionary,
  ResBody = any,
  ReqBody = any,
  ReqQuery = Query
>(req: Request<P, ResBody, ReqBody, ReqQuery>) {
  return req.fresh;
}
