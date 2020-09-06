import { Request } from 'express';
import { ParamsDictionary, Query } from 'express-serve-static-core';

/**
 * When using {@link https://www.npmjs.com/package/cookie-parser cookie-parser middleware}, this property contains signed cookies sent by the request, unsigned and ready for use. Signed cookies reside in a different object to show developer intent; otherwise, a malicious attack could be placed on req.cookie values (which are easy to spoof). Note that signing a cookie does not make it “hidden” or encrypted; but simply prevents tampering (because the secret used to sign is private).
 *
 * If no signed cookies are sent, the property defaults to {}.
 *
 * @example
 * // Cookie: user=tobi.CP7AWaXDfAKIRfH49dQzKJx7sKzzSoPq7/AcBBRVwlI3
 * console.dir(req.signedCookies.user)
 * // => 'tobi'
 */
export default function getSignedCookiesFromRequest<
  P = ParamsDictionary,
  ResBody = any,
  ReqBody = any,
  ReqQuery = Query
>(req: Request<P, ResBody, ReqBody, ReqQuery>) {
  return req.signedCookies;
}
