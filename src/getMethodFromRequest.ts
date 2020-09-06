import { Request } from 'express';
import { ParamsDictionary, Query } from 'express-serve-static-core';

/**
 * Contains a string corresponding to the HTTP method of the request: GET, POST, PUT, and so on.
 */
export default function getMethodFromRequest<
  P = ParamsDictionary,
  ResBody = any,
  ReqBody = any,
  ReqQuery = Query
>(req: Request<P, ResBody, ReqBody, ReqQuery>) {
  return req.method;
}
