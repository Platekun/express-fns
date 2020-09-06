import { Request } from 'express';
import { ParamsDictionary, Query } from 'express-serve-static-core';

/**
 * An array of subdomains in the domain name of the request.
 *
 * @example
 * // Host: "tobi.ferrets.example.com"
 * console.dir(req.subdomains)
 * // => ['ferrets', 'tobi']
 */
export default function getSubdomainsFromRequest<
  P = ParamsDictionary,
  ResBody = any,
  ReqBody = any,
  ReqQuery = Query
>(req: Request<P, ResBody, ReqBody, ReqQuery>) {
  return req.subdomains;
}
