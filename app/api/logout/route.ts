import { Auth } from 'aws-amplify';

export async function GET(request: Request) {
  try {
    await Auth.signOut();
    return new Response('Logged Out');
  } catch (error) {
    return new Response('Internal server error', { status: 500 });
  }
}
