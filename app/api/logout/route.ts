import { Auth } from 'aws-amplify';

export async function GET(request: Request) {
  try {
    await Auth.signOut();
    return new Response('Logged Out', { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response('Internal server error', { status: 500 });
  }
}
