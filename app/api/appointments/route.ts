// imports:
import { parseCookieHeaders } from '@/app/utils/cookie';

// Get appointments route function
export async function GET(request: Request) {
try {
    // get cookies from headers
    const cookieHeader = request.headers.get('Cookie') || '';
    // parse cookie headers with util function
    const token = parseCookieHeaders(cookieHeader, 'token');
    // return 401 if token empty
    if (!token) {
      return new Response('Unauthorized', { status: 401 });
    }
    // call to appointments api

    return new Response('Correct!');
} catch(error) {
  return new Response('Internal Server Error', { status: 500 });
}
}
