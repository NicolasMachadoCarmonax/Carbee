// import serialize method to create cookies
import { serialize } from "cookie";

// util: create cookie with label token
export function createTokenCookie(jwt: string) {
  // serialize cookie with token label and jwt prop
  return serialize('token', jwt, {
    httpOnly: true,
    sameSite: 'strict',
    secure: process.env.NODE_ENV === 'production',
    maxAge: 24 * 60 * 60 * 1000,
  });
   
}
// util: parse cookie headers for a given key
export function parseCookieHeaders(cookieHeader: any, key: string) {
  let token;
  cookieHeader.split(';').forEach((cookie: any) => {
    const [name, value] = cookie.trim().split('=');
    if (name === key) {
      token = value;
    }
  });
  return token
}