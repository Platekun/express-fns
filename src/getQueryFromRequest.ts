import { Request } from 'express';
import { ParamsDictionary, Query } from 'express-serve-static-core';

/**
 * This property is an object containing a property for each query string parameter in the route. When {@link https://expressjs.com/en/4x/api.html#app.settings.table query parser} is set to disabled, it is an empty object {}, otherwise it is the result of the configured query parser.
 *
 * [As req.query’s shape is based on user-controlled input, all properties and values in this object are untrusted and should be validated before trusting. For example, req.query.foo.toString() may fail in multiple ways, for example foo may not be there or may not be a string, and toString may not be a function and instead a string or other user-input.]
 *
 * @example
 * // GET /search?q=tobi+ferret
 * console.dir(req.query.q)
 * // => 'tobi ferret'
 *
 *  // GET /shoes?order=desc&shoe[color]=blue&shoe[type]=converse
 * console.dir(req.query.order)
 * // => 'desc'
 *
 * console.dir(req.query.shoe.color)
 * // => 'blue'
 *
 * console.dir(req.query.shoe.type)
 * // => 'converse'
 *
 * // GET /shoes?color[]=blue&color[]=black&color[]=red
 * console.dir(req.query.color)
 * // => ['blue', 'black', 'red']
 */
export default function getQueryFromRequest<
  P = ParamsDictionary,
  ResBody = any,
  ReqBody = any,
  ReqQuery = Query
>(req: Request<P, ResBody, ReqBody, ReqQuery>) {
  return req.query;
}
