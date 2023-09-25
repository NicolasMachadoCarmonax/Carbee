import { carbeeAvailabilityURL } from "@/app/constants/api";
import { parseCookieHeaders } from "@/app/utils/cookie";

export async function GET(request: Request) {
  try {
    // get cookies from headers
    const cookieHeader = request.headers.get('Cookie') || '';
    // parse cookie headers with util function
    const token = parseCookieHeaders(cookieHeader, 'token');
    console.log(token)
    // call to availability api
    const res = await fetch(`${carbeeAvailabilityURL}/2023-11-23`, {method: 'GET', headers: {
        'Authorization': `Bearer ${token}`
    }})
    console.log(res)
    return new Response('');
  } catch (error) {
    return new Response('Internal Server Error', { status: 500 });
  }
}
