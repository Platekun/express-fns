import { Request } from 'express';
import { ParamsDictionary, Query } from 'express-serve-static-core';

/**
 * A Boolean property that is true if the request’s X-Requested-With header field is “XMLHttpRequest”, indicating that the request was issued by a client library such as jQuery.
 *
 * @example
 * console.dir(req.xhr)
 * // => true
 */
export default function getXHRFromRequest<
  P = ParamsDictionary,
  ResBody = any,
  ReqBody = any,
  ReqQuery = Query
>(req: Request<P, ResBody, ReqBody, ReqQuery>) {
  return req.xhr;
}
