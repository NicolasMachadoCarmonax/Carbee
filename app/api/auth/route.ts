// imports: api url from constants, login model and cookie parser
import { carbeeLoginURL } from '@/app/constants/api';
import { ILoginBody } from '@/app/models/api';
import { createTokenCookie } from '@/app/utils/cookie';

// Login route function
export async function POST(request: Request) {
  try {
    // parse body from request
    const body: ILoginBody = await request.json();
    // call to login api
    const res = await fetch(carbeeLoginURL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    // get data and create cookie
    const data = await res.json();
    const cookie = createTokenCookie(data.token)
    // return successfull response with cookie
    return new Response('Authorized', {
      status: 200,
      headers: { 'Set-Cookie': cookie },
    });
  } catch (error: any) {
    // return response with status error
    return new Response('Internal Server Error', { status: 500 });
  }
}
