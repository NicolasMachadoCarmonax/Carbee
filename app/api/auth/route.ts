// imports: api url from constants, login model and cookie parser
import { awsRegion, awsPoolId, awsClientId } from '@/app/constants/api';
import { ILoginBody } from '@/app/models/api';
import { createTokenCookie } from '@/app/utils/cookie';
import { Auth, Amplify } from 'aws-amplify';

// Validate user token route function
export async function GET(request: Request) {
  Amplify.configure({
    Auth: {
      region: awsRegion,
      userPoolId: awsPoolId,
      userPoolWebClientId: awsClientId,
    },
  });
  try {
    // call to login api
    await Auth.currentAuthenticatedUser();
    return new Response('Authorized', { status: 200 });
  } catch (error:any) {
    if (error === 'The user is not authenticated') {
      return new Response('The user is not authenticated', { status: 401 });
    }
    return new Response('Internal server error', { status: 500 });
  }
}

// Login route function
export async function POST(request: Request) {
  try {
    Amplify.configure({
      Auth: {
        region: awsRegion,
        userPoolId: awsPoolId,
        userPoolWebClientId: awsClientId,
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
