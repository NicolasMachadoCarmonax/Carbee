import { createTokenCookie } from '@/app/utils/cookie';

export async function GET(request: Request) {
  try {
    const cookie = createTokenCookie('');
    return new Response('Logged Out', {
      status: 200,
      headers: { 'Set-Cookie': cookie },
    });
  } catch (error) {
    return new Response('Internal server error', { status: 500 });
  }
}
