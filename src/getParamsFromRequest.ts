import { Request } from 'express';
import { ParamsDictionary, Query } from 'express-serve-static-core';

/**
 * This property is an object containing properties mapped to the {@link https://expressjs.com/en/guide/routing.html#route-parameters named route “parameters”}. For example, if you have the route /user/:name, then the “name” property is available as req.params.name. This object defaults to {}.
 *
 * When you use a regular expression for the route definition, capture groups are provided in the array using req.params[n], where n is the nth capture group. This rule is applied to unnamed wild card matches with string routes such as /file/*:
 *
 * If you need to make changes to a key in req.params, use the app.param handler. Changes are applicable only to parameters already defined in the route path.
 * Any changes made to the req.params object in a middleware or route handler will be reset.
 *
 * @example
 * // GET /user/tj
 * console.dir(req.params.name)
 * // => 'tj'
 *
 * @example
 * // GET /file/javascripts/jquery.js
 * console.dir(req.params[0])
 * // => 'javascripts/jquery.js'
 */
export default function getParamsFromRequest<
  P = ParamsDictionary,
  ResBody = any,
  ReqBody = any,
  ReqQuery = Query
>(req: Request<P, ResBody, ReqBody, ReqQuery>) {
  return req.params;
}
