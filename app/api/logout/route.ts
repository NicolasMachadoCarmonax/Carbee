import { createTokenCookie } from '@/app/utils/cookie';
import { Auth } from 'aws-amplify';

export async function GET(request: Request) {
  try {
    await Auth.signOut()
    const cookie = createTokenCookie('');
    return new Response('Logged Out', {
      status: 200,
      headers: { 'Set-Cookie': cookie },
    });
  } catch (error) {
    return new Response('Internal server error', { status: 500 });
  }
}
