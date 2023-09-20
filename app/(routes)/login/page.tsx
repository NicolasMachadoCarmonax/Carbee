import { login } from '@/app/actions/auth';

export default async function Login() {
  await login({
    username: 'candidate@curbee.com',
    password: 'password',
  });
  return <></>;
}
