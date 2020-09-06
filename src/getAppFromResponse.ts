import { Response } from 'express';

/**
 * This property holds a reference to the instance of the Express application that is using the middleware.
 *
 * res.app is identical to the {@link https://expressjs.com/en/4x/api.html#req.app req.app} property in the request object.
 */
export default function getAppFromResponse<ResBody = any>(
  res: Response<ResBody>
) {
  return res.app;
}
