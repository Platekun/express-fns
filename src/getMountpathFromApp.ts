import { Application } from 'express';

/**
 * The app.mountpath property contains one or more path patterns on which a sub-app was mounted.
 *
 * [A sub-app is an instance of express that may be used for handling the request to a route.]
 *
 * It is similar to the {@link https://expressjs.com/en/4x/api.html#req.baseUrl baseUrl} property of the req object, except req.baseUrl returns the matched URL path, instead of the matched patterns.
 *
 * @example
 * var express = require('express')
 * var app = express() // the main app
 * var admin = express() // the sub app
 *
 * admin.get('/', function (req, res) {
 *  console.log(admin.mountpath) // /admin
 *  res.send('Admin Homepage')
 * })
 *
 * app.use('/admin', admin) // mount the sub app
 *
 * @example
 * var admin = express()
 * admin.get('/', function (req, res) {
 *  console.dir(admin.mountpath) // [ '/adm*n', '/manager' ]
 * res.send('Admin Homepage')
 * })
 *
 * var secret = express()
 * secret.get('/', function (req, res) {
 *  console.log(secret.mountpath) // /secr*t
 *  res.send('Admin Secret')
 * })
 *
 * admin.use('/secr*t', secret) // load the 'secret' router on '/secr*t', on the 'admin' sub app
 * app.use(['/adm*n', '/manager'], admin) // load the 'admin' router on '/adm*n' and '/manager', on the parent app
 */
export default function getMounthPathFromApp(app: Application) {
  return app.mountpath;
}
