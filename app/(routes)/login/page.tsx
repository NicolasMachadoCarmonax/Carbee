import { login } from '@/app/actions/auth';
import { username, password } from '@/app/constants/api';

export default async function Login() {
  await login({ username, password });
  return <></>;
}
