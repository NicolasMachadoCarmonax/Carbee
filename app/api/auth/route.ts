// imports: api url from constants, login model and cookie parser
import { carbeeLoginURL } from '@/app/constants/api';
import { ILoginBody } from '@/app/models/api';
import { createTokenCookie } from '@/app/utils/cookie';
import { Auth, Amplify } from 'aws-amplify';

// Login route function
export async function POST(request: Request) {
  try {
    Amplify.configure({
      Auth: {
        region: 'us-east-1',
        userPoolId: 'us-east-1_WCdHgTTkr',
        userPoolWebClientId: '496a838e5c58ecdg5sulfh6ulf',
      },
    });
    // parse body from request
    const body: ILoginBody = await request.json();
    // call to login api
    const user = await Auth.signIn(body.username, body.password);
    const token = user.signInUserSession.idToken.jwtToken;
    // get data and create cookie
    const cookie = createTokenCookie(token);
    // return successfull response with cookie
    return new Response('Authorized', {
      status: 200,
      headers: { 'Set-Cookie': cookie },
    });
  } catch (error: any) {
    if (error.message === 'Incorrect username or password.') {
      return new Response('Incorrect username or password', { status: 401 });
    }
    // return response with status error
    return new Response('Internal Server Error', { status: 500 });
  }
}
