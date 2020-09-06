import { Application } from 'express';

import getLocalsFromApp from '../src/getLocalsFromApp';
import getMountpathFromApp from '../src/getMountpathFromApp';
import getAppFromRequest from '../src/getAppFromRequest';
import getBaseURLFromRequest from '../src/getBaseURLFromRequest';
import getBodyFromRequest from '../src/getBodyFromRequest';
import getCookiesFromRequest from '../src/getCookiesFromRequest';
import getFreshFromRequest from '../src/getFreshFromRequest';
import getHostnameFromRequest from '../src/getHostnameFromRequest';
import getIPFromRequest from '../src/getIPFromRequest';
import getIPSFromRequest from '../src/getIPSFromRequest';
import getMethodFromRequest from '../src/getMethodFromRequest';
import getOriginalUrlFromRequest from '../src/getOriginalUrlFromRequest';
import getParamsFromRequest from '../src/getParamsFromRequest';
import getPathFromRequest from '../src/getPathFromRequest';
import getProtocolFromRequest from '../src/getProtocolFromRequest';
import getQueryFromRequest from '../src/getQueryFromRequest';
import getRouteFromRequest from '../src/getRouteFromRequest';
import getSecureFromRequest from '../src/getSecureFromRequest';
import getSignedCookiesFromRequest from '../src/getSignedCookiesFromRequest';
import getStaleFromRequest from '../src/getStaleFromRequest';
import getSubdomainsFromRequest from '../src/getSubdomainsFromRequest';
import getXHRFromRequest from '../src/getXHRFromRequest';
import getAppFromResponse from '../src/getAppFromResponse';

const locals = {};

const app = { locals, mountpath: 'Mount Path' } as any;

const mountpath = 'Mount Path';
const baseUrl = 'Base URL';
const body = {};
const cookies = {};
const fresh = true;
const hostname = 'Host name';
const ip = '127.0.0.1';
const ips = ['client', 'proxy1', 'proxy2'];
const method = 'POST';
const originalUrl = 'Original URL';
const params = {};
const path = 'Path';
const protocol = 'http';
const query = {};
const route = {
  path: '/user/:id?',
  stack: [
    {
      handle: () => {},
      name: 'userIdHandler',
      params: undefined,
      path: undefined,
      keys: [],
      regexp: /^\/?$/i,
      method: 'get',
    },
  ],
  methods: { get: true },
};
const secure = true;
const signedCookies = {};
const stale = false;
const subdomains = ['ferrets', 'tobi'];
const xhr = true;

const request = {
  body: {},
  app,
  mountpath,
  baseUrl,
  cookies,
  fresh,
  hostname,
  ip,
  ips,
  method,
  originalUrl,
  params,
  path,
  protocol,
  query,
  route,
  secure,
  signedCookies,
  stale,
  subdomains,
  xhr,
} as any;

const response = { app } as any;

test('getLocalsFromApp', () => {
  const expected = locals;
  const actual = getLocalsFromApp(app as Application);
  expect(actual).toEqual(expected);
});

test('getMountpathFromApp', () => {
  const expected = mountpath;
  const actual = getMountpathFromApp(app as Application);
  expect(actual).toEqual(expected);
});

test('getAppFromRequest', () => {
  const expected = app;
  const actual = getAppFromRequest(request);
  expect(actual).toEqual(expected);
});

test('getBaseURLFromRequest', () => {
  const expected = baseUrl;
  const actual = getBaseURLFromRequest(request);
  expect(actual).toEqual(expected);
});

test('getBodyFromRequest', () => {
  const expected = body;
  const actual = getBodyFromRequest(request);
  expect(actual).toEqual(expected);
});

test('getCookiesFromRequest', () => {
  const expected = cookies;
  const actual = getCookiesFromRequest(request);
  expect(actual).toEqual(expected);
});

test('getFreshFromRequest', () => {
  const expected = fresh;
  const actual = getFreshFromRequest(request);
  expect(actual).toEqual(expected);
});

test('getHostnameFromRequest', () => {
  const expected = hostname;
  const actual = getHostnameFromRequest(request);
  expect(actual).toEqual(expected);
});

test('getIPFromRequest', () => {
  const expected = ip;
  const actual = getIPFromRequest(request);
  expect(actual).toEqual(expected);
});

test('getIPSFromRequest', () => {
  const expected = ips;
  const actual = getIPSFromRequest(request);
  expect(actual).toEqual(expected);
});

test('getMethodFromRequest', () => {
  const expected = method;
  const actual = getMethodFromRequest(request);
  expect(actual).toEqual(expected);
});

test('getOriginalUrlFromRequest', () => {
  const expected = originalUrl;
  const actual = getOriginalUrlFromRequest(request);
  expect(actual).toEqual(expected);
});

test('getParamsFromRequest', () => {
  const expected = params;
  const actual = getParamsFromRequest(request);
  expect(actual).toEqual(expected);
});

test('getPathFromRequest', () => {
  const expected = path;
  const actual = getPathFromRequest(request);
  expect(actual).toEqual(expected);
});

test('getProtocolFromRequest', () => {
  const expected = protocol;
  const actual = getProtocolFromRequest(request);
  expect(actual).toEqual(expected);
});

test('getQueryFromRequest', () => {
  const expected = query;
  const actual = getQueryFromRequest(request);
  expect(actual).toEqual(expected);
});

test('getRouteFromRequest', () => {
  const expected = route;
  const actual = getRouteFromRequest(request);
  expect(actual).toEqual(expected);
});

test('getSecureFromRequest', () => {
  const expected = secure;
  const actual = getSecureFromRequest(request);
  expect(actual).toEqual(expected);
});

test('getSignedCookiesFromRequest', () => {
  const expected = signedCookies;
  const actual = getSignedCookiesFromRequest(request);
  expect(actual).toEqual(expected);
});

test('getStaleFromRequest', () => {
  const expected = stale;
  const actual = getStaleFromRequest(request);
  expect(actual).toEqual(expected);
});

test('getSubdomainsFromRequest', () => {
  const expected = subdomains;
  const actual = getSubdomainsFromRequest(request);
  expect(actual).toEqual(expected);
});

test('getXHRFromRequest', () => {
  const expected = xhr;
  const actual = getXHRFromRequest(request);
  expect(actual).toEqual(expected);
});

test('getAppFromResponse', () => {
  const expected = app;
  const actual = getAppFromResponse(response);
  expect(actual).toEqual(expected);
});
