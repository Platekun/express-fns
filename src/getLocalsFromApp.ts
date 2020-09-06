import { Application } from 'express';

/**
 * The app.locals object has properties that are local variables within the application.
 *
 * Once set, the value of app.locals properties persist throughout the life of the application, in contrast with {@link https://expressjs.com/en/4x/api.html#res.locals res.locals} properties that are valid only for the lifetime of the request.
 *
 * You can access local variables in templates rendered within the application. This is useful for providing helper functions to templates, as well as application-level data. Local variables are available in middleware via req.app.locals (see {@link https://expressjs.com/en/4x/api.html#req.app req.app})
 *
 * @example
 * console.dir(app.locals.title)
 * // => 'My App'
 *
 * console.dir(app.locals.email)
 * // => 'me@myapp.com'
 *
 * app.locals.title = 'My App'
 * app.locals.strftime = require('strftime')
 * app.locals.email = 'me@myapp.com'
 */
export default function getLocalsFromApp(app: Application) {
  return app.locals;
}
