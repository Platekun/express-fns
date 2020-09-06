import { Request } from 'express';
import { ParamsDictionary, Query } from 'express-serve-static-core';

/**
 * Contains key-value pairs of data submitted in the request body. By default, it is undefined, and is populated when you use body-parsing middleware such as express.json() or express.urlencoded().
 *
 * The following example shows how to use body-parsing middleware to populate req.body.
 * @example
 * var express = require('express')
 * var app = express()
 * app.use(express.json()) // for parsing application/json
 * app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
 * app.post('/profile', function (req, res, next) {
 *  console.log(req.body)
 *  res.json(req.body)
 * })
 */
export default function getBodyFromRequest<
  P = ParamsDictionary,
  ResBody = any,
  ReqBody = any,
  ReqQuery = Query
>(req: Request<P, ResBody, ReqBody, ReqQuery>) {
  return req.body;
}
