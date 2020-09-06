import { Request } from 'express';
import { ParamsDictionary, Query } from 'express-serve-static-core';

/**
 * When using {@link https://www.npmjs.com/package/cookie-parser cookie-parser middleware}, this property is an object that contains cookies sent by the request.
 *
 * If the request contains no cookies, it defaults to {}.
 *
 * @example
 * // Cookie: name=tj
 * console.dir(req.cookies.name)
 * // => 'tj'
 */
export default function getCookiesFromRequest<
  P = ParamsDictionary,
  ResBody = any,
  ReqBody = any,
  ReqQuery = Query
>(req: Request<P, ResBody, ReqBody, ReqQuery>) {
  return req.cookies;
}
